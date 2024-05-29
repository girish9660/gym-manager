import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputComponent } from "../components/InputComponents";
import { LinkComponent } from "../components/LinkComponent";

export const LoginPage = () => {
    const [userName, setUserName] =useState("")
    const [password, setPassword] =useState("")
  
  return (
    <section className="app-login-page">
      <div>
       <InputComponent  inputTitle="Username" value={userName} onChange={setUserName} placeholder={"Please enter username"}/>{" "}
      </div>
      <div>
       <InputComponent inputTitle="Password" value={password} onChange={setPassword} placeholder={"Please enter password"}/>{" "}
      </div>
      <div>
        <ButtonComponent
          buttonName="Login"
          onClick={() => alert(userName + password)}
        />{" "}
        <LinkComponent linkName="Sign Up" href="http://gmail.com" />
      </div>
    </section>
  );
};
