import React, { useMemo, useState } from "react";

// shall be able to sort people based on name or birthdate
interface Person {
  name: string;
  birthdate: string;
}

export default function BirthdayRecord() {
  const [sortBy, setSortBy] = useState<"name" | "age" | null>(null);

  const people: Person[] = [
    { name: "John Doe", birthdate: "01/15/1990" },
    { name: "Jane Smith", birthdate: "03/22/1985" },
    { name: "Michael Johnson", birthdate: "09/10/1992" },
    { name: "Emily Williams", birthdate: "06/05/1988" },
    { name: "David Brown", birthdate: "12/04/1997" },
    { name: "Sarah Davis", birthdate: "07/19/1991" },
    { name: "Christopher Wilson", birthdate: "11/30/1984" },
    { name: "Jessica Taylor", birthdate: "02/08/1994" },
  ];

  const sortedPeople = useMemo(() => {
    return [...people].sort((p1, p2) => {
      if (sortBy === "name") {
        return p1.name.localeCompare(p2.name);
      }
      if (sortBy === "age") {
        return new Date(p1.birthdate).getTime() - new Date(p2.birthdate).getTime();
      }
      return 0;
    });
  }, [sortBy, people]);

  return (
    <div>
      <div>
        <label>sort by </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="name"
            checked={sortBy === "name"}
            onChange={() => setSortBy("name")}
          />
          name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="age"
            checked={sortBy === "age"}
            onChange={() => setSortBy("age")}
          />
          age
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => (
            <tr key={person.name + person.birthdate}>
              <td>{person.name}</td>
              <td>{person.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}