import React from "react";
import CreatingProjUi from "./CreatingProjUI.jsx";
import NoProjMessage from "./NoProjMessage.jsx";
import ProjectUi from "./ProjectUI.jsx";
const UserInterface = ({
  setProjShown,
  currentProj,
  projToRender,
  projShown,
  setProjectList,
  emptyProjShown,
  setEmptyProjShown,
}) => {
  return (
    <>
      {emptyProjShown && !projShown && (
        <NoProjMessage setEmptyProjShown={setEmptyProjShown} />
      )}
      {!emptyProjShown && !projShown && (
        <CreatingProjUi
          setProjectList={setProjectList}
          setEmptyProjShown={setEmptyProjShown}
        ></CreatingProjUi>
      )}
      {projShown && (
        <ProjectUi
            setProjShown={setProjShown}
          setProjectList={setProjectList}
          currentProj={currentProj}
          projToRender={projToRender}
        />
      )}
    </>
  );
};

export default UserInterface;
