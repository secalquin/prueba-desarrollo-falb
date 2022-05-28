### Ejecución del proyecto

- Ejecutar Proyecto: **docker-compose up -d**
- Petición de ejemplo: localhost:8080/api/v1/communes/santiago

- Evidencia de ejecución y petición de contenedor: https://prnt.sc/nEuJBjzpwqJf
- Evidencia de petición: https://prnt.sc/VecHrAXd3NSo

### SWAGGER URL

- http://localhost:8080/api-docs/

#### VARIABLES DE AMBIENTE

- NODE_ENV: development
- URL_CURRENT: http://localhost
- PORT: 8080
- URL_SERVICE: https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7
- REDIS_URL: redis://redis:6379
- REDIS_TIME: 3600

### Ejecutar localmente

- 1. **npm install**
- 2. **npm run build**
- 3. **npm run start**

- Modo desarrollador: **npm run dev**

### Librerias Utilizadas

#### Producción

- **axios**
- **core-js**
- **dotenv**
- **express**
- **morgan**
- **redis**
- **swagger-ui-express**

#### Producción

- **@babel/cli**
- **@babel/core**
- **@babel/node**
- **@babel/preset-env**
- **jest**
- **nodemon**
- **supertest**
