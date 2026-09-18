# Actividad 1 - Programación Web 

Este repositorio contiene la solución completa a la **Actividad 1** de la asignatura **Programación Web**. Consiste en una serie de ejercicios prácticos desarrollados para dominar las bases de maquetación, diseño web adaptativo y dinamismo del lado del cliente.

---

## Descripción de los Ejercicios

### Ejercicio 1: Hola Mundo HTML
* **Descripción:** Implementación de la estructura básica de una página web en HTML5 alojada en el servidor local XAMPP.
* **Elementos clave:** Declaración `<!DOCTYPE html>`, etiquetas esenciales de metadatos (`<meta charset="UTF-8">`, `<title>`) y jerarquía textual básica (`<h1>`, `<p>`).

### Ejercicio 2: Párrafos y Formato Básico
* **Descripción:** Aplicación de marcado semántico para dar estilo y estructura a bloques de texto.
* **Elementos clave:** Uso de `<p>` para párrafos, `<strong>` para resaltar importancia semántica, `<em>` para énfasis textual y `<br>` para saltos de línea sin margen adicional.

### Ejercicio 3: Enlaces Simples
* **Descripción:** Creación y gestión de hipervínculos internos y externos para la navegación web.
* **Elementos clave:** Etiqueta `<a>` con atributo `href`, así como el uso del atributo `target="_blank"` para apertura en nueva pestaña y `target="_self"` para la misma ventana.

### Ejercicio 4: Imágenes Básicas
* **Descripción:** Inserción y control de imágenes dentro del documento HTML.
* **Elementos clave:** Uso del elemento autocerrado `<img>`, con atributos esenciales como `src` (ruta del archivo), `alt` (texto alternativo de accesibilidad) y `width` (ancho).

### Ejercicio 5: Combinando Texto y Enlaces
* **Descripción:** Integración conjunta de texto enriquecido, recursos multimedia y enlaces de navegación.
* **Elementos clave:** Estructuración de contenido en bloques de párrafos combinando `<strong>`, `<em>`, imágenes (`<img>`) y enlaces externos (`<a href="..." target="_blank">`).

### Ejercicio 6: Secciones Semánticas Básicas
* **Descripción:** Organización del documento mediante etiquetas semánticas estructurales de HTML5.
* **Elementos clave:** `<header>` para la cabecera del sitio, `<section>` para el contenido temático agrupado y `<footer>` para información de pie de página.

### Ejercicio 7: Listas Anidadas + Enlaces (Receta: Tacos al Pastor)
* **Descripción:** Maquetación de una página web con listas ordenadas y desordenadas multinivel.
* **Elementos clave:** `<ul>` (lista desordenada para ingredientes), `<ol>` (lista ordenada para pasos de preparación) y sublistas anidadas `<ul><li>...</li></ul>` dentro de un ítem principal.

### Ejercicio 8: Horario de Clases (Tablas y Estilos)
* **Descripción:** Creación de un horario de clases semanal tabulado y estilizado dinámicamente mediante CSS.
* **Elementos clave:** Estructura semántica de tablas con `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` y `<td>`. Combinación de celdas mediante `rowspan` y `colspan`, y estilizado con CSS (pseudo-clases `:nth-child(even)`, bordes y colores).

### Ejercicio 9: Formulario de Contacto Avanzado
* **Descripción:** Diseño de un formulario interactivo, accesible y validado mediante HTML5 y CSS3.
* **Elementos clave:** Uso de `<form>`, `<label>` (vinculados por `for` e `id`), inputs especializados (`type="text"`, `email`, `tel`), `<textarea>`, variables CSS (`:root`), disposición en cuadrícula con CSS Grid (`grid-template-columns: 1fr 1fr`) y estados `:focus` y `:hover`.

### Ejercicio 10: Calculadora de Conversión Celsius a Fahrenheit
* **Descripción:** Aplicación web interactiva que convierte unidades de temperatura procesadas dinámicamente sin recargar la página.
* **Elementos clave:**
  * **HTML5:** Inputs de texto con atributos `readonly` (para la caja del resultado), `inputmode="decimal"` y etiquetas explicativas.
  * **CSS3:** Tarjeta flotante moderna centrada con Flexbox (`min-height: 100vh`), variables de color (`:root`), bordes redondeados (`border-radius`) y animación de botón en el estado `:active` (`transform: translateY(1px)`).
  * **JavaScript:** Captura de eventos mediante `onclick` y `addEventListener('keydown')` (tecla Enter). Manipulación del DOM (`getElementById`, `.textContent`, `.value`), validaciones avanzadas (`isNaN`, `.trim()`) y formateo numérico con `.toFixed(1)`.

