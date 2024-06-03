// Creamos un objeto de prueba de particionamiento con 3 nodos de tamaño 1mb
cluster = new ShardingTest({ shards: 3, chunksize: 1 });
// Creamos el balanceador con la bd premier_league
db = new Mongo("localhost:20006").getDB("premier_league");
// Insertamos unos documentos de prueba en el catalogo equipos
db.equipos.insertMany([
  {
    nombre: "Arsenal",
    codigo: "ARS",
    lugar: "Holloway, Londres, Inglaterra",
    estadio: "Emirates Stadium",
    plantilla: 64,
    extranjeros: 34,
    edad_promedio: 23.6,
    salarios: "14.88 M",
  },
  {
    nombre: "Manchester City",
    codigo: "MNC",
    lugar: "Mánchester, Inglaterra",
    estadio: "Etihad Stadium",
    plantilla: 57,
    extranjeros: 29,
    edad_promedio: 24.2,
    salarios: "21.36M",
  },
  {
    nombre: "Liverpool",
    codigo: "LIV",
    lugar: "Liverpool, Inglaterra",
    estadio: "Anfield",
    plantilla: 64,
    extranjeros: 35,
    edad_promedio: 24,
    salarios: "15.48M",
  },
  {
    nombre: "Tottenham Hotspur",
    codigo: "TOT",
    lugar: "Tottenham, Londres, Inglaterra",
    estadio: "Tottenham Hotspur Stadium",
    plantilla: 65,
    extranjeros: 34,
    edad_promedio: 24.3,
    salarios: "14.12M",
  },
  {
    nombre: "Newcastle United",
    codigo: "NEW",
    lugar: "Newcastle Upon Tyne, Inglaterra",
    estadio: "St. James' Park",
    plantilla: 54,
    extranjeros: 18,
    edad_promedio: 25.7,
    salarios: "8.97M",
  },
  {
    nombre: "Chelsea",
    codigo: "CHE",
    lugar: "Fulham, Londres, Inglaterra",
    estadio: "Stamford Bridge",
    plantilla: 88,
    extranjeros: 43,
    edad_promedio: 23.1,
    salarios: "23.79M",
  },
  {
    nombre: "Manchester United",
    codigo: "MNU",
    lugar: "Mánchester, Inglaterra",
    estadio: "Old Trafford",
    plantilla: 73,
    extranjeros: 37,
    edad_promedio: 23.9,
    salarios: "21.38M",
  },
]);
// Insertamos 2.200.000 documentos adicionales
for (i = 0; i < 2200000; i++) {
  db.equipos.insert({
    nombre: "Equipo" + i,
    codigo: "Codigo" + i,
    lugar: "Ciudad" + i,
    estadio: "Estadio" + i,
    plantilla: 64,
    extranjeros: 40,
    edad_promedio: 22,
    salarios: "23.79M",
  });
}
// Confirmamos la cantidad de documentos creados
db.equipos.count();
// Nos conectamos al nodo 1, bd premier_league y validamos la cantidad de documentos creados
shard1 = new Mongo("localhost:20000");
shard1DB = shard1.getDB("premier_league");
shard1DB.equipos.count();
// Nos conectamos al nodo 2, bd premier_league y validamos la cantidad de documentos creados
shard2 = new Mongo("localhost:20001");
shard2DB = shard2.getDB("premier_league");
shard2DB.equipos.count();
// Nos conectamos al nodo 3, bd premier_league y validamos la cantidad de documentos creados
shard3 = new Mongo("localhost:20002");
shard3DB = shard3.getDB("premier_league");
shard3DB.equipos.count();
// Volvemos al balanceador creado previamente
shard1 = new Mongo("localhost:20006");
// Validamos el estado del grupo de particionamiento
sh.status();
// Activamos el Particionamiento
sh.enableSharding("premier_league");
// Activar el indexamiento por nombre
db.equipos.ensureIndex({ nombre: 1 });
// Activamos el proceso de compartir en la colección equipos
sh.shardCollection("premier_league.equipos", { nombre: 1 });
// Validamos nuevamente el estado del grupo de particionamiento
sh.status();
// Validamos el estado del balanceador
sh.getBalancerState();
// Activamos el estado del balanceador
sh.setBalancerState(true);
// Validamos nuevamente el estado del balanceador
sh.getBalancerState();
// Empecemos a correr el balanceador
sh.isBalancerRunning();
// Validamos el particionamiento en el nodo 1
shard1 = new Mongo("localhost:20000");
shard1DB = shard1.getDB("premier_league");
shard1DB.equipos.count();
// Validamos el particionamiento en el nodo 2
shard2 = new Mongo("localhost:20001");
shard2DB = shard2.getDB("premier_league");
shard2DB.equipos.count();
// Validamos el particionamiento en el nodo 3
shard3 = new Mongo("localhost:20002");
shard3DB = shard3.getDB("premier_league");
shard3DB.equipos.count();
// Detenemos el balanceador
cluster.stop();
// Listamos los nodos activos
db.adminCommand({ listShards: 1 });
