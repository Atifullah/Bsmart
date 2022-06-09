
import SignUpForm from '../SignUp/sign-up.component';
import SignInForm from "../sign-in-form/sign-in-form.component";
import './Authentication.scss';
const Authentication = () => {
  
    return (
      <div className='authentication-container'>
        
       <SignInForm/>
        <SignUpForm/>
      </div>
    );
  };
  
  export default Authentication;