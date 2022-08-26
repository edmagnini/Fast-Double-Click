import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClickData } from "../../models/clickData";
import { clickSearchInputDTO } from "../../models/clickSearchInputDTO";
import { Container, TableClickData, TableContainer, TableContainerContent, TableContainerHeader } from "./styled";

const ClickList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    useEffect(() => {
        const search = { order: "click", type: "asc" }
        getDataAPI(search)
    }, [])
    const getDataAPI = async (searchData: clickSearchInputDTO) => {
        try {
            const response = await axios.get(`http://localhost:3003/click/clicks/click/asc`)
            setData(response.data.clickData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <button onClick={()=> navigate("/")}>voltar para registrar click</button>
            <TableContainerHeader>
                <span>Velocidade do click (em segundos)</span>
                <span>Data do click</span>
            </TableContainerHeader>
            {data.map((item: ClickData) => {
                return (
                    <TableContainer key={item.id}>
                        <TableContainerContent>
                            <TableClickData>{item.click}</TableClickData>
                            <span>{item.click_date}</span>
                        </TableContainerContent>
                    </TableContainer>
                )
            })}
        </Container>
    )
}

export default ClickList;