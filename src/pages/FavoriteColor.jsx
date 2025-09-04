import { useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("aquamarine");
  const style = {
    color: "white",
    padding: "10px",
    borderRadius: "10px",
  };

  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <>
      <h1>
        My Favorite Color is
        <span
          style={
            color === "white"
              ? { backgroundColor: "black", ...style }
              : { backgroundColor: `${color}`, ...style }
          }
        >
          {color}
        </span>
        !
      </h1>

      <input type="text" placeholder="Color" onChange={handleChange} />
    </>
  );
}
