import styled from "styled-components"
import { FourthColor, MainColor, SecondColor, ThirdColor } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${FourthColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    button{
        align-self: flex-end;
        background-color: ${FourthColor};
        color: #000000;
        width: 230px;
        height: 40px;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;

        &:hover {
            background-color: ${SecondColor};
        } 
    }
`

export const TableContainer = styled.div`
    
`
export const TableContainerHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const TableContainerContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`
export const TableClickData = styled.span`
    margin-left: 160px;
    margin-right: -300px;
`
