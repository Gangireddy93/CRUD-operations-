import "./App.css";
import { useState } from "react";
import Routing from "./component/Routing";

function App() {
  const [userdata, setUserdata] = useState([
    {
      id: 1,
      name: "Reddy",
      phone: "91823623",
      mail: "sdvhjfdj@wd",
      gender: "Male",
      image: "",
    },
    {
      id: 2,
      name: "Kiran",
      phone: "934634223",
      mail: "kiran@2bde.com",
      gender: "Male",
      image: "",
    },
    {
      id: 3,
      name: "Manasa",
      phone: "923463823",
      mail: "manasa@dfh.com",
      gender: "Female",
      image: "",
    },
    {
      id: 4,
      name: "Anil",
      phone: "91823623",
      mail: "anil@df.com",
      gender: "Male",
      image: "",
    },
    {
      id:"",
      name: "Swapna",
      phone: "924214372",
      mail: "swapna@wd",
      gender: "Female",
      image: "",
    },
  ]);

  return (
    <>
      <h1 className="flex justify-center text-center bg-amber-400 p-3">
        This is CRUD
      </h1>

      <h2 className="flex justify-center text-center bg-blue-600 text-white p-3">
        This student data using CRUD operation
      </h2>
{/* <Home userdata={userdata} /> */}
      <Routing userdata={userdata} setUserdata={setUserdata} />
      {/* <Sample/> */}
    </>
  );
}

export default App;