### Ejercicio 11: Conversor de Distancia (Kilómetros a Millas)
* **Descripción:** Aplicación web para la conversión instantánea de unidades de distancia sin recarga de página.
* **Elementos clave:** Entrada dinámica, botón de procesamiento y salida en campo bloqueado (`readonly`). Cálculo mediante fórmula $M = K \times 0.621371$, con validación de entradas no vacías y estrictamente numéricas.

### Ejercicio 12: Conversor de Divisas (Pesos Mexicanos a Dólares)
* **Descripción:** Calculadora financiera para la conversión de moneda local (MXN) a dólares (USD) basada en una tasa de cambio fija.
* **Elementos clave:** Uso de operaciones aritméticas en JS, formato numérico decimal, salidas en campos `readonly` y validaciones para restringir datos vacíos o valores no numéricos/negativos.

### Ejercicio 13: Verificador de Elegibilidad para Votar
* **Descripción:** Herramienta interactiva de validación condicional que evalúa si un usuario cuenta con la edad legal para votar.
* **Elementos clave:** Evaluación condicional con estructuras `if/else` en JS ($\ge 18$ años), mensajes contextuales dinámicos ("Puedes votar" / "No puedes votar") mostrados en cajas `readonly` y control de números positivos.

### Ejercicio 14: Procesamiento de Arreglos y Métodos Numéricos
* **Descripción:** Herramienta de análisis numérico que procesa una lista de valores separados por comas ingresados por el usuario.
* **Elementos clave:** Manipulación de arrays en JS mediante `.split(',')`, conversión con `.map(Number)` y acumulación mediante `.reduce()`. Cálculo de valores extremos con `Math.max()` y `Math.min()` usando el operador spread (`...`).

### Ejercicio 15: Gestión de Estudiantes con Objetos en JS
* **Descripción:** Aplicación para registro y análisis estadístico de calificaciones de alumnos utilizando estructuras de objetos.
* **Elementos clave:** Creación y almacenamiento de objetos `{nombre, calificacion}` dentro de arreglos, recorrido con `.forEach()`, cálculo de promedio ponderado y búsqueda de calificaciones máximas y mínimas.

### Ejercicio 16: Calculadora Básica con Funciones Flecha
* **Descripción:** Calculadora modular de operaciones matemáticas fundamentales (suma, resta, multiplicación y división) desarrollada con sintaxis moderna de ES6.
* **Elementos clave:** Implementación de funciones flecha (`=>`), manejo de excepciones para evitar la división por cero, coordinación de operaciones desde una función principal y alertas estilizadas con la librería **SweetAlert2**.

### Ejercicio 17: Gestor de Tareas Pendientes (To-Do List Persistente)
* **Descripción:** Aplicación completa de lista de tareas con persistencia de datos local, arquitectura basada en closures y control de estado.
* **Elementos clave:** Almacenamiento local mediante la API `localStorage`, serialización de datos en formato **JSON** (`JSON.stringify()` / `JSON.parse()`), desacoplamiento con closures/scope privado e interfaz interactiva con confirmaciones dinámicas.

### Ejercicio 18: Manipulación Dinámica del DOM y Framework Bootstrap
* **Descripción:** Interfaz interactiva responsiva para la inserción y eliminación en tiempo real de elementos dentro del documento.
* **Elementos clave:** Estructuración visual con el framework **Bootstrap**, métodos de manipulación del DOM (`document.createElement()`, `.appendChild()`, `.remove()`) y gestión de eventos de usuario (`addEventListener`).

---

## 🛠️ Tecnologías Empleadas

* **HTML5:** Lenguaje de marcado semántico para la estructuración del contenido web.
* **CSS3:** Estilos visuales, variables CSS (`:root`), Flexbox, CSS Grid y efectos de interacción (`:hover`, `:focus`, `:active`).
* **JavaScript (ES6):** Lógica del cliente, validación de datos de entrada, manejo de eventos y manipulación del DOM.
* **Git & GitHub:** Control de versiones del proyecto y alojamiento del código fuente.
* **GitHub Pages:** Despliegue y publicación web en línea.
* **XAMPP (Apache):** Entorno de servidor local para pruebas de desarrollo web.
* **Visual Studio Code:** Editor de código fuente.
