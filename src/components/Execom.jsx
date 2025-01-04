import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/execom.css";

import Shameem from "../assets/images/Sir.jpg";
import Sangeeth from "../assets/images/Sangeeth.jpg";
import Sona from "../assets/images/Sona.jpg";
import Amit from "../assets/images/Amit.png";
import Aron from "../assets/images/Aron.jpg";
import Rohit from "../assets/images/Rohit.jpg";
import Afeef from "../assets/images/Afeef1.png";
import Sreeresh from "../assets/images/Sreeresh1.png";
import Mizhab from "../assets/images/Mizhab.jpg";
import Vishnu from "../assets/images/Vishnu.jpg";
import Hridya from "../assets/images/Hridya.jpg";
// import Akshay from "../assets/images/Akshay.jpg";
import Shikha from "../assets/images/Shikha.jpg";
import Alan from "../assets/images/Alan.jpg";
import Jobin from "../assets/images/Jobin.jpg";
import Swarag from "../assets/images/Swarag.jpg";
import Johan from "../assets/images/Johan.jpg";
import Aditya from "../assets/images/Aditya.jpg";
import Liya from "../assets/images/Liya.jpg";
import Fathima from "../assets/images/Fathima.jpg";

const Execom = () => {
  const [visible, setVisible] = useState(false);

  const [execomList, setExecomList] = useState([
    {
      title: "Faculty Incharge",
      members: [
        {
          id: 0,
          name: "Prof. Shameem Ansar A",
          role: "Faculty Coordinator",
          image: Shameem,
        },
      ],
    },
    {
      title: "Chief Coordinators",
      members: [
        {
          id: 1,
          name: "Sangeeth",
          //   role: "Faculty Coordinator",
          image: Sangeeth,
        },
        {
          //   id: 1,
          name: "Sona",
          //   role: "Faculty Coordinator",
          image: Sona,
        },
      ],
    },
    {
      title: "Program Coordinators",
      members: [
        {
          name: "Aron",
          image: Aron,
        },
        {
          name: "Rohit",
          image: Rohit,
        },
      ],
    },
    {
      title: "Finance Head",
      members: [
        {
          name: "Afeef",
          image: Afeef,
        },
      ],
    },
    {
      title: "Web Heads",
      members: [
        {
          name: "Sreeresh",
          image: Sreeresh,
        },
        {
          name: "Amit",
          image: Amit,
        },
      ],
    },
    {
      title: "Tech Team",
      members: [
        {
          name: "Mizhab",
          image: Mizhab,
        },
        {
          name: "Vishnu",
          image: Vishnu,
        },
      ],
    },
    {
      title: "Design Team",
      members: [
        {
          name: "Hridya",
          image: Hridya,
        },
        {
          name: "Akshay",
          image: Amit,
        },
      ],
    },
    {
      title: "Execom Representatives",
      members: [
        {
          name: "Shikha",
          image: Shikha,
        },
        {
          name: "Alan",
          image: Alan,
        },
        {
          name: "Jobin",
          image: Jobin,
        },
        {
          name: "Swarag",
          image: Swarag,
        },
      ],
    },
    {
      title: "Publicity Coordinators",
      members: [
        {
          name: "Johan",
          image: Johan,
        },
        {
          name: "Aditya",
          image: Aditya,
        },
      ],
    },
    {
      title: "Documentatino Team",
      members: [
        {
          name: "Liya",
          image: Liya,
        },
        {
          name: "Fathima",
          image: Fathima,
        },
      ],
    },
  ]);

  const [items, setItems] = useState([
    { id: 0, title: 2022 },
    { id: 1, title: 2023 },
    { id: 2, title: 2024 },
    { id: 3, title: 2025 },
    { id: 4, title: 2026 },
  ]);

  const [currentYear, setCurrentYear] = useState(2024);

  const renderedCards = execomList.map((execom, index) => (
    <div key={index} className="flex flex-col items-center">
      <span className="text-xl font-bold">{execom.title}</span>

      <div className="execom-card flex gap-5 bg-whit rounded-lg shadow-lg p-3 ">
        {execom.members.map((member, index) => (
          <div
            className="flex flex-col items-center justify-between gap-2 transition-transform duration-300 transform hover:scale-105"
            key={index}
          >
            {
              <img
                src={member.image}
                alt={member.name}
                className="execom-card-image w-32 object-cover shadow-md"
              />
            }
            <span>{member.name != "Sreeresh" ? member.name : ""}</span>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <Header />
        <Sidebar
          visible={visible}
          position="right"
          onHide={() => setVisible(false)}
        >
          <div className="flex flex-col gap-7 items-center">
            <Link to="/" onClick={() => setVisible(false)}>
              Home
            </Link>
            <Link to="/events" onClick={() => setVisible(false)}>
              Events
            </Link>
            <Link to="/execom" onClick={() => setVisible(false)}>
              Execom
            </Link>
            <Link to="/contacts" onClick={() => setVisible(false)}>
              Contact
            </Link>
          </div>
        </Sidebar>
      </div>

      <div className="flex flex-col gap-20 p-3 sm:px-14">
        <div className="flex">
          <div className="font-black text-4xl sm:text-6xl">EXECOM</div>
          <div className="flex-auto border-b-4 mb-2 ml-2"></div>
        </div>

        <div className=" ">
          <span className="rounded-lg bg-white p-2 px-4 text-black">
            {currentYear}
          </span>
        </div>

        <div className="flex justify-center">
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
            {renderedCards}
          </div>
        </div>
      </div>
    </>
  );
};

export default Execom;
