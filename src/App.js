import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    // Add your form submission logic here (e.g., send data to server)
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name} // Set value from state
          onChange={handleInputChange}
          aria-label="Name"
        />

        <br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email} // Set value from state
          onChange={handleInputChange}
          aria-label="Email"
        />

        <br />

        <fieldset>
          <legend>Interests:</legend>
          <label htmlFor="technologyCheckbox">
            <input
              id="technologyCheckbox"
              type="checkbox"
              value="Technology"
              onChange={handleInputChange}
            />
            Technology
          </label>
          <br />
          <label htmlFor="travelCheckbox">
            <input
              id="travelCheckbox"
              type="checkbox"
              value="Travel"
              onChange={handleInputChange}
            />
            Travel
          </label>
          <br />
          <label htmlFor="foodCheckbox">
            <input
              id="foodCheckbox"
              type="checkbox"
              value="Food"
              onChange={handleInputChange}
            />
            Food
          </label>
        </fieldset>

        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;