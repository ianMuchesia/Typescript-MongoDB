"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRouter = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const database_service_1 = require("../database/database.service");
// Global Config
exports.gamesRouter = express_1.default.Router();
exports.gamesRouter.use(express_1.default.json());
// GET
exports.gamesRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = (yield database_service_1.collections.games.find({}).toArray());
        res.status(200).send(games);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
// POST
// PUT
// DELETE
