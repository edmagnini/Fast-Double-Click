import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ClickDataInputDTO } from "../../models/clickTime";
import { Container } from "./styled";

const Main = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);
    const [initialTime, setInitialTime] = useState(0);

    const handleClick = () => {
        setStatus(status + 1)
    }
    useEffect(() => {
        timer()
    }, [status])


    const timer = () => {
        if (status === 1) {
            setInitialTime(Date.now())
        }
        if (status === 2) {
            const body: ClickDataInputDTO = { click: ((Date.now() - initialTime) / 1000) }
            sendDataAPI(body)
        }
    }
    const sendDataAPI = async (clickTimeData: ClickDataInputDTO) => {
        try {
            const response = await axios.post(`http://localhost:3003/click/create`, clickTimeData)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            {status === 2 ? "Tempo registrado com sucesso!" : "Clique no botão click para ver o seu tempo de reação"}
            <button onClick={() => handleClick()}>CLICK</button>
            <button onClick={() => navigate("/list")}>Lista de resultados</button>
        </Container>
    )
}

export default Main