---
id: 5
title: "Maneja los errores de JavaScript como un Desarrollador Senior"
author:
    name: "Engelbert Vizcaya"
    url: "https://engeldlgado.com"
avatar: "/imagenes/profile-pic.png"
category: "JavaScript"
date: "10-02-2023"
bannerImage: "https://res.cloudinary.com/dxhsmq1pv/image/upload/v1676060839/engeldlgado/post/manejo-errores-javascript_zjbrb3.jpg"
excerpt: "Aprende a manejar errores en JavaScript con Error Factory. Ejemplos y explicaciones detalladas. Convierte en desarrollador senior hoy."
readTime: "3 min"
tags:
    - JavaScript
    - Errores
    - API
    - Error Factory
    - Manejo de errores
---


## Domina la gestión de errores con estilo: Conviértete en un Desarrollador Senior


JavaScript es un lenguaje dinámico y versátil que se utiliza en una amplia variedad de aplicaciones, desde páginas web hasta aplicaciones de escritorio. Sin embargo, también es propenso a errores debido a su naturaleza dinámica. Por lo tanto, es importante implementar buenas prácticas para manejar los errores de manera efectiva.

Una buena práctica para manejar errores es crear una clase de error personalizada con una fabrica de errores (**Error Factory**). Una fábrica de errores es una función que crea y devuelve una nueva instancia de una clase de error personalizada.

A continuación, se muestra un ejemplo de una fábrica de errores en JavaScript.

```javascript
// archivo: error-factory.js
const createErrorHandler = (name) =>
  class CustomError extends Error {
    constructor (message) {
      super(message)
      this.name = name
    }
  }

export default createErrorHandler

```

En el ejemplo anterior, creamos una función `createErrorHandler` que nos permite crear una clase personalizada de error que toma un nombre como parámetro y hereda de la clase `Error`. En el constructor de esta clase personalizada, se llama a `super(message)` con el objetivo de inicializar la propiedad `message` de la clase `Error`, y luego se establece la propiedad `name` con el valor del parámetro `name`.

Ahora, veamos cómo utilizar esta clase personalizada de error en un ejemplo práctico con una petición `fetch` a la [**API de Star Wars**](https://swapi.dev/). Primero, creamos un archivo llamado `errorHandler.js` y agregamos el código del error factory:
```javascript
// archivo: errorHandler.js
const createErrorHandler = (name) =>
  class CustomError extends Error {
    constructor (message) {
      super(message)
      this.name = name
    }
  }

export default createErrorHandler

```
A continuación, creamos un segundo archivo llamado `fetchAPI.js` en el que realizaremos la petición `fetch` a la API y manejaremos los errores que puedan ocurrir:

```javascript
import createErrorHandler from './errorHandler.js'

const APIError = createErrorHandler('APIError')

const fetchAPI = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/people/1/')
    if (!response.ok) {
      throw new APIError(`Error: ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export default fetchAPI
```
En este archivo, importamos la función `createErrorHandler` desde `errorHandler.js` y creamos una nueva clase personalizada de error llamada `APIError` utilizando la función `createErrorHandler`. Luego, creamos una función `fetchAPI` que realiza una petición `fetch` a la API de Star Wars y maneja los errores que puedan ocurrir dentro de un bloque `try...catch`.

Si la petición es exitosa y se recibe una respuesta `200 OK`, se imprime el objeto JSON en la consola. De lo contrario, si la respuesta no es satisfactoria, se lanza una nueva instancia de la clase `APIError` con un mensaje que incluye el código de estado y el texto del estado. Si se produce un error en la petición `fetch`, también se capturará y se imprimirá un mensaje de error en la consola.

Ejemplo usando `.then`:

```javascript
fetch('https://swapi.dev/api/people/1/')
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new APIError(`Error: ${response.status}: ${response.statusText}`)
  })
  .then(json => console.log(json))
  .catch(error => {
    if (error instanceof APIError) {
      console.error(error.message)
    } else {
      console.error('Error: ', error)
    }
  })
```
En este ejemplo, se está utilizando el método `then` para manejar la respuesta y capturar posibles errores. Si la respuesta es exitosa y se recibe un código de estado 200 OK, se retorna la respuesta en formato JSON. De lo contrario, se lanza una nueva instancia de la clase APIError con un mensaje que incluye el código de estado y el texto del estado.

Si se produce un error en la petición fetch, este se capturará con el método `catch`. Si el error es una instancia de la clase APIError, se imprimirá su mensaje en la consola. De lo contrario, se imprimirá un mensaje de error con la información del error capturado.

En resumen, la implementación de un error factory puede ser una solución muy útil para manejar errores de manera más clara y organizada en aplicaciones web. Al crear una clase personalizada para los errores, podemos tener un control más detallado sobre las posibles situaciones de error y proporcionar información más útil y relevante a los usuarios y desarrolladores.