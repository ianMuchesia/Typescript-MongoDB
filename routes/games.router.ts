// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../database/database.service";
import Game from "../models/games";

// Global Config
export const gamesRouter = express.Router();

gamesRouter.use(express.json());
// GET
gamesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.games.find({}).toArray()) as Game[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
// POST

// PUT

// DELETE