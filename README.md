# Mini Code Editor

<a href="https://adrbog.github.io/MiniCodeEditor/" target="_blank">Demo</a>

## (EN) Simple code editor for your web applications

## Easy to create

Create the code editor is done in a few lines of code.

```html
<div id='editor'></div>

<!-- Import the editor -->
<script src='src/editor.js'></script>

<!-- Import the language -->
<script src='languages/html.js'></script>


<script>
	const EDITOR = new MiniCodeEditor('#editor')
	EDITOR.setRules(HTML_RULES)
</script>
```


## Easy to configure

Configure your text editor in no time.

Here you have all the possible options: setReadOnly(), setWordWrap(), setValue(), appendValue(), getValue() and setRules()

```js
EDITOR.setRules(HTML_RULES)
EDITOR.setWordWrap(false)
EDITOR.setReadOnly(true)
EDITOR.setValue('Hello world')
```

## Code fast

Write the keyword and then press <kbd>Ctrl</kbd> + <kbd>Space</kbd> to instantly generate the code block.


Press <kbd>F1</kbd> inside the code editor to view a list of current keywords


<img width="500px" src="res/1.gif">

## Supported languages
- HTML (consequently XML)
- Javascript
- Python
- SQLite

More coming soon...

## Help wanted!

In this world there are a lot of programming languages, and I can't configure Mini Code Editor for each of them.

If you are interested in contributing to the project, read **CONTRIBUTING.md** to see how to create or edit programming languages in Mini Code Editor.

<hr>

## (ES) Editor de codigo sencillo para tus aplicaciones web

## Facil de crear

Crear el editor de código se hace en unas pocas líneas de código.

```html
<div id='editor'></div>

<!-- Importa el editor -->
<script src='src/editor.js'></script>

<!-- Importa el lenguaje -->
<script src='languages/html.js'></script>


<script>
	const EDITOR = new MiniCodeEditor('#editor')
	EDITOR.setRules(HTML_RULES)
</script>
```


## Facil de configurar

Configura tu editor de texto en un abrir y cerrar de ojos.

Aquí tienes todas las opciones posibles: setReadOnly(), setWordWrap(), setValue(), appendValue(), getValue() and setRules()

```js
EDITOR.setRules(HTML_RULES)
EDITOR.setWordWrap(false)
EDITOR.setReadOnly(true)
EDITOR.setValue('Hola mundo')
```

## Programe rapido

Escriba la palabra clave y pulse <kbd>Ctrl</kbd> + <kbd>Space</kbd> para generar instantáneamente el bloque de código.


Pulsa <kbd>F1</kbd> dentro del editor de código para ver una lista de las palabras clave actuales


<img width="500px" src="res/1.gif">

## Lenguajes soportados
- HTML (en consecuencia XML)
- Javascript
- Python
- SQLite

Próximamente más...

## Se necesita ayuda!

En este mundo hay muchos lenguajes de programación, y no puedo configurar Mini Code Editor para cada uno de ellos.

Si está interesado en contribuir al proyecto, lea **CONTRIBUTING.md** (aviso: está en ingles) para ver cómo crear o editar lenguajes de programación en el Mini Code Editor.

## License

Mini Code Editor

Simple code editor for your web applications

Copyleft (C) 2024 Adrian Bogdan <br>
All wrongs reserved

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

<hr>

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/adrbog)
