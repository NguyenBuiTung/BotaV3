import React from "react";
import FormLogin from "./FormLogin";

export default function LoginIdWeb() {
  return (
    <div className="login">
      <div className="logo">
        <img src="./img/logo_idbnc.png" alt="" />
      </div>
      <div className="content">
        <FormLogin/>
      </div>
    </div>
  );
}
