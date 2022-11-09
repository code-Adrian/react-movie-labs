import React, { useCallback} from "react";
import fireapp from "../../firebase";
import * as auth from "firebase/auth"


const SignUp = ({ history }) => {


  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(fireapp,email.value, password.value);  

    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;