// READ

// Creamos o accedemos a la base de datos
use("premier_league")

// Solicitamos todos los documentos incluidos en equipos
db.equipos.find()

// READ ONE

// Creamos o accedemos a la base de datos
use("premier_league")

// Solicitamos todos los documentos incluidos en equipos que tengan como estadio el Etihad Stadium
db.equipos.find({"estadio": "Etihad Stadium"})

// UPDATE

// Creamos o accedemos a la base de datos
use("premier_league")

// Acualizamos todos los documentos incluidos en deportistas cuya edad sea 23
db.deportistas.updateMany({"edad": 23}, { $set: { "edad": 24 } })

// Mostramos los documentos cuya edad sea 24
db.deportistas.find( { "edad":24 })


// DELETE

// Creamos o accedemos a la base de datos
use("premier_league")

// Eliminamos el primer documento incluidos en resultados cuya jornada sea 1
db.resultados.deleteOne({"jornada": 1})

// Mostramos los documentos para confirmar el documento ya no existe, ya que era el primero de los registros
db.resultados.find()
