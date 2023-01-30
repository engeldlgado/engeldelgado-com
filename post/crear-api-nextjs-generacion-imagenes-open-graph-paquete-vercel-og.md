---
id: 2
title: "Crea tu API de Imágenes Open Graph con Next.js y @vercel/og"
author:
    name: "Engelbert Vizcaya"
    url: "https://engeldlgado.com"
avatar: "/imagenes/profile-pic.png"
category: "Desarrollo web"
date: "30-01-2023"
bannerImage: "https://res.cloudinary.com/dxhsmq1pv/image/upload/v1675119162/engeldlgado/post/crear-api-nextjs-generacion-imagenes-open-graph-paquete-vercel-og_vtsttd.jpg"
excerpt: "Aprende cómo crear una API en Next.js para generar imágenes Open Graph con el paquete @vercel/og. Obtén una visualización optimizada en redes sociales y mejora la experiencia de tus usuarios."
readTime: "6 min"
tags:
    - Next.js
    - API
    - Imágenes Open Graph
    - Optimización de redes sociales
    - Experiencia de usuario
---


## Crear una API en Next.js para la generación de imágenes Open Graph

Crear una API en Next.js para la generación de imágenes Open Graph puede parecer una tarea complicada, pero en realidad es muy sencillo gracias al paquete @vercel/og. Este paquete nos permite generar imágenes Open Graph dinámicamente en nuestras aplicaciones Next.js, lo que significa que podemos personalizar la imagen en tiempo real en función de los datos de nuestra página.

Para comenzar, debemos instalar el paquete `@vercel/og` en nuestro proyecto Next.js. Podemos hacerlo utilizando `npm o yarn`, dependiendo de nuestra preferencia:

    npm install @vercel/og
    yarn add @vercel/og

Una vez instalado el paquete, podemos crear una nueva ruta en nuestro proyecto que se encargue de generar la imagen Open Graph. Para ello, debemos crear un archivo llamado `api/og.js` en nuestro proyecto. En este archivo, agregaremos el siguiente código usando Tailwind CSS para darle estilo a la imagen:

``` jsx

import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export default function ogImage (req) {
  try {
    const { searchParams } = new URL(req.url)

     // Verifica si el parámetro title y description existe en la URL
    const hasTitle = searchParams.has('title')
    const hasDescription = searchParams.has('description')

    // Cambiar por el titulo de tu pagina en caso de no enviar el parámetro
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Titulo de la imagen por defecto'
    // Cambiar por la descripción de tu pagina en caso de no enviar el parámetro
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 200)
      : 'Descripción de la imagen por defecto'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('${HOST}/imagenes/og.jpg')`, // Cambiar por la imagen de fondo que quieras utilizar
            backgroundSize: 'cover'
          }} // También puedes utilizar un color de fondo en vez de una imagen
        >
          <div
            tw='flex h-[627px] w-[1200px] max-w-full px-12 pb-16 items-center justify-between'
          >
            <div tw='flex flex-col w-9/12 py-12 items-center p-8'>
              <h2
                tw='text-5xl font-bold tracking-tight text-white text-left'
                style={{ fontWeight: 600 }}
                >
                {title}
              </h2>
              <h3 tw='text-white text-left text-2xl mt-6 '>
                {description}
              </h3>
            </div>
            <div tw='mt-8 flex flex-col w-3/12 items-center'>
              {/* Cambiar por la imagen de perfil que quieras utilizar
                puedes usar una imagen de perfil de redes sociales o una imagen de tu logo
                La URL de la imagen puedes obtenerla desde tu proyecto de Next.js o desde un CDN
              */}
              <img tw='w-40 h-40' src={`${HOST}/imagenes/profile-pic.png`} alt='Texto ALT' />
              <img tw='w-80' src={`${HOST}/imagenes/logo-white.png`} alt='Texto ALT' />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200, // Este es el ancho de la imagen cual debe ser de 1200px porque es el tamaño recomendado
        height: 627
      }
    )
  } catch (e) {
    console.error(`Error: ${e.message}`)
    return new Response('Failed to generare the OG Image', { status: 500 })
  }
}


```

También puedes usar estilos CSS en vez de Tailwind, aquí te dejo un ejemplo de cómo usar estilos CSS en vez de Tailwind:

``` jsx
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    // Verifica si el parámetro title y description existe en la URL
    const hasTitle = searchParams.has('title')
    const hasDescription = searchParams.has('description')

    // Cambiar por el titulo de tu pagina en caso de no enviar el parámetro
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Titulo de la imagen por defecto'
    // Cambiar por la descripción de tu pagina en caso de no enviar el parámetro
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 200)
      : 'Descripción de la imagen por defecto'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center'
            }}
          >
            <img
              alt="Logo"
              height={200}
              src={`${HOST}/imagenes/logo-white.png`} // https://cdn.example.com/logo.png
              style={{ margin: '0 30px' }}
              width={232}
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      },
    );
  } catch (e) {
    console.error(`Error: ${e.message}`)
    return new Response('Failed to generare the OG Image', { status: 500 })
  }
}

  ```

### ¿Cómo usar la API?

En este código, estamos utilizando la función `og` de @vercel/og para generar la imagen Open Graph. Esta función recibe como argumentos dos parámetros de la `URL`:  `title` y `description`. Estos parámetros son los datos que queremos que aparezcan en la imagen Open Graph.

En la ruta `api/og.js`, estamos utilizando la API de Next.js para recibir estos parámetros desde la URL. Por ejemplo, si queremos generar una imagen Open Graph con un título de "Mi blog" y una descripción de "Este es mi blog personal", podemos hacer una solicitud a la siguiente URL:

    http://localhost:3000/api/og?title=Mi blog&description=Este es mi blog personal

Esta imagen la podemos usar en la meta `og:image` sin ningún problema ya que los crawlers de las redes sociales generarán la imagen y la tomarán para usarlas en el snippet de la publicación.

La respuesta a esta solicitud será la imagen Open Graph generada dinámicamente con los datos que proporcionamos.

En resumen, crear una API en Next.js para la generación de imágenes Open Graph es una tarea muy sencilla gracias al paquete @vercel/og. Este paquete nos permite generar imágenes dinámicamente en función de los datos de nuestra página, lo que significa que podemos personalizar la imagen en tiempo real.

Para hacer uso de este paquete, debemos instalarlo en nuestro proyecto y crear una nueva ruta en la que utilizaremos la función og para generar la imagen. En esta ruta, podemos recibir los datos que queremos que aparezcan en la imagen a través de la URL, y luego enviar la imagen como respuesta.

Este es un ejemplo de cómo crear una API para la generación de imágenes Open Graph en Next.js, pero hay muchas otras posibilidades y aplicaciones que podemos darle a este paquete. Con un poco de creatividad, podemos hacer uso de esta herramienta para mejorar la experiencia de usuario en nuestra aplicación.

Si te gustó este artículo, no dudes seguirme en las redes sociales para estar al tanto de las últimas actualizaciones, noticias y tutoriales relacionados con el desarrollo web. ¡Te espero!