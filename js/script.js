/* =====================================================
   VARIABLES GLOBALES
===================================================== */

let fase = 1;
let indice = 0;

let nivel = "";

let historial = [];

let aciertosDiagnostico = 0;
let aciertosBloque2 = 0;
let aciertosBloque3 = 0;

let preguntasActuales = diagnostico;

const quiz = document.getElementById("quiz");
const botonSiguiente = document.getElementById("siguiente");

/* =====================================================
   INICIO
===================================================== */

document
.getElementById("comenzar")
.addEventListener("click", iniciarEvaluacion);

botonSiguiente.addEventListener(
"click",
evaluarRespuesta
);

/* =====================================================
   FUNCIONES INICIALES
===================================================== */

function iniciarEvaluacion(){

    document
    .getElementById("pantallaInicial")
    .style.display = "none";

    document
    .getElementById("contenido")
    .classList.remove("oculto");

    mostrarPregunta();
}

/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function mostrarPregunta(){

    actualizarBarra();

    const pregunta =
    preguntasActuales[indice];

    let html = `
        <div class="pregunta">
            <h2>${pregunta.pregunta}</h2>
    `;

    if(pregunta.tipo === "radio"){

        pregunta.opciones.forEach(opcion => {

            html += `
                <label>
                    <input
                        type="radio"
                        name="respuesta"
                        value="${opcion}">
                    ${opcion}
                </label>
            `;
        });
    }

    else if(pregunta.tipo === "texto"){

        html += `
            <input
                type="text"
                id="respuestaTexto"
                placeholder="Escribe tu respuesta">
        `;
    }

    else if(pregunta.tipo === "codigo"){

        html += `
            <textarea
                id="respuestaTexto"
                placeholder="Escribe el código aquí">
            </textarea>
        `;
    }

    html += "</div>";

    quiz.innerHTML = html;

    mostrarEstadoActual();
}

/* =====================================================
   INFORMACIÓN DE FASE
===================================================== */

function mostrarEstadoActual(){

    let texto = "";

    if(fase === 1){

        texto =
        "🎯 Diagnóstico de nivel (5 preguntas)";
    }

    if(fase === 2){

        texto =
        `📘 Nivel ${nivel} - Bloque 1`;
    }

    if(fase === 3){

        texto =
        `📗 Nivel ${nivel} - Bloque 2`;
    }

    document
    .getElementById("nivelInfo")
    .innerHTML = texto;
}

/* =====================================================
   EVALUAR RESPUESTA
===================================================== */

function evaluarRespuesta(){

    const pregunta =
    preguntasActuales[indice];

    let respuestaUsuario = "";

    let correcta = false;

    if(pregunta.tipo === "radio"){

        const seleccionada =
        document.querySelector(
            'input[name="respuesta"]:checked'
        );

        if(!seleccionada){

            alert("Debes seleccionar una respuesta.");
            return;
        }

        respuestaUsuario =
        seleccionada.value;

        correcta =
        respuestaUsuario ===
        pregunta.correcta;
    }

    else{

        const entrada =
        document.getElementById(
            "respuestaTexto"
        );

        if(!entrada.value.trim()){

            alert("Debes escribir una respuesta.");
            return;
        }

        respuestaUsuario =
        entrada.value.trim();

        correcta =
        respuestaUsuario
        .toLowerCase()
        .includes(
            pregunta.correcta.toLowerCase()
        );
    }

    guardarRespuesta(
        pregunta,
        respuestaUsuario,
        correcta
    );

    if(fase === 1 && correcta){

        aciertosDiagnostico++;
    }

    if(fase === 2 && correcta){

        aciertosBloque2++;
    }

    if(fase === 3 && correcta){

        aciertosBloque3++;
    }

    indice++;

    if(indice < preguntasActuales.length){

        mostrarPregunta();
        return;
    }

    avanzarFase();
}

/* =====================================================
   GUARDAR RESPUESTA
===================================================== */

function guardarRespuesta(
    pregunta,
    respuestaUsuario,
    correcta
){

    historial.push({

        pregunta:
        pregunta.pregunta,

        tema:
        pregunta.tema,

        respuestaUsuario:
        respuestaUsuario,

        respuestaCorrecta:
        pregunta.correcta,

        correcta:
        correcta,

        explicacion:
        pregunta.explicacion,

        recomendacion:
        pregunta.recomendacion
    });
}

/* =====================================================
   CAMBIO DE FASE
===================================================== */

function avanzarFase(){

    if(fase === 1){

        mostrarClasificacion();

        return;
    }

    if(fase === 2){

        pasarABloqueFinal();

        return;
    }

    if(fase === 3){

        mostrarResultadoFinal();
    }
}

/* =====================================================
   CLASIFICACIÓN
===================================================== */

