const expres = require('express');
const router = expres.Router();
const PartidesController = require('../Controllers/Partides.js');

router.post("", PartidesController.InsertNewPartida);
router.get("", PartidesController.GetPartides);
router.get("/:id", PartidesController.GetIDPartida);
router.patch("/:id", PartidesController.UpdatePartida);
router.delete("/:id", PartidesController.DeletePartida);
module.exports = router;