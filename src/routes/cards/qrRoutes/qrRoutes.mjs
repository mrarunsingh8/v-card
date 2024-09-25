import {Router} from "express";
import prisma from "../../../config/prisma.mjs";

const qrRoutes = Router();

qrRoutes.get("/", (req, res)=>{
    prisma.qr.findFirst({
        where: {
            cardId: parseInt(req.params.id)
        }
    }).then((qr)=>{
        res.json({
            status: "success",
            data: qr
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
})


export default qrRoutes;