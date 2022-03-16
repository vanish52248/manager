"""体重管理のエンティティ"""
from dataclasses import dataclass

@dataclass
class BodyWeightResponse():
    """体重管理のレスポンスに必要な型定義"""
    result_data = {}
    id = int = None
    weight = int = None
    users = str = None