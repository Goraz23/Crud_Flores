const express = require("express");
const flowersControllers = require('../controllers/flowersControllers')
// import { obtenerFlores, obtenerFloresPorId, crearFlores, eliminarFloresPorId, actualizarFloresPorId } from "../controllers/flowersControllers";
const router = express.Router();

// ! Rutas para las flores
router.get('/', flowersControllers.obtenerFlores);
router.get('/:id_flor', flowersControllers.obtenerFloresPorId);
router.get('/:nombre', flowersControllers.buscarFloresPorNombre);
router.post('/', flowersControllers.crearFlores);
router.delete('/:id_flor', flowersControllers.eliminarFloresPorId);
router.put('/:id_flor', flowersControllers.actualizarFloresPorId);


module.exports = router;