import React, { useRef } from 'react'
import {useNavigate,Link} from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let emailRef = useRef()
    let passwordRef = useRef()

    let login =()=>{
        let enteremail = emailRef.current.value;
        let enterpassword = passwordRef.current.value;
        
        if(enteremail== 'sk00498@gmail.com' && enterpassword == 123){navigate('/home', {state:{email:enteremail}})
              alert('continue')}

    }

  return (
    <div className='loginpage'>
        <h1 className='logo'><spam>M</spam>ovieezWorld</h1>
        
        <center>
        <form>
            <div>
                <label>Email Id</label>
                <input ref={emailRef} type='text' placeholder='sk00498@gmail.com'></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordRef} type='password' placeholder='123'></input>
            </div>
            <div>
                <button onClick={()=>{
                    login();
                }}>Login</button>
            </div>
        </form>
        </center>
                
    </div>
  )
}

export default Login