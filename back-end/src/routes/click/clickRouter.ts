import express from "express";
import ClickDataController  from "../../controller/clickData/ClickDataController";

export const clickRouter = express.Router()

const clickDataController = new ClickDataController()

clickRouter.get("/clicks/:order/:type", clickDataController.get)
clickRouter.post("/create", clickDataController.create)