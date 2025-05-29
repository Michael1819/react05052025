import React, { useState } from "react";

const items: string[] = ["item1", "item2", "item3"];

export default function SelectAllForm() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const isAllSelected = selectedItems.length === items.length;

  function handleSelect(item: string) {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  function handleSelectAll() {
    setSelectedItems(isAllSelected ? [] : [...items]);
  };

  return (
    <div>
      <h2>All the selected Items:</h2>
      <p>{selectedItems.join(", ")}</p>

      <label>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        SelectAll
      </label>
      {items.map((item) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleSelect(item)}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}


