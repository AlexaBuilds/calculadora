/* ==========================================================================
   TITULO: LÓGICA DE LA CALCULADORA

   CAMBIO RESPECTO AL PROYECTO SIMULACRO

   Antes:
   - El programa gestionaba tickets de soporte.
   - Leía el nombre de un equipo y una incidencia.
   - Creaba elementos <li> dinámicamente.
   - Añadía incidencias a una lista visual.
   - Actualizaba un contador de tickets abiertos.

   Ahora:
   - El programa funciona como una calculadora básica.
   - Lee dos números introducidos por el usuario.
   - Realiza una operación matemática (suma).
   - Muestra el resultado en pantalla.
   - Ya no utiliza listas ni contadores.

   Se mantienen los conceptos fundamentales:
   - Selección de elementos del DOM.
   - Eventos de usuario.
   - Validación de datos.
   - Manipulación dinámica del contenido HTML.
   ========================================================================== */


/* ==========================================================================
   PASO 1: SELECCIONAR LOS ELEMENTOS DEL HTML

   CAMBIO RESPECTO AL SIMULACRO:

   Antes:
   - inputEquipo
   - inputProblema
   - listaTickets
   - contadorTickets

   Ahora:
   - numero1
   - numero2
   - resultado

   porque ya no trabajamos con incidencias.
   ========================================================================== */

const numero1 = document.getElementById('numero1');

const numero2 = document.getElementById('numero2');

const btnCalcular = document.getElementById('btnCalcular');

const resultado = document.getElementById('resultado');


/* ==========================================================================
   PASO 2: DETECTAR EL CLICK DEL BOTÓN

   Cuando el usuario pulse "CALCULAR",
   se ejecutará toda la lógica de la aplicación.
   ========================================================================== */

btnCalcular.addEventListener('click', function () {

    /* ==============================================================
       PASO 3: OBTENER LOS VALORES DE LOS INPUTS

       Number() convierte el texto introducido
       por el usuario en un valor numérico.
       ============================================================== */

    const valor1 = Number(numero1.value);

    const valor2 = Number(numero2.value);


    /* ==============================================================
       PASO 4: VALIDACIÓN DE CAMPOS OBLIGATORIOS

       Igual que en el simulacro de tickets,
       comprobamos que el usuario haya rellenado
       todos los campos antes de continuar.

       Si alguno está vacío:
       - Se muestra un mensaje de alerta.
       - Se detiene la ejecución.
       ============================================================== */

    if (numero1.value === '' || numero2.value === '') {

        alert('Por favor, introduzca ambos números.');

        return;
    }


    /* ==============================================================
       PASO 5: REALIZAR LA OPERACIÓN MATEMÁTICA

       CAMBIO RESPECTO AL SIMULACRO:

       Antes:
       Se creaba un elemento <li> y se añadía
       a una lista de incidencias.

       Ahora:
       Se realiza una suma entre ambos números.
       ============================================================== */

    const suma = valor1 + valor2;


    /* ==============================================================
       PASO 6: MOSTRAR EL RESULTADO EN PANTALLA

       CAMBIO RESPECTO AL SIMULACRO:

       Antes:
       listaTickets.appendChild(...)

       Ahora:
       Modificamos el contenido del elemento
       con id="resultado".

       textContent reemplaza el texto existente
       por el nuevo resultado calculado.
       ============================================================== */

    resultado.textContent =
        `${valor1} + ${valor2} = ${suma}`;

});


/* ==========================================================================
   RESUMEN DEL FUNCIONAMIENTO

   1. El usuario introduce dos números.
   2. Pulsa el botón CALCULAR.
   3. Se validan los campos.
   4. Se realiza la suma.
   5. El resultado aparece en pantalla.

   Ejemplo:

       Número 1: 5
       Número 2: 8

       Resultado:
       5 + 8 = 13

   ========================================================================== */
