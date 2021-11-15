import { useState } from 'react';
// import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

export const PasswordToggle = () => {
    const [ visible, setVisible ] = useState(false);
    
    const InputType = visible ? 'text' : 'password';

    return [InputType];
}

export default PasswordToggle;