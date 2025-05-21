import { useState } from "react";

export default function RadioGroup() {
  const [gender, setGender] = useState(" ");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <p>Gender</p>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={handleChange}
        />
        Other
      </label>
    </div>
  );
}
