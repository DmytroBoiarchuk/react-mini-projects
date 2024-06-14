import React, { useState} from "react";

const ProjectUi = ({ setProjShown, setProjectList, currentProj, projToRender }) => {
  const [inputValue, setInputValue] = useState('');
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(projToRender.date),
  );
  const onInputChangeHandler =(e) => {
      setInputValue(e.target.value)
  }
  const deleteProjHandler = () => {
      setProjectList(prev => {
          let newProjectList = [...prev.map(proj =>  JSON.parse(JSON.stringify(proj)))];
          return newProjectList.filter((_,index) => index !== currentProj);
      });
      setProjShown(false)
  }
  const taskClearHandler = (indexToRemove) => {
      setProjectList(prev => {
          const newProjectList = [...prev.map(proj =>  JSON.parse(JSON.stringify(proj)))];
          newProjectList[currentProj].tasks = newProjectList[currentProj].tasks.filter((_,index)=> index!== indexToRemove);
          return newProjectList;
      });
  }
  const addTaskHandler = (e) => {
    e.preventDefault();
    setProjectList(prev => {
      const newProjectList = [...prev.map(proj =>  JSON.parse(JSON.stringify(proj)))];
      newProjectList[currentProj].tasks.push(inputValue);
        return newProjectList;
    });
    setInputValue('')

  };



  return (
    <div className="proj-creating-box">
      <header className="proj-header">
        <div>
          <h1>{projToRender.title}</h1>
          <button onClick={deleteProjHandler}>Delete</button>
        </div>
        <p className="date-info">{date}</p>
        <p className="description-info">{projToRender.description}</p>
      </header>
      <section id="proj-section">
        <h2>Tasks</h2>
        <form onSubmit={(e) => addTaskHandler(e)}>
          <input onChange={(e) => onInputChangeHandler(e)} value={inputValue} />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {projToRender.tasks.map((task, i) => (
            <li key={i}>
              <span>{task}</span>
              <button onClick={()=>taskClearHandler(i)}>Clear</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectUi;
