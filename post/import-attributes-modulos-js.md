---
id: 7
title: "Import Attributes facilitará los módulos en JavaScript"
author:
    name: "Engelbert Vizcaya"
    url: "https://engeldelgado.com"
avatar: "/imagenes/profile-pic.png"
category: "JavaScript"
date: "26-08-2023"
bannerImage: "https://res.cloudinary.com/dxhsmq1pv/image/upload/v1693091462/engeldlgado/post/import-tc39.jpg"
excerpt: "Import Attributes es una propuesta de TC39 para mejorar el uso de módulos en JavaScript. Permite agregar metadata adicional en las declaraciones de importación."
readTime: "4 min"
tags:
    - JavaScript
    - ECMAScript
    - Import Attributes
    - Modulos
    - TC39
    - Propuestas
---




## La propuesta Import Attributes de TC39 para mejorar la importación de módulos en JavaScript

La importación de módulos es una parte fundamental de JavaScript moderno. Permite dividir el código en archivos separados y reutilizarlo fácilmente. Sin embargo, el sistema actual tiene limitaciones. La propuesta Import Attributes de TC39 busca resolverlas y hacer la importación de módulos más versátil.

### Qué son los Import Attributes

Los Import Attributes, anteriormente conocidos como Import Assertions, son una sintaxis inline para declaraciones de importación de módulos. Permiten pasar metadata adicional junto con el specifier del módulo.

La sintaxis se ve así:

```js
import json from "./foo.json" with { type: "json" };
```

### Por qué son necesarios

Actualmente, no hay una forma estandarizada de indicar el tipo de módulo que se está importando. Esto causa problemas de seguridad y limita la capacidad de importar nuevos tipos de módulos como JSON, HTML o CSS.

Los Import Attributes solucionan esto permitiendo declarar explícitamente el tipo en la importación. Así los motores JavaScript pueden validar que se trata del tipo correcto y prevenir ejecución de código no deseada.

### Sintaxis

Los Import Attributes usan una sintaxis clave-valor después de la palabra reservada `with`. Por ejemplo, para importar un módulo JSON:

```js
import json from "./foo.json" with { type: "json" };
```

También funcionan en re-exportaciones:

```js
export { foo } from './foo.js' with { type: "javascript" };
```

Y en importaciones dinámicas:

```js
import("./foo.json", { with: { type: "json" }});
```

### Integración en ambientes host

Los Import Attributes también están diseñados para integrarse con las distintas formas de cargar módulos en ambientes host como el navegador o Node.js.

Por ejemplo, en Workers:

```js
new Worker("./foo.wasm", { type: "module", with: { type: "webassembly" }});
```

Y potencialmente en HTML:

```html
<script src="./foo.json" type="module" withtype="json"></script>
```

### Estados del estándar

Actualmente la propuesta se encuentra en la etapa 3 del proceso de estandarización de TC39.

Fue implementada experimentalmente en Chrome, Node.js y Deno usando la sintaxis `assert`. Pero debido a incompatibilidades con el estándar web, regresó a etapa 2 y ahora ha vuelto a etapa 3 con cambios.

Se espera que pronto alcance la etapa 4 y se convierta en estándar para mejorar la experiencia de desarrollo con módulos en JavaScript.

### Conclusión

Los Import Attributes resolverán varios problemas prácticos con la importación actual de módulos en JavaScript. Darán más control y flexibilidad a los desarrolladores, permitiendo nuevos tipos de módulos y mejorando la seguridad.

La comunidad TC39 trabaja activamente para estandarizar esta función. Pronto podremos disfrutar de sus beneficios en todos los entornos JavaScript modernos.
