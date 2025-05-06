import React from "react";
import AuthForm from "../components/Login/AuthForm";
import Navbar from '../components/Navbar2';
import "../styles/login.css";

function Login() {
	return (
		<>
		  <Navbar />
		  <div className="login-page">
			<AuthForm />
		  </div>
		</>
	  );
}

export default Login;
