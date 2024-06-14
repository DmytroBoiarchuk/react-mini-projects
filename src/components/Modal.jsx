import React, {forwardRef, useImperativeHandle, useRef} from 'react';

const Modal = forwardRef((props, ref) => {
    const dialogRef= useRef()
    useImperativeHandle(ref,()=>{
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })
    return (
        <dialog className='dialog' ref={dialogRef}>
            <h2>Invalid Input</h2>
            <p>Oops ... looks like you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for every input field.</p>
            <form method='dialog'>
                <button>Okay</button>
            </form>
        </dialog>
    );
}
);

export default Modal;