import axios from 'axios'
import { useState } from 'react';
import Loading from './Loading';
// import { useNavigate } from 'react-router-dom'


const Login = ({fillDetails}) => {
  const [loading,setLoading] = useState(false)
  const [login,setLogin] = useState(null);

    const onSubmit = async (e)=>{
      setLoading(true);
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let res  = await axios.post('https://auth-app-api-3qf8.onrender.com/login',{
          username : username,
          password : password
        },{
          headers:{
            'Content-Type':'application/json',
          }
        });
        if(res.data.login === true){
          setLoading(false)
          setLogin(true);
          fillDetails({
            username : username,
            password : password
          });
        }
        else{
          setLogin(false);
          setLoading(false)
        }
        setTimeout(()=>{
          setLogin(null)
        },2000)
    }

  return (
    <div className="login-con">
      {login == true ?<h1 id='succ'>Login Successfull</h1> : null}
      {login == false ?<h1 id='succ'>Login Failed Incorrect details</h1> : null}
        <form className="form" onSubmit={e => onSubmit(e)}>
            <h1>Login</h1>
            <label htmlFor="username" className="">Name</label>
            <input type="text" name="username" className="in"  />
            <label htmlFor="password" className="">Password</label>
            <input type="password" name="password" className="in"/>
            <input type="submit" value="Login" id="btn"/>
        </form>
        {loading == true ? <Loading/> : null}
    </div>
  )
}

export default Login
