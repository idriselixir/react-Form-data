import { useState } from "react";
import './App.css';
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [POO, setPOO] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className="App">
      <h1>Fill the Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <input
        type="Email"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="Date"
        placeholder="D.O.B"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <input
        type="Text"
        placeholder="P.O.O"
        value={POO}
        onChange={(event) => {
          setPOO(event.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="Age"
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        type="Text"
        placeholder="Gender"
        value={gender}
        onChange={(event) => {
          setGender(event.target.value);
        }}
      />
      <input
        type="Text"
        placeholder="Status"
        value={status}
        onChange={(event) => {
          setStatus(event.target.value);
        }}
      />
      <div>
        <h1>Name:{name}</h1>
        <h1>Number:{number}</h1>
        <h1>Email:{email}</h1>
        <h1>Date:{date}</h1>
        <h1>P.O.O:{POO}</h1>
        <h1>Age:{age}</h1>
        <h1>Gender:{gender}</h1>
        <h1>Status:{status}</h1>
      </div>
    </div>
  );
}

export default App;
