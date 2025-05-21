import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <label>Label</label>
      </label>
    </div>
  )
}