function mostrarClasificacion(){

    const fortalezas =
    historial
    .filter(r => r.correcta)
    .map(r => r.tema);

    const mejorar =
    historial
    .filter(r => !r.correcta)
    .map(r => r.tema);

    let justificacion = "";

    if(aciertosDiagnostico <= 2){

        nivel = "🟢 Básico";

        preguntasActuales =
        basico;

        justificacion =
        "Necesitas reforzar conceptos fundamentales de Python antes de avanzar a contenidos más complejos.";
    }

    else if(aciertosDiagnostico <= 4){

        nivel = "🟠 Intermedio";

        preguntasActuales =
        intermedio;

        justificacion =
        "Dominas los conceptos esenciales pero todavía debes afianzar estructuras de control y colecciones de datos.";
    }

    else{

        nivel = "🔴 Avanzado";

        preguntasActuales =
        avanzado;

        justificacion =
        "Has demostrado un dominio sólido de los fundamentos y estás preparado para resolver problemas más complejos.";
    }

    fase = 2;
    indice = 0;

    quiz.innerHTML = `
    <div class="tarjeta">

        <h2>${nivel}</h2>

        <p>
        Has acertado
        <strong>
        ${aciertosDiagnostico}/5
        </strong>
        preguntas.
        </p>

        <h3>✅ Fortalezas</h3>

        <ul>
        ${
            fortalezas.length
            ? fortalezas.map(
                x => `<li>${x}</li>`
              ).join("")
            : "<li>Ninguna detectada</li>"
        }
        </ul>

        <h3>📚 Aspectos a reforzar</h3>

        <ul>
        ${
            mejorar.length
            ? mejorar.map(
                x => `<li>${x}</li>`
              ).join("")
            : "<li>Ninguno</li>"
        }
        </ul>

        <h3>🎯 Justificación</h3>

        <p>${justificacion}</p>

        <p>
        Las siguientes
        10 preguntas serán
        diferentes y estarán
        adaptadas a tu nivel.
        </p>

        <button onclick="continuarNivel()">
            Continuar
        </button>

    </div>
    `;

    botonSiguiente.style.display =
    "none";
}

function continuarNivel(){

    botonSiguiente.style.display =
    "block";

    mostrarPregunta();
}

window.continuarNivel =
continuarNivel;

/* =====================================================
   BLOQUE FINAL
===================================================== */

function pasarABloqueFinal(){

    fase = 3;

    indice = 0;

    if(nivel.includes("Básico")){

        preguntasActuales =
        finalBasico;
    }

    if(nivel.includes("Intermedio")){

        preguntasActuales =
        finalIntermedio;
    }

    if(nivel.includes("Avanzado")){

        preguntasActuales =
        finalAvanzado;
    }

    mostrarPregunta();
}

/* =====================================================
   BARRA DE PROGRESO
===================================================== */

function actualizarBarra(){

    let realizadas =
    ((fase - 1) * 5) +
    indice;

    let porcentaje =
    (realizadas / 15) * 100;

    document
    .getElementById("barra")
    .style.width =
    porcentaje + "%";
}

/* =====================================================
   RESULTADO FINAL
===================================================== */

function mostrarResultadoFinal(){

    document
    .getElementById("barra")
    .style.width = "100%";

    quiz.innerHTML = "";

    botonSiguiente.style.display =
    "none";

    const totalEvaluable =
    aciertosBloque2 +
    aciertosBloque3;

    const nota =
    totalEvaluable;

    let html = `

    <h2>📊 Informe Final</h2>

    <p>
    <strong>Nivel:</strong>
    ${nivel}
    </p>

    <p>
    <strong>Aciertos bloque 1:</strong>
    ${aciertosBloque2}/5
    </p>

    <p>
    <strong>Aciertos bloque 2:</strong>
    ${aciertosBloque3}/5
    </p>

    <p>
    <strong>Nota Final:</strong>
    ${nota}/10
    </p>

    <hr>

    <h2>Feedback detallado</h2>
    `;

    historial.forEach((item,i)=>{

        html += `

        <div class="${
            item.correcta
            ? "feedback-correcta"
            : "feedback-incorrecta"
        }">

        <h3>
        Pregunta ${i+1}
        </h3>

       <div class="estado">
${
 item.correcta
 ? "✅ RESPUESTA CORRECTA"
 : "❌ RESPUESTA INCORRECTA"
}
</div>
        <p>
        <strong>Pregunta:</strong>
        ${item.pregunta}
        </p>

        <p>
        <strong>Tu respuesta:</strong>
        ${item.respuestaUsuario}
        </p>

        <p>
        <strong>Respuesta correcta:</strong>
        ${item.respuestaCorrecta}
        </p>

        <p>
        <strong>Explicación:</strong>
        ${item.explicacion}
        </p>

        <p>
        <strong>Recomendación:</strong>
        ${item.recomendacion}
        </p>

        </div>
        `;
    });

    html += `

    <button onclick="reiniciarTest()">
        🔄 Reintentar evaluación
    </button>
    `;

    document
    .getElementById("resultado")
    .innerHTML = html;
}

/* =====================================================
   REINICIO
===================================================== */

function reiniciarTest(){

    location.reload();
}

window.reiniciarTest =
reiniciarTest;
