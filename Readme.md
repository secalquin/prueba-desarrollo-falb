### Instalación

- Instalar dependencias: **npm install**
- Ejecutar Proyecto: **docker-compose up -d**

#### VARIABLES DE AMBIENTE

- NODE_ENV: development
- URL_CURRENT: http://localhost
- PORT: 8080
- URL_SERVICE: https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7
- REDIS_URL: redis://redis:6379
- REDIS_TIME: 3600

### Crear imagen de docker

- Ingresar a la ruta raiz del proyecto.
- Construir imagen de docker: **docker build -t node-babel .**
- Ejecutar imagen de docker: **docker run -d --restart=always -p 8080:8080 node-babel**
