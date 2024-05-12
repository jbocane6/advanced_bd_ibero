// Creamos o accedemos a la base de datos
use("premier_league")

// Creamos la colección correspondiente a equipos
db.createCollection("equipos")

// Insertamos los documentos dentro de la colección creada
db.equipos.insertMany([
    {
        "nombre": "Arsenal",
        "codigo": "ARS",
        "lugar": "Holloway, Londres, Inglaterra",
        "estadio": "Emirates Stadium",
        "plantilla": 64,
        "extranjeros": 34,
        "edad_promedio": 23.6,
        "salarios": "14.88 M"
    },
    {
        "nombre": "Manchester City",
        "codigo": "MNC",
        "lugar": "Mánchester, Inglaterra",
        "estadio": "Etihad Stadium",
        "plantilla": 57,
        "extranjeros": 29,
        "edad_promedio": 24.2,
        "salarios": "21.36M"
    },
    {
        "nombre": "Liverpool",
        "codigo": "LIV",
        "lugar": "Liverpool, Inglaterra",
        "estadio": "Anfield",
        "plantilla": 64,
        "extranjeros": 35,
        "edad_promedio": 24,
        "salarios": "15.48M"
    },
    {
        "nombre": "Tottenham Hotspur",
        "codigo": "TOT",
        "lugar": "Tottenham, Londres, Inglaterra",
        "estadio": "Tottenham Hotspur Stadium",
        "plantilla": 65,
        "extranjeros": 34,
        "edad_promedio": 24.3,
        "salarios": "14.12M"
    },
    {
        "nombre": "Newcastle United",
        "codigo": "NEW",
        "lugar": "Newcastle Upon Tyne, Inglaterra",
        "estadio": "St. James' Park",
        "plantilla": 54,
        "extranjeros": 18,
        "edad_promedio": 25.7,
        "salarios": "8.97M"
    },
    {
        "nombre": "Chelsea",
        "codigo": "CHE",
        "lugar": "Fulham, Londres, Inglaterra",
        "estadio": "Stamford Bridge",
        "plantilla": 88,
        "extranjeros": 43,
        "edad_promedio": 23.1,
        "salarios": "23.79M"
    },
    {
        "nombre": "Manchester United",
        "codigo": "MNU",
        "lugar": "Mánchester, Inglaterra",
        "estadio": "Old Trafford",
        "plantilla": 73,
        "extranjeros": 37,
        "edad_promedio": 23.9,
        "salarios": "21.38M"
    }
])

// Creamos la colección correspondiente a deportistas
db.createCollection("deportistas")

// Insertamos los documentos dentro de la colección creada
db.deportistas.insertMany([
    {
        "nombre": "Leandro Trossard",
        "equipo": "Arsenal",
        "posicion": "Delantero",
        "edad": 29,
        "salario_mensual": "455K",
        "peso": 61,
        "altura": 172,
        "pais": "Bélgica"
    },
    {
        "nombre": "Kevin De Bruyne",
        "equipo": "Manchester City",
        "posicion": "Centrocampista",
        "edad": 32,
        "salario_mensual": "2.03M",
        "peso": 68,
        "altura": 181,
        "pais": "Bélgica"
    },
    {
        "nombre": "Alisson Becker",
        "equipo": "Liverpool",
        "posicion": "Portero",
        "edad": 31,
        "salario_mensual": "760k",
        "peso": 91,
        "altura": 193,
        "pais": "Brasil"
    },
    {
        "nombre": "Guglielmo Vicario",
        "equipo": "Tottenham Hotspur",
        "posicion": "Portero",
        "edad": 27,
        "salario_mensual": "380k",
        "peso": 83,
        "altura": 194,
        "pais": "Italia"
    },
    {
        "nombre": "Anthony Gordon",
        "equipo": "Newcastle United",
        "posicion": "Delantero",
        "edad": 23,
        "salario_mensual": "304k",
        "peso": 72,
        "altura": 183,
        "pais": "Inglaterra"
    },
    {
        "nombre": "Marc Cucurella",
        "equipo": "Chelsea",
        "posicion": "Defensa",
        "edad": 25,
        "salario_mensual": "886k",
        "peso": 66,
        "altura": 172,
        "pais": "España"
    },
    {
        "nombre": "André Onana",
        "equipo": "Manchester United",
        "posicion": "Portero",
        "edad": 28,
        "salario_mensual": "608k",
        "peso": 93,
        "altura": 190,
        "pais": "Camerún"
    }
])

