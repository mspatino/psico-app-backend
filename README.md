# psico-app-backend
> npm init -y

> npm i nodemon o de manera global > sudo nom i nodemon -g

> npm run dev (desarrollo), produccion: > npm start

# configurar express (servidor DE BACKEND con los endpoints)
> npm i express
> npm i dotenv

# express validator

> npm i express-validator

# BD: Mongo Atlas (Nube)
(https://www.mongodb.com/es/cloud/atlas/efficiency)

# Clint rest: Rest Client y Thunder Client
configuracion:
Proxy
VS Code proxy setting - https://code.visualstudio.com/docs/setup/network#_proxy-server-support

CLI Proxy
You need to set in workspace -> .vscode -> settings.json for cli to use proxy.
{
  "http.proxy": "http://username:password@host:port"

}
exclude Proxy Host List: Use this setting to exclude hosts from proxy, supports comma separated values e.g: *.abc.com,xyz.com.

# mongoose odn - object data manager
- comunicacion desde mongo con node
(https://mongoosejs.com/)

> npm i mongoose

# mongodb - Atlas
(https://www.mongodb.com/es/cloud/atlas/efficiency)

# mongoDb compass - gui - gestor de bd
https://downloads.mongodb.com/compass/mongodb-compass-1.40.4-win32-x64.msi

# encriptar las contraseñas de usuario
metodo de hash de una sola via
> npm i bcryptjs

# login de usuario , voy a trabajar con json web tokens
https://jwt.io/
* en el momento que creo un nuevo usuario deberia generarle un token de acceso  
* lo importante la firma que utilicen para crear el token, tiene que ser la misma para leerlo

> npm i jsonwebtoken

# CORS: capa de seguridad que le puedo agregar a mi API
<< intercambio de recursos de origen cruzado, mecanismo de seguridad que aplican los navegadores cuando estamos haciendo una peticion a un recurso que esta alojado en otro origen. >>
