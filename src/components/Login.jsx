import React from 'react'
import auth from '../firebase';
import provider from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  return (
    <div>
        <h1>
        ログイン画面
        </h1>
        <SignInButton />
    </div>
  )
}

export default Login

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return <button onClick={signInWithGoogle}>
        <p>Google Sign in</p>
    </button>
}