// Creamos la colección correspondiente a entrenadores
db.createCollection("entrenadores")

// Insertamos los documentos dentro de la colección creada
db.entrenadores.insertMany([
    {
        "nombre": "Mikel Arteta",
        "equipo": "Arsenal",
        "edad": 42,
        "partidos_oficiales": 228,
        "victorias": 138,
        "empates": 34,
        "derrotas": 56,
        "pais": "España"
    },
    {
        "nombre": "Pep Guardiola",
        "equipo": "Manchester City",
        "edad": 53,
        "partidos_oficiales": 464,
        "victorias": 344,
        "empates": 57,
        "derrotas": 63,
        "pais": "España"
    },
    {
        "nombre": "Jürgen Klopp",
        "equipo": "Liverpool",
        "edad": 56,
        "partidos_oficiales": 486,
        "victorias": 304,
        "empates": 97,
        "derrotas": 85,
        "pais": "Alemania"
    },
    {
        "nombre": "Angelos Postecoglou",
        "equipo": "Tottenham Hotspur",
        "edad": 58,
        "partidos_oficiales": 39,
        "victorias": 20,
        "empates": 6,
        "derrotas": 13,
        "pais": "Nueva Zelanda"
    },
    {
        "nombre": "Eddie Howe",
        "equipo": "Newcastle United",
        "edad": 46,
        "partidos_oficiales": 122,
        "victorias": 61,
        "empates": 26,
        "derrotas": 35,
        "pais": "Inglaterra"
    },
    {
        "nombre": "Mauricio Pochettino",
        "equipo": "Chelsea",
        "edad": 52,
        "partidos_oficiales": 48,
        "victorias": 25,
        "empates": 10,
        "derrotas": 13,
        "pais": "Argentina"
    },
    {
        "nombre": "Erik Ten Hag",
        "equipo": "Manchester United",
        "edad": 54,
        "partidos_oficiales": 109,
        "victorias": 64,
        "empates": 15,
        "derrotas": 30,
        "pais": "Paises Bajos"
    }
])

// Creamos la colección correspondiente a resultados
db.createCollection("resultados")

