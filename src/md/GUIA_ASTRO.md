# Guía para Migrar a Astro

Este proyecto está estructurado con patrones inspirados en Astro, facilitando una futura migración completa al framework Astro.

## Beneficios de Migrar a Astro

1. **Zero JS por defecto**: Astro envía HTML estático sin JavaScript innecesario
2. **Islas de interactividad**: Solo hidratar componentes que necesitan JavaScript
3. **Multi-framework**: Puedes usar React, Vue, Svelte, etc. en el mismo proyecto
4. **Mejor rendimiento**: Carga más rápida y mejor SEO
5. **Optimización de imágenes**: Procesamiento automático de imágenes

## Estructura Actual vs Astro

### Actual (React)
```
src/app/
├── App.tsx                 # Componente raíz
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── ...
```

### Futuro (Astro)
```
src/
├── pages/
│   └── index.astro         # Página principal
├── components/
│   ├── Header.astro        # Componente estático
│   ├── Hero.astro          # Componente estático
│   ├── ThemeToggle.tsx     # Componente React con client:load
│   ├── Contacto.tsx        # Componente React con client:load
│   └── Navigation.tsx      # Componente React con client:load
└── layouts/
    └── Layout.astro        # Layout base
```

## Pasos para Migrar a Astro

### 1. Instalar Astro

```bash
npm create astro@latest
# Elegir: Empty project
```

### 2. Instalar dependencias de React

```bash
npx astro add react
npx astro add tailwind
```

### 3. Configurar astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Usar nuestros estilos personalizados
    }),
  ],
});
```

### 4. Convertir Componentes

#### Componentes Estáticos (Astro)

**Hero.astro**
```astro
---
import heroBanner from '../assets/hero-banner.png';
---

<section id="inicio" class="relative min-h-[600px] flex items-center">
  <div 
    class="absolute inset-0 bg-cover bg-center"
    style={`background-image: url(${heroBanner.src})`}
  >
    <div class="absolute inset-0 bg-primary/70 dark:bg-primary/80"></div>
  </div>
  
  <div class="container mx-auto px-4 py-20 relative z-10">
    <div class="max-w-3xl text-white">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Desarrolla tu <span class="text-accent">máximo potencial</span>
      </h1>
      
      <h2 class="text-2xl md:text-3xl mb-6">
        Certifícate con validez oficial ante la Red CONOCER
      </h2>
      
      <p class="text-lg md:text-xl mb-8 text-white/90">
        Impulsa tu crecimiento profesional mediante estándares de competencia 
        reconocidos a nivel nacional.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4">
        <a 
          href="#estandares"
          class="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg shadow-lg"
        >
          Ver Estándares
        </a>
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-accent via-yellow-400 to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <a 
            href="#contacto"
            class="relative inline-flex items-center justify-center px-8 py-3 bg-white text-primary hover:bg-white/95 shadow-xl font-bold border-2 border-accent rounded-lg"
          >
            ✨ Contáctanos Ahora
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Componentes Interactivos (React)

**ThemeToggle.tsx** - Mantener como React
```tsx
// Usar client:load en Astro
<ThemeToggle client:load />
```

**Navigation.tsx** - Mantener como React
```tsx
// Usar client:load en Astro
<Navigation client:load />
```

**Contacto.tsx** - Mantener como React
```tsx
// Usar client:load en Astro
<Contacto client:load />
```

### 5. Crear Layout Principal

**src/layouts/Layout.astro**
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/index.css';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body class="min-h-screen bg-background">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### 6. Crear Página Principal

**src/pages/index.astro**
```astro
---

```

## Directivas de Cliente en Astro

- `client:load` - Hidrata inmediatamente al cargar la página
- `client:idle` - Hidrata cuando el navegador está inactivo
- `client:visible` - Hidrata cuando el componente es visible
- `client:media` - Hidrata basado en media query
- `client:only` - Solo renderiza en el cliente (útil para componentes específicos del navegador)

## Recomendaciones

### Componentes que deben ser `.astro`:
- Header (estático con Navigation interactiva)
- Hero (estático)
- QuienesSomos (estático)
- Servicio (estático)
- Estandares (estático)
- Cursos (estático)
- Footer (estático)

### Componentes que deben permanecer `.tsx`:
- ThemeToggle (maneja estado)
- Navigation (scroll smooth)
- Contacto (formulario con estado)

## Manejo de Imágenes en Astro

```astro
---
import { Image } from 'astro:assets';
import logoProformeLarge from '../assets/logo.png';
---

<Image 
  src={logoProformeLarge} 
  alt="PROFORME"
  width={200}
  height={50}
  format="webp"
/>
```

## Ventajas de la Arquitectura Actual

Ya estamos usando patrones similares a Astro:
- ✅ Componentes separados por responsabilidad
- ✅ Islas de interactividad identificadas
- ✅ Mínimo JavaScript en componentes de presentación
- ✅ Uso de Tailwind CSS
- ✅ Estructura modular y escalable

## Siguiente Paso

Cuando decidas migrar a Astro, la mayoría del código puede reutilizarse. Solo necesitarás:
1. Convertir componentes de presentación a `.astro`
2. Mantener componentes interactivos como `.tsx`
3. Configurar las directivas de cliente apropiadas
4. Ajustar imports de imágenes al sistema de Astro

La migración será más sencilla gracias a la arquitectura actual inspirada en Astro.
