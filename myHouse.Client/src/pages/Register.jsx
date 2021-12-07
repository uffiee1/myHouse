import React, { useState } from "react";

import { Redirect } from "react-router";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("https://localhost:44311/api/Authentication/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
    });

    // const content = await response.json();
    // console.log(content);
    // console.log(name, email, username, password);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label for="floatingInput">Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Username"
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
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Register;