// Insertamos los documentos dentro de la colección creada
db.resultados.insertMany([
    {
        "fecha": "13/08/2023",
        "jornada": 1,
        "local": "Chelsea",
        "visitante": "Liverpool",
        "estadio": "Stamford Bridge",
        "resultado": "1 - 1"
    },
    {
        "fecha": "19/08/2023",
        "jornada": 2,
        "local": "Tottenham Hotspur",
        "visitante": "Manchester United",
        "estadio": "Tottenham Hotspur Stadium",
        "resultado": "2 - 0"
    },
    {
        "fecha": "27/08/2023",
        "jornada": 3,
        "local": "Newcastle United",
        "visitante": "Liverpool",
        "estadio": "St. James' Park",
        "resultado": "1 - 2"
    },
    {
        "fecha": "3/09/2023",
        "jornada": 4,
        "local": "Arsenal",
        "visitante": "Manchester United",
        "estadio": "Emirates Stadium",
        "resultado": "3 - 1"
    },
    {
        "fecha": "24/09/2023",
        "jornada": 6,
        "local": "Arsenal",
        "visitante": "Tottenham Hotspur",
        "estadio": "Emirates Stadium",
        "resultado": "2 - 2"
    },
    {
        "fecha": "30/09/2023",
        "jornada": 7,
        "local": "Tottenham Hotspur",
        "visitante": "Liverpool",
        "estadio": "Tottenham Hotspur Stadium",
        "resultado": "2 - 1"
    },
    {
        "fecha": "8/10/2023",
        "jornada": 8,
        "local": "Arsenal",
        "visitante": "Manchester City",
        "estadio": "Emirates Stadium",
        "resultado": "1 - 0"
    },
    {
        "fecha": "21/10/2023",
        "jornada": 9,
        "local": "Chelsea",
        "visitante": "Arsenal",
        "estadio": "Stamford Bridge",
        "resultado": "2 - 2"
    },
    {
        "fecha": "29/10/2023",
        "jornada": 10,
        "local": "Manchester United",
        "visitante": "Manchester City",
        "estadio": "Old Trafford",
        "resultado": "0 - 3"
    },
    {
        "fecha": "4/11/2023",
        "jornada": 11,
        "local": "Newcastle United",
        "visitante": "Arsenal",
        "estadio": "St. James' Park",
        "resultado": "1 - 0"
    },
    {
        "fecha": "6/11/2023",
        "jornada": 11,
        "local": "Tottenham Hotspur",
        "visitante": "Chelsea",
        "estadio": "Tottenham Hotspur Stadium",
        "resultado": "1 - 4"
    },
    {
        "fecha": "12/11/2023",
        "jornada": 12,
        "local": "Chelsea",
        "visitante": "Manchester City",
        "estadio": "Stamford Bridge",
        "resultado": "4 - 4"
    },
    {
        "fecha": "25/11/2023",
        "jornada": 13,
        "local": "Manchester City",
        "visitante": "Liverpool",
        "estadio": "Etihad Stadium",
        "resultado": "1 - 1"
    },
    {
        "fecha": "2/12/2023",
        "jornada": 14,
        "local": "Newcastle United",
        "visitante": "Manchester United",
        "estadio": "St. James' Park",
        "resultado": "1 - 0"
    },
    {
        "fecha": "3/12/2023",
        "jornada": 14,
        "local": "Manchester City",
        "visitante": "Tottenham Hotspur",
        "estadio": "Etihad Stadium",
        "resultado": "3 - 3"
    }
])

// Creamos la colección correspondiente a posiciones
db.createCollection("posiciones")

// Insertamos los documentos dentro de la colección creada
db.posiciones.insertMany([
    {
        "equipo": "Arsenal",
        "puntos": 83,
        "jugados": 36,
        "diferencia": 60,
        "ganados": 26,
        "empatados": 5,
        "perdidos": 5
    },
    {
        "equipo": "Manchester City",
        "puntos": 85,
        "jugados": 36,
        "diferencia": 58,
        "ganados": 26,
        "empatados": 7,
        "perdidos": 3
    },
    {
        "equipo": "Liverpool",
        "puntos": 78,
        "jugados": 36,
        "diferencia": 43,
        "ganados": 23,
        "empatados": 9,
        "perdidos": 4
    },
    {
        "equipo": "Tottenham Hotspur",
        "puntos": 63,
        "jugados": 36,
        "diferencia": 12,
        "ganados": 19,
        "empatados": 6,
        "perdidos": 11
    },
    {
        "equipo": "Newcastle United",
        "puntos": 57,
        "jugados": 36,
        "diferencia": 22,
        "ganados": 17,
        "empatados": 6,
        "perdidos": 13
    },
    {
        "equipo": "Chelsea",
        "puntos": 57,
        "jugados": 36,
        "diferencia": 12,
        "ganados": 16,
        "empatados": 9,
        "perdidos": 11
    },
    {
        "equipo": "Manchester United",
        "puntos": 54,
        "jugados": 35,
        "diferencia": -3,
        "ganados": 16,
        "empatados": 6,
        "perdidos": 13
    }
])

// Solicitamos todos los documentos incluidos en equipos
db.equipos.find()