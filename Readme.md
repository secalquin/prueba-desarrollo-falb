### Instalación

- Instalar dependencias: **npm install**
- 

### Crear imagen de docker

- Ingresar a la ruta raiz del proyecto.
- Construir imagen de docker: **docker build -t node-babel .**
- Ejecutar imagen de docker: **docker run -d --restart=always -p 8080:8080 node-babel**
