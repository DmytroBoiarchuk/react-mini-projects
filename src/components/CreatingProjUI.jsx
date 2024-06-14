import React, {useRef} from 'react';
import Modal from "./Modal.jsx";
import Input from "./Input.jsx";

const CreatingProjUi = ({setProjectList, setEmptyProjShown}) => {
    const projData = {
        tasks:[],
    }
    const modalRef = useRef();
    const onSaveHandler = function () {
        if(!projData.title || !projData.description || !projData.date){
            modalRef.current.open();
            return
        }

        setProjectList(prevList => {
            return [...prevList, projData]
        } )
        setEmptyProjShown(true)
    }
    return (
        <div className='proj-creating-box'>
            <Modal ref={modalRef}></Modal>
            <menu className='btn-menu'>
                <button onClick={()=>setEmptyProjShown(true)} className='btn'>Cancel</button>
                <button onClick={onSaveHandler} className='save-btn btn'>Save</button>
            </menu>
            <Input onChangeHandler={(e)=>projData.title = e.target.value} type='text'>TITLE</Input>
            <Input onChangeHandler={(e)=>projData.description = e.target.value} isTextArea>DESCRIPTION</Input>

            <Input onChangeHandler={(e)=>projData.date = e.target.value} type='date'>DUE DATE</Input>

            {/*<p className='input-box'>*/}
            {/*    <label>TITLE</label>*/}
            {/*    <input onChange={(e)=>projData.title = e.target.value} type='text'/>*/}
            {/*</p>*/}
            {/*<p className='input-box'>*/}
            {/*    <label>DESCRIPTION</label>*/}
            {/*    <textarea onChange={(e)=>projData.description = e.target.value} />*/}
            {/*</p>*/}
            {/*<p className='input-box'>*/}
            {/*    <label>DUE DATE</label>*/}
            {/*    <input  onChange={(e)=>projData.date = e.target.value} type='date'/>*/}
            {/*</p>*/}

        </div>
    );
};

export default CreatingProjUi;