import React from 'react';

const Input = ({children, onChangeHandler, isTextArea, ...props}) => {
    return (
        <p className='input-box'>
            <label>{children}</label>
            {!isTextArea ? <input onChange={onChangeHandler} {...props}/> :
                <textarea onChange={onChangeHandler} />}
        </p>
    );
};

export default Input;