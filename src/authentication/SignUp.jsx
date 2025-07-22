import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseAuth';
import Swal from 'sweetalert2';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('createUser!');
      Swal.fire({
        icon: 'success',
        title: 'Authentication successful',
        text: 'created user',
      });
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log('err', err);
      // setError(err.message);
      Swal.fire({
        icon: 'error',
        title: 'Authentication Error',
        text: err,
      });
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="container max-w-sm grid grid-cols-1 p-8 place-content-center shadow-2xl shadow-amber-50 rounded-sm"
      >
        <h1 className="text-4xl font-bold text-center">sign up</h1>
        <div className="mt-4">
          <label className="text-2xl">E-mail</label>
          <Input
            type="e-mail"
            onChange=""
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div className="mt-4">
          <label className="text-2xl">Password</label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            className="rounded-sm  border-2 border-white shadow-b-white"
            type="submit"
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
