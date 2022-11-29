import React from 'react'

import Logo from '../Misc/Logo'
import SignupText from './SignupText'
import SignupForm from './Signup'

function SignupSection() {
  return (
   <div className='signup-section'>
        <div className="signup-top">
            <Logo />
          </div>

          <div className="signup-mid">
            <SignupText />
          </div>

          <div className="signup-bottom">
            <SignupForm />
          </div>
   </div>
  )
}

export default SignupSection