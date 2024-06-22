import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { playlistController } from "./controllers/playlist-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { accountsController } from './controllers/accounts-controller.js';

export const router = express.Router();

/*
router.get("/", dashboardController.index); */
router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addplaylist", dashboardController.addPlaylist);
router.get("/playlist/:id", playlistController.index);
router.post("/playlist/:id/addtrack", playlistController.addTrack);
router.get("/about", aboutController.index);
router.get("/dashboard/deleteplaylist/:id", dashboardController.deletePlaylist);
router.get("/playlist/:playlistid/deletetrack/:trackid", playlistController.deleteTrack);
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);