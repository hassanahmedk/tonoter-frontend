import React from 'react'

import Logo from '../Misc/Logo'
import LoginText from './LoginText'
import LoginForm from './Login'

function LoginSection() {
  return (
   <div className='login-section'>
        <div className="login-top">
            <Logo />
          </div>

          <div className="login-mid">
            <LoginText />
          </div>

          <div className="login-bottom">
            <LoginForm />
          </div>
   </div>
  )
}

export default LoginSection;