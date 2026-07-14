
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

    let puntuacion = 0;

    // Limpiar correcciones anteriores
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correcta", "incorrecta");
    });

    for (let pregunta in respuestasCorrectas) {

        const opciones = document.querySelectorAll(
            `input[name="${pregunta}"]`
        );

        let respuestaUsuario = null;

        opciones.forEach(opcion => {

            const label = opcion.parentElement;

            // Marca la respuesta correcta en verde
            if (opcion.value === respuestasCorrectas[pregunta]) {
                label.classList.add("correcta");
            }

            if (opcion.checked) {
                respuestaUsuario = opcion;
            }
        });

        if (respuestaUsuario) {

            if (respuestaUsuario.value === respuestasCorrectas[pregunta]) {

                puntuacion++;

            } else {

                puntuacion--;

                // Marca la respuesta incorrecta seleccionada en rojo
                respuestaUsuario.parentElement.classList.remove("correcta");
                respuestaUsuario.parentElement.classList.add("incorrecta");
            }
        }
    }

    document.getElementById("resultado").innerHTML =
        `<h2>Puntuación final: ${puntuacion}</h2>`;
}
