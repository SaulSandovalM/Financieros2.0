# Financieros

Sistema de administración financiera.

## Comenzando

Estas instrucciones te permitirán obtener una copia dle proyecto en funcionamiento en tu maquina local para propósitos de desarrollo y pruebas.

### Hecho con

* [React](https://github.com/facebook/create-react-app) - Framework para Frontend.
* [MySQL](https://www.mysql.com/) - Sistema de gestión de base de datos.
* [Node.js](https://nodejs.org/es/) - Entorno para la capa de servidor basado en JavaScript.

_Mira **Deployment** para conocer como desplegar el proyecto._

### Requisitos

Comprobamos si tenemos instalado **Node.js**, para comprobar si lo tenemos instalado ejecutaremos el siguiente comando en la terminal.

```
node -v
```

De igual manera veremos si tenemos instalado **React**.

```
npm view react version
```

Tambien necesitaremos tener **MySQL**.

```
mysql -V
```

**Nota:** _La instalación puede varias dependiendo del sistema operativo_

### Instalación

En caso de no tenerlo instalado **Node.js** procederemos a instalarlo, para eso entraremos a su [página oficial](https://nodejs.org/es/) y descargaremos el instalador más actualizado (_La instalación puede variar dependiendo tus sistema operativo_).

De igual manera si no contamos con react lo instalaremos con el siguiente comando.

```
npm install -g create-react-app
```

1. Clonar el repo.

```
git clone https://github.com/SaulSandovalM/React_MySQL_Node
```

2. Instalar dependencias dentro del proyecto.

Para esto entraremos a las carpetas frontend y backend y ejecutaremos el siguiente comando desde la terminal.

```
npm install
```

3. Levantando el Front-End.

Entraremos a la carpeta de frontend y ejecutamos:

```
npm start
```

4. Levantando el Back-End.

Tambien necesitaremos levantar el backend, para esto ejecutamos dentro de la carpeta de backend lo siguiente:

```
node server.js
```

**Nota:** _El backend crea la base de datos en MySQL pero antes deberas configurar el archivo db.config.js que se encuentra dentro de la carpta del backend/config. Ahi cambiaras los valores por los tuyos._

### Deploy

Para compilar el Front-end escribiremos esto:

```
npm run build
```

Esto creara una carpeta llamada **build** con todo nuestro codigo listo para producción.

_Recuerda que esto debes hacerlo dentro de la carpeta frontend_

### Autores

* **Saúl Sandoval** - *Trabajo inicial* - [SaulSandavalM](https://github.com/SaulSandovalM)

## Licencia

Este proyecto está bajo la Licencia (MIT License) - Mira el archivo [LICENSE.md](https://github.com/HackSiteOficial/HackSite/blob/master/LICENSE) para mas detalles.
