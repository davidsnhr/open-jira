# Next.js openJira APP
Para correr localmente, se neceisita la base de datos

```
docker-compose up -d
```

* El -d, significa __detached__

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a  __.env__

## Llenar la base de datos con informacion de pruebas
Llamara: 
```
   http://localhost:3000/seed
```