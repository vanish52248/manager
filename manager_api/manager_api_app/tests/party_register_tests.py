"""パーティー登録機能のUT"""
from django.test import Client, RequestFactory, TestCase

from django.test import TestCase
from salary_simulator_api.views.calc_view import CalcView

class TestPost(TestCase):
    fixtures = ["db_backup.yaml"]

    def setUp(self):
        self.client = Client()

    def test_post_002(self):
        """monthly_price正常系"""
        data = {
            "time_of_utilization": 160,
            "transportation_expenses": 36050,
            "other_expenses": 0,
            "monthly_price": 700000,
            "settlement_time_remove": 140,
            "settlement_time_over": 190,
            "settlement_time_fix": False,
            "insurance_coverage": False,
        }
        request = self.client.post('/salary_simulator_api/calc/', data)
        self.assertEqual(request.status_code, 200)
