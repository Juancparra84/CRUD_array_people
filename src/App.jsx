import { useState } from "react";
import "./App.css";
import { People } from "./components/People";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Juan Parra",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "David Romero",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "Inés Oliveros",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
  ]);

  return (
    <div>
      <People people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
