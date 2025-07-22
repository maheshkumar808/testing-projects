import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className="h-screen flex justify-center items-center">
      <section className=" w-1/3 container flex justify-center items-center gap-5">
        <Link to="/signUp">
          <Button className="px-8 py-3 bg-transparent border-2 border-white hover:shadow-2xl hover:shadow-white ">
            SignUp
          </Button>
        </Link>
        <Link to="/signIn">
          <Button className="px-8 py-3 bg-transparent border-2 border-white hover:shadow-2xl hover:shadow-white ">
            SignIn
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default index;
