# Landing Page - Siigo Aspel | Ejecutiva Comercial

## Descripción del proyecto

Landing page comercial para **Daniela Montoya**, ejecutiva comercial de **Siigo Aspel México**. Su objetivo es captar leads de empresarios y contadores interesados en soluciones contables y administrativas, ofreciendo asesoría personalizada y gratuita.

## Stack tecnológico

- **HTML5** - Estructura semántica (`index.html`)
- **CSS3** - Estilos con variables CSS, grid, flexbox y responsive (`style.css`)
- **JavaScript vanilla** - Interacciones sin dependencias (`main.js`)
- **Google Fonts** - Tipografía Inter (400, 500, 600, 700)
- **Web3Forms** - Envío de formulario de contacto (API key en el HTML)
- **No hay framework ni bundler** - Archivos estáticos listos para desplegar

## Estructura de archivos

```
SIIGO/
├── index.html              # Página principal
├── style.css               # Estilos globales
├── main.js                 # Lógica de interacciones
├── CNAME                   # Dominio personalizado para GitHub Pages
├── CLAUDE.md               # Este archivo
└── multimedia/
    └── img/
        ├── logo.jpeg       # Logo de Siigo Aspel (se muestra en hero)
        └── ejecutiva.jpeg  # Foto de Daniela Montoya (sección ejecutiva)
```

## Paleta de colores

| Variable            | Valor     | Uso                          |
|---------------------|-----------|------------------------------|
| `--white`           | `#ffffff` | Fondos principales           |
| `--blue-royal`      | `#1a3fc7` | CTAs, acentos, tabs activos  |
| `--blue-dark`       | `#0a1a4a` | Textos, header, footer       |
| `--blue-royal-hover`| `#1533a8` | Hover de botones primarios   |

## Secciones de la landing

### 1. Header (fijo)
- Logo en texto "Siigo Aspel" a la izquierda
- Navegación: Ejecutiva, Servicios, Qué hacemos, Clientes
- Botón CTA "Contáctanos" a la derecha
- Menú hamburguesa en móvil con animación de apertura/cierre

### 2. Hero
- Título: "Automatiza tu contabilidad y ventas en un solo sistema"
- Subtítulo descriptivo sobre soluciones integradas
- Dos CTAs: Ver Productos y Agendar Demo
- 3 métricas: 10+ productos, 100% cumplimiento fiscal, 24/7 soporte
- Imagen del logo a la derecha
- Fondo con gradiente sutil blanco → azul claro

### 3. Ejecutiva (`#ejecutiva`)
- Foto de Daniela Montoya con badge flotante "5+ Años de experiencia"
- Nombre, cargo y descripción profesional
- Recuadro destacado con check verde: asesoría personalizada sin costo
- CTAs: Agendar asesoría (WhatsApp) y Ver productos
- Fondo azul oscuro

### 4. Servicios (`#servicios`)
- Tabs/filtros por categoría (sin opción "Todos" para evitar saturación)
- Categorías: Administración, Facturación, Contabilidad, Nómina y RH, Punto de Venta, Tesorería, Manufactura, Complementos
- Al cargar muestra solo Administración por defecto
- Cada tarjeta tiene: icono SVG, tag de categoría, título, descripción, variantes (si aplica), botón "Me interesa" que redirige a WhatsApp con mensaje personalizado
- **Siigo Fiscal** destacado como "Recomendado" con diseño diferenciado (borde azul, badge, botón "Solicitar demo gratuita")
- En móvil: tabs en grid 2x4 (sin scroll lateral)

### 5. Videos (`#videos`)
- Carrusel horizontal con miniaturas de YouTube (no embebidos)
- 10 productos con video: Siigo Nube, ADM, SAE, Siigo Fiscal, COI, NOI, NOI Asistente, Facturación Nube, Aspel Facture, Aspel Caja
- Click abre YouTube en nueva pestaña
- Botón de play circular azul sobre cada miniatura

