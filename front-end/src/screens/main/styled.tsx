import styled from "styled-components"
import { FourthColor, MainColor, SecondColor, ThirdColor } from "../../constants/colors"

export const Container = styled.div`
    color: ${FourthColor};
    background-color: ${MainColor};
    display: flex;
    flex-direction: column;   
    align-items: center;
    button{
        background-color: ${FourthColor};
        color: #000000;
        width: 90px;
        height: 40px;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        margin-top: 1rem;

        &:hover {
            background-color: ${SecondColor};
        } 
    }
`