# javascript IA
 

# Deploy

- seguir los pasos para instalar react https://es.reactjs.org/

```bash
cd (ruta del repositorio)/javascript-IA
npx create-react-app react_coco_ssd
cd react_coco_ssd
npm start
```

- ir al siguiente link https://github.com/tensorflow/tfjs-models y descargar el repositorio.
- a la derecha de donde dice _Coco SSD_ esta el siguiente comando para instalar la libreria. ejecutarlo
```bash
npm i @tensorflow-models/coco-ssd
```

- click en _Coco SSD_
- click en _demo_
- copiar las imagenes _image1.jpg_ y _image2.jpg_ dentro de la carpeta _public_
- click en _package.json_
- copiar estas dos dependencias en tu _package.json_
```json
 "dependencies": {
    "@tensorflow-models/coco-ssd": "file:../dist",
    "@tensorflow/tfjs-backend-cpu": "^3.3.0",      //este
    "@tensorflow/tfjs-backend-webgl": "^3.3.0",    //este
    "@tensorflow/tfjs-core": "^3.3.0",
    "@tensorflow/tfjs-converter": "^3.3.0",
    "stats.js": "^0.17.0"
  },
```
- ejecutar
```bach
npm install
```
- copiar carpeta _components_ y pegarga dentro de la carperta _src_. Tambien copiar y peguar el archivo _App.js_.
- ejecutar y listo
```bach
npm start
```

