import React, { useState } from "react";

export default function UpdatingObjectState() {
  return (
    <div>
      <h2>Example 1: Update single property</h2>
      <UpdateName />

      <h2>Example 2: Update nested object</h2>
      <UpdateNestedObject />

      <h2>Example 3: Update city manually</h2>
      <UpdateCityManually />

      <h2>Example 4: Toggle boolean in object</h2>
      <ToggleOnlineStatus />

      <h2>Example 5: Partial reset</h2>
      <PartialReset />
    </div>
  );
}

function UpdateName() {
  const [person, setPerson] = useState({ name: "Alice", age: 25 });
  const { name, age } = person;
  function handleChangeName() {
    setPerson({ ...person, name: "Bob" });
  }

  return (
    <div>
      <div>
        {name}, {age}
      </div>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

function UpdateNestedObject() {
  const [state, setState] = useState({
    user: {
      name: "Charlie",
      address: { city: "New York", zip: "10001" },
    },
  });

  function updateCity() {
    setState({
      ...state,
      user: {
        ...state.user,
        address: {
          ...state.user.address,
          city: "Los Angeles",
        },
      },
    });
  }

  return (
    <div>
      <div>
        {state.user.name} lives in {state.user.address.city}
      </div>
      <button onClick={updateCity}>Change City</button>
    </div>
  );
}

function UpdateCityManually() {
  const [state, setState] = useState({
    user: {
      name: "Charlie",
      address: { city: "New York", zip: "10001" },
    },
  });
  const [inputCity, setInputCity] = useState("");

  function handleChangeCity() {
    setState((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        address: {
          ...prev.user.address,
          city: inputCity,
        },
      },
    }));
    setInputCity("");
  }

  return (
    <div>
      <div>
        {state.user.name} lives in {state.user.address.city}
      </div>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={handleChangeCity}>Change City</button>
    </div>
  );
}

function ToggleOnlineStatus() {
  const [user, setUser] = useState({ username: "doge", online: false });

  function toggleOnline() {
    setUser({ ...user, online: !user.online });
  }

  return (
    <div>
      <div>
        {user.username} is {user.online ? "online" : "offline"}
      </div>
      <button onClick={toggleOnline}>Toggle Online</button>
    </div>
  );
}

function PartialReset() {
  const [form, setForm] = useState({
    name: "Zhang",
    email: "zhang@example.com",
    subscribed: true,
  });

  function resetEmailAndSubscription() {
    setForm({
      ...form,
      email: "",
      subscribed: false,
    });
  }

  return (
    <div>
      <div>Name: {form.name}</div>
      <div>Email: {form.email}</div>
      <div>Subscribed: {form.subscribed ? "Yes" : "No"}</div>
      <button onClick={resetEmailAndSubscription}>Reset Email + Sub</button>
    </div>
  );
}
