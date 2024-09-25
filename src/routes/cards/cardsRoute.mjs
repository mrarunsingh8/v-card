import {Router} from "express";
import prisma from "../../config/prisma.mjs";
import qrRoutes from "./qrRoutes/qrRoutes.mjs";

const cardsRoute = Router();

cardsRoute.get("/", (req, res)=>{
    prisma.cards.findMany().then((cards)=>{
        res.json({
            status: "success",
            data: cards
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
});

cardsRoute.post("/", (req, res)=>{
    prisma.cards.create({data: req.body}).then((card)=>{
        res.json({
            status: "success",
            data: card
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
});

cardsRoute.patch("/:id", (req, res)=>{
    prisma.cards.update({where: {id: parseInt(req.params.id)}, data: req.body}).then((card)=>{
        res.json({
            status: "success",
            data: card
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
});

cardsRoute.put("/:id", (req, res)=>{
    prisma.cards.update({where: {id: parseInt(req.params.id)}, data: req.body}).then((card)=>{
        res.json({
            status: "success",
            data: card
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
});

cardsRoute.delete("/:id", (req, res)=>{
    prisma.cards.delete({where: {id: parseInt(req.params.id)}}).then((card)=>{
        res.json({
            status: "success",
            data: card
        });
    }).catch((error)=>{res.json({status: "error", message: error.message});});
});

cardsRoute.use("/:id/qr", qrRoutes);

export default cardsRoute;