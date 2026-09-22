import { Router } from "express";
import { celularService } from "../service/celular.service.js";

export const celularRouter = Router()

celularRouter.get("/", async (req, res) => {
    const xaiomi = await celularService.listarTodos()
    return res.json(xaiomi)
})

celularRouter.post("/", async (req, res) => {
    const samsung = await celularService.creats()
    return res.json(samsung)
})

