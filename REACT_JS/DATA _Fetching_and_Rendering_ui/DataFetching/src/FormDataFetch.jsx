import { useState } from "react";

export function RegistrationForm() {
  const [formdata, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 
    console.log(formdata); // shows current state values
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {}
        <input type="text"name="name" placeholder="Enter Name" onChange={handleChange} />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
