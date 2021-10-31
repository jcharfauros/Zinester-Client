import React from 'react'

function Button({ className, buttonlabel }) {
    return <button className={className}> {buttonlabel}</button>;
    
}

export default Button;