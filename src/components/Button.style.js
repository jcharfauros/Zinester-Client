import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
    width: 200p;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};

    &:hover {
        background-color: honeydew;

        & label {
            color: greenyellow;
        }
    }   
    &:active {
        background-color: lightcyan;
    }
`

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`