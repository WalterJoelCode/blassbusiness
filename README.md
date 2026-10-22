# BlassDesing

Sitio web de **BlassDesing**, iniciativa de Blass Business para crear invitaciones digitales personalizadas e interactivas. El proyecto está desarrollado con Astro y se publica como sitio estático en GitHub Pages.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

El resultado se crea en `dist/`. El despliegue en GitHub Pages se realiza mediante [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) al enviar cambios a la rama `main`.

## Estructura relevante

- `src/pages/index.astro`: página principal.
- `src/data/`: textos, preguntas, tipos de invitación y proceso.
- `src/styles/`: identidad visual, componentes, secciones y diseño adaptable.
- `src/config/site.ts`: datos de marca, enlaces y configuración SEO.
- `visual.design`: guía de identidad gráfica del proyecto.

## Derechos de autor y uso de marca

Copyright © 2026 Blass Business / BlassDesing. Todos los derechos reservados sobre la identidad y los materiales de la marca, salvo donde se indique expresamente lo contrario.

La denominación **Blass Business**, **BlassDesing**, sus logotipos, identidad visual, textos comerciales, diseños de invitaciones, composiciones, recursos gráficos y contenido de este sitio no pueden copiarse, reproducirse, modificarse, distribuirse ni utilizarse con fines comerciales o publicitarios sin autorización previa y escrita de Blass Business.

Las invitaciones, piezas gráficas y sitios hechos para clientes se rigen por el alcance y las condiciones acordadas para cada encargo. La cesión de archivos editables, entregables fuente, licencias de uso o derechos adicionales solo procede cuando conste expresamente en ese acuerdo.

Las fotografías, tipografías, iconos, bibliotecas u otros recursos de terceros conservan las licencias y derechos de sus respectivos titulares. Quien aporte material para un encargo declara contar con los permisos necesarios para su uso.

## Código del sitio

La base técnica de este repositorio deriva de **SWP Freelancer Portfolio**. El código distribuido en este repositorio se mantiene bajo la licencia [MIT](LICENSE), que aplica únicamente al software y no concede derechos sobre las marcas, logotipos, diseños personalizados ni contenidos de Blass Business / BlassDesing descritos arriba.

Al reutilizar el código, sustituye la identidad de marca y verifica las licencias de cualquier recurso que añadas.

## Contacto técnico

Sitio web desarrollado por [WalterJoelCode](mailto:waltercastil2019@outlook.com).
