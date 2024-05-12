# DOCUMENTO DE REQUERIMIENTOS - PREMIER LEAGUE 2023-2024

La Premier League es la máxima categoría del sistema de ligas de fútbol de Inglaterra y uno de los torneos más prestigiosos a nivel mundial. La temporada 2023-2024 contó con la participación de 20 equipos compitiendo entre sí en una serie de partidos de ida y vuelta, buscando obtener el mayor número de puntos para coronarse como campeones.

### 1.	Reglas y Funcionamiento

•	Formato de Competición: La Premier League se disputa mediante un sistema de liga, donde cada equipo se enfrenta dos veces a todos los demás, una vez en su propio estadio y otra en el del equipo contrario.
•	Puntuación: Los equipos obtienen tres puntos por cada victoria, un punto por cada empate y ningún punto por cada derrota. Al final de la temporada, el equipo con más puntos se corona campeón de la liga.
•	Clasificación: La clasificación se determina en base al número de puntos acumulados por cada equipo. En caso de empate en puntos, se utiliza la diferencia de goles y otros criterios de desempate para definir la posición en la tabla.

### 2.	Aspectos Importantes Relacionados

#### Equipos:

Se registran los detalles de cada equipo participante en la temporada, incluyendo el nombre del equipo, su código, lugar de origen, estadio donde juega de local, cantidad de jugadores en la plantilla, cantidad de extranjeros en el equipo, edad promedio de los jugadores y el monto total de salarios del equipo.

#### Deportistas:

Se registran los datos personales de los jugadores, incluyendo nombre, equipo, posición, edad, salario mensual, peso, altura y país de origen.

#### Entrenadores:

Se registra información sobre los entrenadores de cada equipo, incluyendo nombre, equipo, edad, cantidad de partidos oficiales dirigidos, victorias, empates, derrotas y país de origen.

#### Resultados:

Se registran los resultados de cada partido disputado en la temporada, indicando el marcador final.

#### Posiciones:

Se registra la tabla de posiciones actualizada después de cada jornada, incluyendo el equipo, puntos acumulados, partidos jugados, diferencia de goles, partidos ganados, empatados y perdidos.

### 3.	Requerimientos de la Base de Datos

Para satisfacer las necesidades del sistema de gestión de la Premier League, se diseñará una base de datos MongoDB que contenga las siguientes colecciones:

•	Equipos
•	Deportistas
•	Entrenadores
•	Resultados
•	Posiciones

Cada colección contendrá los campos necesarios para almacenar la información relevante según los requerimientos mencionados anteriormente.
