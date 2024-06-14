import SideBar from "./components/SideBar.jsx";
import UserInterface from "./components/UserInterface.jsx";
import { useRef, useState } from "react";

function App() {
  const [emptyProjShown, setEmptyProjShown] = useState(true);
  const [projectList, setProjectList] = useState([]);
  const [projShown, setProjShown] = useState(false);
  const [currentProj, setCurrentProj] = useState(0);
  return (
    <main className="main-screen">
      <SideBar
          projShown={projShown}
        currentProj={currentProj}
        setEmptyProjShown={setEmptyProjShown}
        setProjShown={setProjShown}
        setCurrentProj={setCurrentProj}
        projectList={projectList}
      ></SideBar>
      <UserInterface
        projToRender={projectList[currentProj]}
        currentProj={currentProj}
        projShown={projShown}
        setProjectList={setProjectList}
        emptyProjShown={emptyProjShown}
        setEmptyProjShown={setEmptyProjShown}
        setProjShown={setProjShown}
      ></UserInterface>
    </main>
  );
}

export default App;
