import { useState } from "react";

export default function Select() {
  const [age, setAge] = useState(" ");
  return (
    <div>
      <label>Age</label>
      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="ten">Ten</option>
        <option value="Twenty">Twenty</option>
        <option value="Thirty">Thirty</option>
      </select>
    </div>
  )
}
