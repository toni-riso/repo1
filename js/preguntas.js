/* =====================================================
   DIAGNÓSTICO (5)
===================================================== */

const diagnostico = [

{
tipo:"radio",
pregunta:"¿Qué tipo de dato es 15?",
opciones:["int","str","bool","list"],
correcta:"int",
tema:"Tipos de datos",
explicacion:"15 es un número entero.",
recomendacion:"Repasa los tipos int, float, str y bool."
},

{
tipo:"radio",
pregunta:"¿Qué devuelve 7 > 2?",
opciones:["True","False","7","2"],
correcta:"True",
tema:"Booleanos",
explicacion:"7 es mayor que 2 por lo que la comparación es verdadera.",
recomendacion:"Practica operadores relacionales."
},

{
tipo:"texto",
pregunta:"Completa: for i ____ range(5):",
correcta:"in",
tema:"Bucles",
explicacion:"Los bucles for utilizan la palabra reservada in.",
recomendacion:"Repasa la sintaxis de los bucles."
},

{
tipo:"radio",
pregunta:"¿Qué error tiene? if edad = 18:",
opciones:[
"Debe usar ==",
"Falta print",
"No tiene error",
"Debe usar int"
],
correcta:"Debe usar ==",
tema:"Condicionales",
explicacion:"El símbolo = asigna valores y == compara.",
recomendacion:"Diferencia asignación y comparación."
},

{
tipo:"codigo",
pregunta:"Escribe una instrucción que muestre Hola",
correcta:"print",
tema:"Salida",
explicacion:"print() muestra información por pantalla.",
recomendacion:"Repasa la función print()."
}

];

/* =====================================================
   BÁSICO - BLOQUE 2
===================================================== */

const basico = [

{
tipo:"radio",
pregunta:"¿Qué función se utiliza para mostrar texto?",
opciones:["write()","print()","echo()","show()"],
correcta:"print()",
tema:"Salida",
explicacion:"print() muestra mensajes por pantalla.",
recomendacion:"Practica salida de datos."
},

{
tipo:"radio",
pregunta:"¿Qué tipo es 'Python'?",
opciones:["int","str","float","bool"],
correcta:"str",
tema:"Strings",
explicacion:"Todo texto entre comillas es un string.",
recomendacion:"Repasa cadenas de texto."
},

{
tipo:"texto",
pregunta:"Completa: nombre = _____('Escribe tu nombre')",
correcta:"input",
tema:"Entrada",
explicacion:"input() recibe datos del usuario.",
recomendacion:"Practica entrada de datos."
},

{
tipo:"radio",
pregunta:"¿Cuál es una lista?",
opciones:["(1,2,3)","[1,2,3]","'1,2,3'","True"],
correcta:"[1,2,3]",
tema:"Listas",
explicacion:"Las listas utilizan corchetes.",
recomendacion:"Repasa estructuras de datos."
},

{
tipo:"codigo",
pregunta:"Crea una variable llamada edad",
correcta:"edad",
tema:"Variables",
explicacion:"Una variable almacena información.",
recomendacion:"Practica la creación de variables."
}

];

/* =====================================================
   BÁSICO - BLOQUE 3
===================================================== */

const finalBasico = [

{
tipo:"radio",
pregunta:"¿Qué tipo es True?",
opciones:["int","bool","str","float"],
correcta:"bool",
tema:"Booleanos",
explicacion:"True y False pertenecen al tipo bool.",
recomendacion:"Repasa booleanos."
},

{
tipo:"texto",
pregunta:"Completa: print('Hola' ___ 'Mundo')",
correcta:"+",
tema:"Strings",
explicacion:"El operador + concatena cadenas.",
recomendacion:"Practica manipulación de textos."
},

{
tipo:"radio",
pregunta:"¿Qué símbolo inicia un comentario?",
opciones:["//","#","--","*"],
correcta:"#",
tema:"Comentarios",
explicacion:"Python utiliza # para comentarios.",
recomendacion:"Utiliza comentarios para documentar."
},

{
tipo:"codigo",
pregunta:"Crea una variable llamada nombre",
correcta:"nombre",
tema:"Variables",
explicacion:"Las variables almacenan datos.",
recomendacion:"Practica nombres descriptivos."
},

{
tipo:"radio",
pregunta:"¿Cuál es una tupla?",
opciones:["[1,2,3]","(1,2,3)","{1,2,3}","True"],
correcta:"(1,2,3)",
tema:"Tuplas",
explicacion:"Las tuplas utilizan paréntesis.",
recomendacion:"Compara listas y tuplas."
}

];

/* =====================================================
   INTERMEDIO - BLOQUE 2
===================================================== */

const intermedio = [

{
tipo:"radio",
pregunta:"¿Qué estructura repite código?",
opciones:["if","print","for","input"],
correcta:"for",
tema:"Bucles",
explicacion:"for permite ejecutar instrucciones repetidamente.",
recomendacion:"Practica bucles."
},

{
tipo:"texto",
pregunta:"Completa: if edad ____ 18:",
correcta:">=",
tema:"Condicionales",
explicacion:"Mayor o igual se expresa con >=.",
recomendacion:"Repasa operadores relacionales."
},

{
tipo:"radio",
pregunta:"¿Cuál es el primer índice de una lista?",
opciones:["0","1","-1","2"],
correcta:"0",
tema:"Listas",
explicacion:"Python comienza a numerar desde 0.",
recomendacion:"Practica acceso por índices."
},

{
tipo:"codigo",
pregunta:"Crea una lista llamada numeros",
correcta:"numeros",
tema:"Listas",
explicacion:"Una lista almacena múltiples valores.",
recomendacion:"Practica listas."
},

{
tipo:"radio",
pregunta:"¿Qué devuelve len([1,2,3])?",
opciones:["2","3","4","1"],
correcta:"3",
tema:"Funciones",
explicacion:"La lista tiene tres elementos.",
recomendacion:"Practica la función len()."
}

];

