import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { RoutingLogic } from '../logic/router-logic';

const Login = (props: any) => {
    const router = RoutingLogic()

    const [cookies, setCookie] = useCookies();
    const { register, handleSubmit } = useForm();

    const getJwt = async (data: any) =>{
        console.info(`リクエスト情報:${JSON.stringify(data)}`);
        await axios.post(process.env.REACT_APP_API_URL + 'v1/auth/jwt/create/',
          {
            username:data.username,
            password:data.password,
          },
        )
        .then(function (response) {
          console.info(`レスポンス情報：${response.data.access}`);
          // 開発者ツールのcookiesに"accesstoken"と"refreshtoken"の値がセットされる
          setCookie('accesstoken', response.data.access, { path: '/' });
          setCookie('refreshtoken', response.data.refresh, { path: '/' });
          // ログインが成功したらメニュー画面へ遷移
          router.toMenu();
        })
        .catch(err => {
            console.error("ログイン失敗");
            alert("ユーザー名かパスワードが違います");
        });
      };

    return (
        <div className="top-wrapper">
          <div className="login">
            <h3>Login</h3>
          </div>
          <div className="login-block">
            <form onSubmit={handleSubmit(getJwt)}>
              <label htmlFor='username'>Username：</label>
              <input autoFocus className='form-control' {...register('username')} />
              <label htmlFor='password'>PassWord：</label>
              <input className='form-control' type="password" {...register('password', { required: true })} />
              <input className='btn btn-secondary' type="submit" value="ログイン" />
            </form>
          </div>
        </div>
    );
  }

  export default Login;
