import React from 'react';
import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputComponent } from "../components/InputComponents";
import { LinkComponent } from "../components/LinkComponent";

export const LoginPage = () => {
    const [userName, setUserName] =useState("")
    const [password, setPassword] =useState("")
    const disable= !userName || !password;
  
  return (
    <section className="app-login-page">
      <div>
       <InputComponent  inputTitle="Username" value={userName} onChange={setUserName} placeholder={"Please enter username"}/>{" "}
      </div>
      <div>
      <InputComponent inputTitle="Password" value={password} onChange={setPassword} inputType="password" placeholder={"Please enter password"}/>{" "}
      </div>
      <div>
        <ButtonComponent
          buttonName="Login"
          onClick={() => disable && alert("Please enter all the field values")}
        />{" "}
        {/* <LinkComponent linkName="Sign Up" /> */}
      </div>
    </section>
  );
};
