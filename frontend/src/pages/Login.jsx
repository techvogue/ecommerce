import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { setToken, navigate, backendUrl, token } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "SignUp") {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setCurrentState('Login'); 
          setName('');
          setEmail('');
          setPassword('');
          toast.success(response.data.message + '. Please log in.');
        } else {
          toast.error("Registration failed");
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token); 
          localStorage.setItem("token", response.data.token); 
          toast.success("Login successful");
        } else {
          toast.error("Login failed");
        }
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

 
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);




  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState !== 'Login' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('SignUp')}
            className="cursor-pointer"
          >
            Create account
            
          </p>

        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>

      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
