import React from 'react';

const Button = ({children}) => {
    // console.log(props)
    // const {children} = props;
    return (
        <div>
            <button className='btn btn-secondary'>{children}</button>
        </div>
    );
};

export default Button;