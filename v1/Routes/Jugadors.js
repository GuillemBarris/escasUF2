require("dotenv").config();

const expres = require('express');
const router = expres.Router();
const JugadorsController = require('../Controllers/Jugadors.js');
const PartidesController = require('../Controllers/Partides.js');

router.post("", JugadorsController.InsertNewJugador);
router.get("", JugadorsController.GetJugadors);
router.get("/:id", JugadorsController.GetIDJugador);
router.patch("/:id", JugadorsController.UpdateJugador);
router.delete("/:id", JugadorsController.DeleteJugador);
router.get("/:id/partides", PartidesController.GetPartidesJugador);
router.get("/:id/partides:winner", PartidesController.GetPartidesJugadorPosicio);
router.get("/:id/partides/:date", PartidesController.GetPartidesJugadorDate);
router.get("/:id/partides/:winner/:date", PartidesController.GetPartidesJugadorPosicioDate);
module.exports = router;

