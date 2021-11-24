import "./Login.css";

import React, { useState } from "react";

import { Redirect } from "react-router";

function Login() {
  // const [email, setEmail] = useState("");
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const SignIn = async (e) => {
    e.preventDefault();

    await fetch("https://localhost:44311/api/Authentication/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // const content = await response.json();
    // console.log(content);
    // console.log(name, email, username, password);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={SignIn}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            {/* <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            /> */}

            <input
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
