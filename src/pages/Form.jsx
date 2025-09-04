import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // ...values, biar object sebelumnya di state ga ilang / ketimpa
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Your name is ${inputs.name} from ${inputs.address}`);
  }
  return (
    <>
      <h1>
        {inputs.name ? `You're ${inputs.name}` : "Who are you ?"}{" "}
        {inputs.address ? `from ${inputs.address}` : "Where do you from?"}{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            id="address"
            value={inputs.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
