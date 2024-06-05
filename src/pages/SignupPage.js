
import React, { useState } from 'react';
import { ButtonComponent } from "../components/ButtonComponent";
import { InputComponent } from "../components/InputComponents";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const disable = !email || !userName || !password || !confirmPassword;

  return (
    <section className="app-signup-page">
      <div>
        <InputComponent
          inputTitle="Email Id"
          value={email}
          onChange={setEmail}
          placeholder={"Please enter Email"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Username"
          value={userName}
          onChange={setUserName}
          placeholder={"Please enter Username"}
        />
      </div>
      <div>
        <InputComponent
          inputType="password"
          inputTitle="Password"
          value={password}
          onChange={setPassword}
          placeholder={"Please enter Password"}
        />
      </div>
      <div>
        <InputComponent
          inputType="password"
          inputTitle="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder={"Please enter Confirm Password"}
        />
      </div>
      {password !== confirmPassword && 
      <div  className="app-password-error" >
        <p>Passwords doesnot match. Please check</p>
      </div>}
      
      <div>
        <ButtonComponent
          buttonName="Sign Up"
          onClick={() => disable && alert("Please enter all the values")}
        />
      </div>
    </section>
  );
};
