import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 class="text-white">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div class="text-white">
          <b>Name:</b> <br /> <input name="name" type="text" />
        </div>
        <div class="text-white">
          <b>Email:</b> <br /> <input name="email" type="email" />
        </div>
        <div class="text-white">
          <b>Password:</b> <br /> <input name="password" type="password" />
        </div>
        <div class="text-white">
          <b>Password confirmation:</b> <br />
          <input name="password_confirmation" type="password" />
        </div>
        <br />
        <button type="submit" class="btn btn-light">
          Signup
        </button>
      </form>
    </div>
  );
}
