# javascript IA
 

# Deploy

- seguir los pasos para instalar react https://es.reactjs.org/

```bash
cd (ruta del repositorio)/javascript-IA
npx create-react-app react_coco_ssd
cd react_coco_ssd
npm start
```

- ir al siguiente link https://github.com/tensorflow/tfjs-models
- a la derecha de donde dice _Coco SSD_ esta el siguiente comando para instalar la libreria. ejecutarlo
```bash
npm i @tensorflow-models/coco-ssd
```

- click en _Coco SSD_
- click en _demo_
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