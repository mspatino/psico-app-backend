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
https://www.mongodb.com/es/cloud/atlas/efficiency

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
