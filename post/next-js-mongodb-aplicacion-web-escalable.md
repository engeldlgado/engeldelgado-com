---
id: 2
title: "Construye una App escalable con Next.js y MongoDB: Tutorial y consejos"
author:
    name: "Engelbert Vizcaya"
    url: "https://engeldlgado.com"
avatar: "/imagenes/profile-pic.png"
category: "Desarrollo web"
date: "24-01-2023"
bannerImage: "https://res.cloudinary.com/dxhsmq1pv/image/upload/v1674619393/engeldlgado/post/writing-code-next-js_fbjxny.jpg"
excerpt: "Aprende cómo construir una aplicación web escalable y con buen rendimiento utilizando Next.js y MongoDB. Incluye códigos de ejemplo y consejos de SEO para optimizar tu sitio."
readTime: "12 min"
tags:
    - desarrollo web
    - nextjs
    - mongodb
    - mongoose
---

## Aplicación Escalable con Next.js y MongoDB
¿Estás buscando construir una aplicación web escalable y con buen rendimiento? Entonces Next.js y MongoDB son la combinación perfecta para ti.

Next.js es un framework de JavaScript para aplicaciones web con React. Es altamente escalable y optimizado para mejorar el rendimiento de la aplicación. Por otro lado, MongoDB es una base de datos NoSQL popular que es perfecta para aplicaciones web de gran escala.

En este tutorial, aprenderás cómo utilizar Next.js junto con MongoDB para construir una aplicación web escalable y con buen rendimiento. También te mostraremos códigos de ejemplo y consejos de SEO para optimizar tu sitio.

Para comenzar, necesitarás tener Node.js y MongoDB instalados en tu computadora. Si aún no los tienes, puedes descargarlos desde el sitio web oficial.

Descarga: <a href='https://nodejs.org/' target='_blank' rel='nofollow'>Node.JS</a>, <a href='https://www.mongodb.com/' target='_blank' rel='nofollow'>MongoDB</a>

### Paso 1: Crea un nuevo proyecto Next.js

Para crear un nuevo proyecto Next.js, utilizaremos el comando "npx create-next-app@latest". Este comando creará una estructura de directorios básica para tu proyecto. Puedes usar `yarn add` o `pnpm add` pero en este ejemplo y los siguientes usaremos `npx` y `npm`.

    npx create-next-app@latest

### Paso 2: Conecta MongoDB a tu aplicación

Ahora, necesitarás conectar MongoDB a tu aplicación Next.js. Puedes hacerlo utilizando una biblioteca como Mongoose. Mongoose es una biblioteca ODM (Object Document Mapping) que te permite interactuar con tu base de datos MongoDB de manera sencilla.

Para instalar Mongoose, abre la terminal en tu proyecto y ejecuta el siguiente comando:

    npm install mongoose

Una vez que hayas instalado Mongoose, puedes conectarlo a tu base de datos MongoDB utilizando el siguiente código:


``` javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected to MongoDB'); });
```
En este ejemplo, estamos conectando a una base de datos local llamada "my-app". Asegúrate de reemplazar esto con la URL de tu propia base de datos MongoDB.

### Paso 3: Crea un modelo en Mongoose

Ahora que MongoDB está conectado a tu aplicación, puedes comenzar a crear tus modelos Mongoose. Un modelo Mongoose es un esquema que define la estructura de tus datos. Por ejemplo, si estás construyendo una aplicación de blog, podrías crear un modelo "Post" que tenga los campos "título", "contenido" y "fecha de publicación".

Aquí hay un ejemplo de cómo crear un modelo "Post" utilizando Mongoose:

``` javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: {
		type: Date,
		default: Date.now
		},
});

const Post = mongoose.model('Post', postSchema);
```

### Paso 4: Utiliza tus modelos en tus páginas en Next.js

Ahora que tienes tus modelos Mongoose creados, puedes utilizarlos en tus páginas Next.js. Por ejemplo, podrías crear una página "crear post" que permita al usuario crear un nuevo post en tu aplicación de blog.

Aquí hay un ejemplo de cómo crear un nuevo post utilizando el modelo "Post" que creamos anteriormente:

``` jsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import Post from '../models/Post'

export default function CreatePost () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  async function handleSubmit (e) {
    e.preventDefault()
    const post = new Post({ title, content })
    await post.save()
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Title </label>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label> Content </label>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type='submit'>Create</button>
    </form>
  )
}
```
*¿ahora como obtengo lo que he publicado? Te preguntarás*

Un ejemplo de cómo obtener los datos de MongoDB en tu aplicación Next.js sería utilizando el método `find` de Mongoose. El método `find` te permite buscar y obtener documentos de tu base de datos MongoDB.

Por ejemplo, si quieres obtener todos los documentos de una colección "posts", podrías utilizar el siguiente código en tu página en Next.js:
``` jsx
import { useEffect, useState } from 'react';
import Post from '../models/Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Post.find();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
```
En este ejemplo, estamos importando el modelo `Post` que creamos anteriormente y utilizando el método `find` para obtener todos los documentos de la colección `posts` usando `.map`. Luego, estamos utilizando el estado de React para guardar los datos y mostrarlos en nuestra página.

También puedes utilizar el método `findOne` para obtener un solo documento o utilizar métodos como `findById` para buscar documentos por su ID. Puedes encontrar más información sobre los métodos de búsqueda disponibles en la <a href='https://mongoosejs.com/docs/' target='_blank' rel='nofollow'>documentación de Mongoose</a>.

### Paso 5: Optimiza tu aplicación para SEO

Para optimizar tu aplicación Next para SEO, hay varias cosas que debes tener en cuenta. Primero, debes asegurarte de que tus páginas tengan títulos y metadatos únicos y relevantes. Esto puede ser fácilmente logrado utilizando el componente `<Head>` de **Next.js** que te permite definir los metadatos en tus componentes de página.

Además, debes asegurarte de que tu sitio tenga una estructura de enlace fácil de seguir y utilizar una estrategia de enlace interno adecuada. También debes asegurarte de que tu sitio está optimizado para dispositivos móviles y que carga rápidamente.

Por último, debes asegurarte de que tu sitio esté registrado en <a href='https://search.google.com/search-console?hl=es' target='_blank' rel='nofollow'>Google Search Console</a> y estar al tanto de cualquier problema de SEO que pueda surgir.

En resumen, utilizar Next.js junto con MongoDB es una excelente manera de construir una aplicación web escalable y con buen rendimiento. Asegurándote de seguir las buenas prácticas de SEO y optimizando tu sitio para dispositivos móviles y velocidad de carga, podrás asegurar que tu aplicación sea fácil de encontrar y utilizar para tus usuarios.

Espero que este tutorial te haya ayudado a entender cómo utilizar Next.js junto con MongoDB para construir una aplicación web escalable y con buen rendimiento. Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en ponerte en contacto conmigo a través de mis redes sociales o mi correo electrónico. Estaré más que feliz de ayudarte.

Además, te invito a seguirme en mis redes sociales para estar al tanto de las últimas actualizaciones, noticias y tutoriales relacionados con el desarrollo web. ¡Te espero!