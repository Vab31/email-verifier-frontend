import './index.css'
import React, { useEffect, useState } from 'react';
import serverDB from './assets/server.png'
import linkedIn from './assets/Linkedin.png'
import google from './assets/google.png'
import visible from './assets/visibility_on.png'
import invisible from './assets/visibility_off.png'
import { HelmetData, HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  // useEffect(() =>{
  //   //Dynamically inject the Google platform script
  //   const script = document.createElement('script');
  //   script.src = "https://apis.google.com/js/platform.js"
  //   script.async = true
  //   script.defer = true
  //   script.onload = () => {
  //     console.log("Google API script loaded successfully.");
  //   };
  //   script.onerror = () => {
  //     console.error("Error loading Google API script.");
  //   };
  //   document.body.appendChild(script)

  //   //clean up script when the component unmounts
  //   return () =>{
  //     document.body.removeChild(script);
  //   }
  // }, [])

  // const helmetData = new HelmetData();

  const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    // <HelmetProvider>
    <GoogleOAuthProvider clientId="1022786737721-i044gi599phr57pman7gsi680l1dqfkk.apps.googleusercontent.com">
      <div className="page-container">
      {/* <Helmet>
        <meta name="google-signin-client_id" content="1022786737721-i044gi599phr57pman7gsi680l1dqfkk.apps.googleusercontent.com" />
      </Helmet> */}

      <a href="/" className="h-20 flex items-center gap-1 p-4 ml-[8%] top-0">
        <img src={serverDB} alt="server-logo" className="h-8 w-8 ml-15" />
        <p><b>ServerDB</b></p>
      </a>

      <section className="w-full h-[75vh] mt-6 flex items-center justify-center ">
        <section className="h-full flex flex-col items-center gap-4 overflow-visible">
          <p className="text-2xl font-bold text-gray-600">Welcome Back!</p>

          <div className="w-full flex justify-center gap-2 max-sm:flex-col max-sm:items-center">
            <a href="/login" className="outline outline-1 rounded-sm w-48 h-9 flex justify-center items-center gap-1 max-sm:min-w-60">
              <img src={linkedIn} alt="linkedin-logo" className="h-4 w-5" />
              <p className="text-xs font-bold text-gray-600">LinkedIn</p>
            </a>
            <a href="/login" data-onsuccess="onSignIn" className="g-signin2 outline outline-1 rounded-sm w-48 h-9 flex justify-center items-center gap-1 max-sm:min-w-60">
              {/* <img src={google} alt="google-logo" className="h-5 w-5" />
              <p className="text-xs font-bold text-gray-600">Google</p> */}
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </a>
          </div>

          <div className="w-full flex items-center justify-center gap-2 my-4">
            <div className="h-[0.2px] w-[30%] bg-gray-500"></div>
            <p className="text-xs">Or use your work email</p>
            <div className="h-[0.2px] w-[30%] bg-gray-500"></div>
          </div>

          <div className="w-full outline outline-1 rounded-sm h-9 text-xs p-2 mx-4 flex items-center max-sm:min-w-48">
            <input type="text" className="w-full outline-none" placeholder="Enter your Work email" />
          </div>

          <div className="w-full outline outline-1 rounded-sm h-9 flex justify-between items-center text-xs p-2 mx-4 max-sm:min-w-48">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="w-full outline-none"
              placeholder="Password"
              id="invisible"
            />
            <img
              src={isPasswordVisible ? invisible : visible}
              alt="visibility"
              className="h-4 w-4 mr-2"
              id="icon"
              onClick={toggleVisibility}
            />
          </div>

          <a href="#" className="w-full text-right text-xs text-[#6a69ff] max-sm:w-60 max-sm:text-right">Forgot Password?</a>

          <button className="w-full bg-[#6a69ff] h-8 rounded text-white text-[10px] font-bold hover:bg-[#5857e0] max-sm:min-w-48 max-sm:min-h-8">Sign In</button>
          <p className="w-full text-left text-xs">Need an account? <a href="#" className="text-[#6a69ff]">Create an account for free</a></p>
        </section>
      </section>

      {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}
    </div>
    </GoogleOAuthProvider>
    // </HelmetProvider>
  );
};

export default LoginPage;
