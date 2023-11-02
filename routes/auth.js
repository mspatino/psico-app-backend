/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 * 
 */

const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// router.post('/new', (req , res) => {
  
//     res.json({
//         ok: true,
//         msg: 'Registro'
//     });
//  });

 router.post('/new',
  [//middlewares
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
  ],
  crearUsuario);

 router.post('/', 
 [
    check('email','El email es obligatorio').isEmail(),
    check('password','El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos   
 ]
 ,loginUsuario);

 //* en todas las rutas de mi aplicacion, que el usuario necesite estar 
 //autenticado; nwcwaito saber si el JWT es valido ( que no halla sido modificado y que no este expirado)
 // va a tomar el jwt,va a hacer un procedimiento y va a regresar un nuevo jwt.
 router.get('/renew',validarJWT , revalidarToken);

 module.exports = router;