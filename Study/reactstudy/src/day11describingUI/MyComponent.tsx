import React from "react";
import usersJSON from "./users.json";

export default function MyComponent() {
  const { users } = usersJSON;
  return (
    <div>
      <ul>
        {users
          .filter(({ age }) => age < 30)
          .map((user) => {
            return (
              <li key={user.id}>
                <UserInfo
                  user={user} 
                  // firstName={firstName}
                  // lastName={lastName}
                  // age={age}
                  // hair={hair}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

function UserInfo({ user }: any) {
  const { firstName, lastName, age, hair, gender } = user;
  return (
    <>
      <div>{firstName}</div>
      <div>{lastName} </div>
      {/* {gender !== "female" && <div>{age}</div>} */}
      {gender !== "female" ? null : <div>{age}</div>}
      <div>{hair.color}</div>
      <div>{hair.type}</div>
      <div style={{ color: gender === "female" ? "pink" : "blue" }}>
        {gender === "female" ? "Woman" : "Man"}
      </div>
    </>
  );
}
