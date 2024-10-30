# 📦 Toolbox Test Webapp

¡Bienvenido al proyecto **Toolbox Test Webapp**! Este README te guiará a través de la instalacióny ejecución de la APP de manera clara y sencilla.

## 🚀 Instalación de Dependencias

Para comenzar, asegúrate de tener **Node.js** instalado en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm i
```

## 🌐 Levantar la Aplicación

### Sin Docker

Si prefieres ejecutar la aplicación sin Docker, utiliza el siguiente comando:

```bash
npm run start
```

La aplicación se ejecutará en el puerto **3000** y podrás acceder a ella en [http://localhost:3000](http://localhost:3000).

### Con Docker

Para garantizar que la aplicación se ejecute en la versión **16 de Node.js**, puedes utilizar Docker. Sigue estos pasos:

1. **Crear la imagen**:
   ```bash
   npm run docker:image
   ```

2. **Crear y ejecutar el contenedor**:
   ```bash
   npm run docker:up
   ```

3. **Detener la ejecución del contenedor**:
   ```bash
   npm run docker:down
   ```

4. **Inicio completo (crear imagen y contenedor)**:
   ```bash
   npm run docker:full-init
   ```

Si levantas la APP con docker, se expondrá en el puerto 80, [http://localhost:80](http://localhost:3000).

**Importante**: Si ya hay una instancia del contenedor corriendo, asegúrate de detenerla antes de iniciar una nueva. Para detener el contenedor, ejecuta:

```bash
npm run docker:stop
```

## 🛠️ Descripción de la Aplicación

La aplicación cuenta con las siguientes características:

- **Barra de búsqueda**: Permite ingresar texto y buscar coincidencias en todos los nombres disponibles.
- **Cambio de tema**: Puedes alternar entre **modo claro** y **modo oscuro** con un simple clic.
- **Listado de archivos**: Visualiza todos los archivos sin errores.

## 📦 Versiones Utilizadas

- **Node**: v16
- **Framework**: React v18.3.1
- **Estilos**: Bootstrap v5.3.3
- **Contexto Global**: React-Redux v9.1.2
- **Alertas**: SweetAlert2 v11.14.4


---

¡Disfruta de tu experiencia con **Toolbox Test Webapp**! 🎉# toolbox-test-webapp
