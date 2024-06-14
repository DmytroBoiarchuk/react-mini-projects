import React from "react";

const SideBar = ({
  projShown,
  currentProj,
  setEmptyProjShown,
  setProjShown,
  setCurrentProj,
  projectList,
}) => {
  const projShowBTNHandler = (index) => {
    setProjShown(true);
    setCurrentProj(index);
  };
  const projCreateBTNHandler = () => {
    setEmptyProjShown(false);
    setProjShown(false);
  };
  return (
    <div className="side-bar">
      <h2>Your Projects</h2>
      <button onClick={projCreateBTNHandler} className="add-proj-btn btn">
        + Add Project
      </button>
      <ul className="list-box">
        {projectList &&
          projectList.map((proj, index) => (
            <button
              onClick={() => projShowBTNHandler(index)}
              key={index}
              className={`list-btn${currentProj === index && projShown ? "-active" : ""}`}
            >
              {proj.title}
            </button>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