/* =====================================================
   INTERMEDIO - BLOQUE 3
===================================================== */

const finalIntermedio = [

{
tipo:"radio",
pregunta:"¿Para qué sirve append()?",
opciones:[
"Eliminar elementos",
"Añadir elementos",
"Ordenar listas",
"Mostrar listas"
],
correcta:"Añadir elementos",
tema:"Listas",
explicacion:"append() añade un elemento al final.",
recomendacion:"Practica métodos de listas."
},

{
tipo:"texto",
pregunta:"Completa: while contador ____ 10:",
correcta:"<",
tema:"Bucles",
explicacion:"La condición se cumple mientras sea menor que 10.",
recomendacion:"Refuerza bucles while."
},

{
tipo:"radio",
pregunta:"¿Qué devuelve [1,2,3][2]?",
opciones:["1","2","3","Error"],
correcta:"3",
tema:"Índices",
explicacion:"El índice 2 corresponde al tercer elemento.",
recomendacion:"Practica acceso a listas."
},

{
tipo:"codigo",
pregunta:"Escribe un bucle for sencillo",
correcta:"for",
tema:"Bucles",
explicacion:"Los bucles for permiten iterar.",
recomendacion:"Practica repeticiones."
},

{
tipo:"radio",
pregunta:"¿Qué operador significa diferente de?",
opciones:["<>","!=","==","//"],
correcta:"!=",
tema:"Comparaciones",
explicacion:"!= significa distinto.",
recomendacion:"Repasa operadores de comparación."
}

];

/* =====================================================
   AVANZADO - BLOQUE 2
===================================================== */

const avanzado = [

{
tipo:"radio",
pregunta:"¿Qué es una list comprehension?",
opciones:[
"Un diccionario",
"Una forma compacta de crear listas",
"Un módulo",
"Una variable"
],
correcta:"Una forma compacta de crear listas",
tema:"List Comprehension",
explicacion:"Permite crear listas de forma eficiente.",
recomendacion:"Practica comprensiones."
},

{
tipo:"texto",
pregunta:"Completa: def suma(a,b)____",
correcta:":",
tema:"Funciones",
explicacion:"Las funciones terminan la cabecera con :",
recomendacion:"Repasa sintaxis de funciones."
},

{
tipo:"radio",
pregunta:"¿Qué estructura almacena pares clave-valor?",
opciones:["Lista","String","Tupla","Diccionario"],
correcta:"Diccionario",
tema:"Diccionarios",
explicacion:"Los diccionarios usan claves y valores.",
recomendacion:"Practica diccionarios."
},

{
tipo:"codigo",
pregunta:"Define una función llamada saludar",
correcta:"def saludar",
tema:"Funciones",
explicacion:"Las funciones se crean con def.",
recomendacion:"Practica funciones personalizadas."
},

{
tipo:"radio",
pregunta:"¿Qué palabra devuelve un resultado desde una función?",
opciones:["print","return","input","for"],
correcta:"return",
tema:"Funciones",
explicacion:"return devuelve información.",
recomendacion:"Repasa el flujo de funciones."
}

];

/* =====================================================
   AVANZADO - BLOQUE 3
===================================================== */

const finalAvanzado = [

{
tipo:"radio",
pregunta:"¿Qué método devuelve las claves de un diccionario?",
opciones:[
"values()",
"items()",
"keys()",
"get()"
],
correcta:"keys()",
tema:"Diccionarios",
explicacion:"keys() devuelve todas las claves.",
recomendacion:"Practica métodos de diccionarios."
},

{
tipo:"texto",
pregunta:"Completa: [x for x in lista if x ____ 0]",
correcta:">",
tema:"List Comprehension",
explicacion:"La condición selecciona valores mayores que cero.",
recomendacion:"Practica filtros en comprensiones."
},

{
tipo:"radio",
pregunta:"¿Para qué sirve enumerate()?",
opciones:[
"Ordenar listas",
"Obtener índice y valor",
"Eliminar elementos",
"Convertir tipos"
],
correcta:"Obtener índice y valor",
tema:"Iteración",
explicacion:"enumerate() devuelve posición y contenido.",
recomendacion:"Utilízalo en bucles."
},

{
tipo:"codigo",
pregunta:"Define una función llamada potencia",
correcta:"def potencia",
tema:"Funciones",
explicacion:"Las funciones personalizadas se crean con def.",
recomendacion:"Practica parámetros y retorno."
},

{
tipo:"radio",
pregunta:"¿Qué devuelve type([])?",
opciones:[
"tuple",
"dict",
"list",
"str"
],
correcta:"list",
tema:"Tipos avanzados",
explicacion:"[] crea una lista.",
recomendacion:"Repasa estructuras de datos."
}

];
