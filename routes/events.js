const { Router } = require('express');
const { check } = require('express-validator');

const { getEventos, crearEvento , actualizarEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
/**
 * Event routes
 * /api/events
 * 
 */

const router = Router();

//Todas tienen que pasar por la validacion del JWT

router.use(validarJWT);
//Obtener eventos
router.get('/', getEventos)

//crear un nuevo evento
router.post(
    '/', 
    [

     check('title','El titulo es obligatorio').not().isEmpty(),   
     check('start','Fecha de inicio es obligatoria').custom( isDate ),
     check('end','Fecha de fin es obligatoria').custom( isDate ),
     validarCampos
    ]
     ,crearEvento )

//actualizar evento
router.put('/:id', 
[
    check('title','El titulo es obligatorio').not().isEmpty(),   
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de fin es obligatoria').custom( isDate ),
    validarCampos
]
,actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;