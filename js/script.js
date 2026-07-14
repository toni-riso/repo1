function corregir() {

    const respuestasCorrectas = {
        p1: "c",
        p2: "b",
        p3: "c",
        p4: "c",
        p5: "a",
        p6: "c",
        p7: "b",
        p8: "c",
        p9: "c",
        p10: "d"
    };

    const explicaciones = {
        p1: "El tipo bool solo puede almacenar los valores True y False.",
        p2: "15 es un número entero (int). '15' entre comillas sería un string.",
        p3: "Todo texto entre comillas pertenece al tipo string (str).",
        p4: "Las listas se escriben entre corchetes [], por ejemplo [1, 2, 3].",
        p5: "Las tuplas se escriben entre paréntesis (), por ejemplo (1, 2, 3).",
        p6: "La comparación 5 > 3 es verdadera, por lo que devuelve True.",
        p7: "16 es un número entero y por tanto pertenece al tipo int.",
        p8: "En Python los índices comienzan en 0, por eso el primer elemento es colores[0].",
        p9: "Los strings se escriben entre comillas simples o dobles.",
        p10: "Los paréntesis indican que el dato es una tupla."
    };

    const temas = {
        p1: "Booleanos",
        p2: "Enteros",
        p3: "Strings",
        p4: "Listas",
        p5: "Tuplas",
        p6: "Booleanos",
        p7: "Enteros",
        p8: "Listas",
        p9: "Strings",
        p10: "Tuplas"
    };

    let puntuacion = 0;
    let aciertos = 0;
    let errores = 0;

    let conceptosRepasar = new Set();

    // Limpiar correcciones previas
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correcta", "incorrecta");
    });

    document.querySelectorAll(".explicacion").forEach(el => el.remove());

    for (let pregunta in respuestasCorrectas) {

        const opciones = document.querySelectorAll(
            `input[name="${pregunta}"]`
        );

        let respuestaUsuario = null;
        let preguntaDiv = opciones[0].closest(".pregunta");

        opciones.forEach(opcion => {

            const label = opcion.parentElement;

            if (opcion.value === respuestasCorrectas[pregunta]) {
                label.classList.add("correcta");
            }

            if (opcion.checked) {
                respuestaUsuario = opcion;
            }
        });

        // Crear explicación
        const explicacion = document.createElement("div");
        explicacion.classList.add("explicacion");

        if (respuestaUsuario) {

            if (respuestaUsuario.value === respuestasCorrectas[pregunta]) {

                puntuacion++;
                aciertos++;

                explicacion.innerHTML =
                    `✅ Correcta. ${explicaciones[pregunta]}`;

            } else {

                puntuacion--;
                errores++;

                respuestaUsuario.parentElement.classList.remove("correcta");
                respuestaUsuario.parentElement.classList.add("incorrecta");

                conceptosRepasar.add(temas[pregunta]);

                explicacion.innerHTML =
                    `❌ Incorrecta. ${explicaciones[pregunta]}`;
            }

        } else {

            conceptosRepasar.add(temas[pregunta]);

            explicacion.innerHTML =
                `⚠️ No respondida. ${explicaciones[pregunta]}`;
        }

        preguntaDiv.appendChild(explicacion);
    }

    // Mensaje personalizado
    let mensaje = "";

    if (puntuacion >= 8) {
        mensaje = "🏆 ¡Excelente trabajo! Dominas muy bien los tipos de datos en Python.";
    } else if (puntuacion >= 5) {
        mensaje = "👍 Buen trabajo. Has comprendido la mayor parte de los conceptos.";
    } else if (puntuacion >= 0) {
        mensaje = "📚 Necesitas repasar algunos conceptos para afianzar el aprendizaje.";
    } else {
        mensaje = "💪 No te desanimes. Repasa los contenidos y vuelve a intentarlo.";
    }

    // Generar informe
    let informe = `
        <h2>📊 Informe de resultados</h2>

        <p><strong>Puntuación:</strong> ${puntuacion}</p>

        <p><strong>✅ Aciertos:</strong> ${aciertos}</p>

        <p><strong>❌ Errores:</strong> ${errores}</p>

        <p>${mensaje}</p>
    `;

    // Conceptos a repasar
    if (conceptosRepasar.size > 0) {

        informe += `
            <h3>📖 Conceptos recomendados para repasar</h3>
            <ul>
        `;

        conceptosRepasar.forEach(concepto => {
            informe += `<li>${concepto}</li>`;
        });

        informe += `</ul>`;
    }

    document.getElementById("resultado").innerHTML = informe;

    // Desactivar botón
    const boton = document.querySelector("button");

    boton.disabled = true;
    boton.textContent = "✅ Examen corregido";
}
