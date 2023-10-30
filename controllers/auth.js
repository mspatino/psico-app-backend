const {response} = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req , res = response) => {
  
  console.log(req);
  const { name, email, password} = req.body;
  
//   if ( name.length < 5 ){
//     return res.status(400).json({
//         ok: false,
//         msg: 'El nombre debe contener 5 caracteres'
//     })
//   }


//* Manejo de errores
const errors = validationResult( req);
//console.log(errors);

if (!errors.isEmpty()){
    return res.status(400).json({
        ok:false,
        errors: errors.mapped()
    });
}

  res.status(201).json({
         ok: true,
         msg: 'Registro',
         name,
         email,
         password
     });
 }

 const loginUsuario = (req , res = response) => {
    
    const { email, password} = req.body;

    //* Manejo de errores
    const errors = validationResult( req);


        if (!errors.isEmpty()){
            return res.status(400).json({
                ok:false,
                errors: errors.mapped()
            });
        }

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
 }


 const revalidarToken =  (req , res = response) => {
  
    res.json({
        ok: true,
        msg: 'renew'
    });
 }


 module.exports = {
    crearUsuario, 
    loginUsuario,
    revalidarToken,
 }