### 6. Qué hacemos (`#que-hacemos`)
- Texto introductorio sobre diagnóstico y recomendación personalizada
- 6 pasos numerados (01-06): Diagnóstico, Recomendación, Demo, Implementación, Capacitación, Soporte
- En desktop: grid de 3 columnas con tarjetas
- En móvil: acordeón colapsable (solo título visible, se expande al tocar)
- CTA: "Agendar diagnóstico gratuito" → WhatsApp
- Fondo azul oscuro

### 7. Clientes (`#clientes`)
- 3 testimonios ficticios con 5 estrellas, cita, nombre, cargo y empresa
- Roberto Aguilar (SAE + COI), Martha Valdés (Facturación Nube), Jorge López (NOI)
- En desktop: grid de 3 columnas
- En móvil: carrusel horizontal con snap (1 tarjeta visible a la vez)

### 8. Formulario de contacto (`#agendar`)
- Columna izquierda: título, descripción, 4 beneficios con checks
- Columna derecha: formulario con Web3Forms
- Campos: nombre, celular, correo, empresa, servicio (selector agrupado), observaciones
- Envío asíncrono con feedback de éxito/error sin recargar
- Protección anti-bot con campo honeypot

### 9. Footer
- 3 columnas: marca, navegación, datos de contacto de Daniela
- Celular: +52 1 55 9909 3539 (clickeable)
- Correo: daniela.montoya@siigo.com (clickeable)
- Copyright 2026

### 10. Botón flotante WhatsApp
- Siempre visible en esquina inferior derecha
- Redirige a WhatsApp con número +5215599093539
- Mensaje predefinido de saludo
- Efecto de escala al hover

## Funcionalidades JavaScript

- **Smooth scroll** para todos los anchor links
- **Menú hamburguesa** con toggle y cierre al seleccionar link
- **Filtro de servicios** por categoría (muestra/oculta tarjetas)
- **Acordeón móvil** en sección Qué hacemos (solo activo en viewport ≤768px)
- **Envío de formulario** via Web3Forms con fetch asíncrono

## Responsive

Breakpoint principal: `768px`. Comportamiento móvil:
- Header: hamburguesa con menú desplegable vertical
- Hero: una columna, imagen arriba
- Ejecutiva: una columna, foto arriba centrada
- Servicios: tabs en grid 2x4, tarjetas en 1 columna
- Videos: carrusel con tarjetas más pequeñas (180px)
- Qué hacemos: acordeón colapsable
- Clientes: carrusel horizontal con snap
- Formulario: una columna, campos apilados
- Footer: una columna centrada

## Despliegue

Archivos estáticos listos para GitHub Pages u otro hosting. El archivo `CNAME` ya existe para dominio personalizado. No requiere build ni instalación de dependencias.

## Tono cultural mexicano

La landing está orientada al mercado mexicano y refleja esto en múltiples puntos:
- **Hero:** Badge "Soluciones para empresas mexicanas", referencias a SAT y CFDI 4.0
- **Ejecutiva:** Menciones a CDMX, Monterrey, Guadalajara y "toda la República"
- **Servicios:** Subtítulo con cumplimiento fiscal mexicano (CFDI 4.0, SAT)
- **Qué hacemos:** Referencias al SAT en diagnóstico, implementación y soporte continuo
- **Clientes:** Empresas ubicadas en Monterrey (N.L.), CDMX y León (Gto.)
- **Formulario:** Placeholders con formato telefónico mexicano (+52) y referencia a e.firma/FIEL
- **Footer:** "Hecho con orgullo en México", tagline orientado a empresas mexicanas

## Datos de contacto de la ejecutiva

- **Nombre:** Daniela Montoya
- **Cargo:** Ejecutiva Comercial, Siigo Aspel
- **WhatsApp:** +52 1 55 9909 3539
- **Correo:** daniela.montoya@siigo.com
