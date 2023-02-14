---
id: 4
title: "Aprende a hacer copias profundas de objetos con structuredClone()"
author:
    name: "Engelbert Vizcaya"
    url: "https://engeldelgado.com"
avatar: "/imagenes/profile-pic.png"
category: "Desarrollo web"
date: "31-01-2023"
bannerImage: "https://res.cloudinary.com/dxhsmq1pv/image/upload/v1675190737/engeldlgado/post/structuredclone-copias-profundas-javascript_th7n5e.jpg"
excerpt: "Conoce cómo hacer copias profundas de objetos y arrays de manera segura con structuredClone() que es una función nativa en Javascript."
readTime: "2 min"
tags:
    - JavaScript
    - objetos
    - arrays
    - structuredClone()
    - copias profundas
---


## Introducción a structuredClone() en JavaScript

JavaScript es un lenguaje de programación dinámico y poderoso que se utiliza ampliamente para el desarrollo de aplicaciones web y móviles. Uno de los aspectos importantes de cualquier lenguaje de programación es la capacidad de copiar y manipular objetos y datos en la memoria. En JavaScript, la función `structuredClone()` es una herramienta útil para realizar copias profundas de objetos complejos y mantener sus propiedades y referencias a objetos originales de manera nativa. Sin usar magias no optimizadas como el `JSON.parse(JSON.stringify())`

## ¿Qué es structuredClone()?

`structuredClone()` es una función en JavaScript que realiza una copia profunda de objetos y arrays. Esto significa que, a diferencia de una copia superficial, una copia profunda incluye todas las propiedades y referencias a objetos originales en la nueva copia. La función `structuredClone()` se utiliza principalmente en el contexto de la transferencia de datos entre hilos o entre ventanas de una aplicación, donde es necesario realizar una copia completa y segura de los datos.

## ¿Cómo funciona structuredClone()?

La función `structuredClone()` utiliza un algoritmo de copia profunda para recorrer todas las propiedades y referencias de un objeto y crear una copia exacta en un nuevo objeto. Esta copia incluye todas las propiedades, incluyendo las que son objetos o arrays, y mantiene las referencias a objetos originales. De esta manera, los cambios realizados en la nueva copia no afectarán al objeto original y viceversa.

### Ejemplos de uso de structuredClone()

Aquí hay unos ejemplos para ilustrar cómo se puede utilizar la función `structuredClone()` en diferentes situaciones:

1.  Transferencia de datos entre hilos:

```javascript

const obj = { name: 'John', age: 32 };
const clonedObj = structuredClone(obj);

// Cambios en la copia no afectan al objeto original
clonedObj.name = 'Jane';

console.log(obj.name); // John
console.log(clonedObj.name); // Jane

```

2.  Copia profunda de un array:

```javascript

const arr = [1, 2, { name: 'John' }];
const clonedArr = structuredClone(arr);
// Cambios en la copia no afectan al array original
clonedArr[2].name = 'Jane';
console.log(arr[2].name); // John
console.log(clonedArr[2].name); // Jane

```

3. Copia profunda de objetos anidados:

```javascript

const obj = { name: 'John', address: { city: 'New York' } };
const clonedObj = structuredClone(obj);
// Cambios en la copia no afectan al objeto original
clonedObj.address.city = 'Los Angeles';

console.log(obj.address.city); // New York
console.log(clonedObj.address.city); // Los Angeles

```

## Conclusión

En resumen, la función `structuredClone()` es una herramienta útil para realizar copias profundas de objetos y arrays en JavaScript. Con esta función, es posible transferir datos entre hilos y entre ventanas de una aplicación de manera segura y manteniendo sus propiedades y referencias originales. Recuerda que la función `structuredClone()` es parte de la especificación Web Workers y está disponible en los navegadores modernos.

Si te gustó este artículo, no dudes seguirme en las redes sociales para estar al tanto de las últimas actualizaciones, noticias y tutoriales relacionados con el desarrollo web. ¡Te espero!