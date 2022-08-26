import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { clickRouter } from "./routes/click/clickRouter";
import cors from 'cors'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

app.use("/click", clickRouter)
const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });