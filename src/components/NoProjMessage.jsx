import React from "react";
import icon from '../assets/no-projects.png'
const NoProjMessage = ({ setEmptyProjShown}) => {
  return (
    <div className="proj-box">
      <img className="icon" alt="An empty task list" src={icon} />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={()=>setEmptyProjShown(false)} className="create-new-proj-btn btn">Create new project</button>
    </div>
  );
};

export default NoProjMessage;
