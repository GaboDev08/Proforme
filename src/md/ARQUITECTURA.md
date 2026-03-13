# Arquitectura del Proyecto PROFORME

## Estructura Inspirada en Astro

Este proyecto utiliza una arquitectura modular inspirada en el patrón de Astro framework, separando la lógica interactiva de los componentes de presentación.

### Principios de Diseño

1. **Componentes Estáticos**: La mayoría de los componentes son de presentación pura
2. **Islas de Interactividad**: Solo los componentes que requieren estado del cliente tienen interactividad
3. **Composición Modular**: Cada sección es un componente independiente

### Estructura de Componentes

```
src/app/
├── App.tsx                    # Layout principal (similar a Astro page)
├── components/
│   ├── Header.tsx            # Componente de presentación
│   ├── Navigation.tsx        # Componente de presentación con eventos
│   ├── ThemeToggle.tsx       # 🏝️ Isla de interactividad (manejo de estado)
│   ├── Hero.tsx              # Componente de presentación
│   ├── QuienesSomos.tsx      # Componente de presentación
│   ├── Servicio.tsx          # Componente de presentación
│   ├── Estandares.tsx        # Componente de presentación
│   ├── Cursos.tsx            # Componente de presentación
│   ├── Contacto.tsx          # 🏝️ Isla de interactividad (formulario)
│   └── Footer.tsx            # Componente de presentación
```

### Islas de Interactividad

#### ThemeToggle
- Maneja el estado del tema (claro/oscuro)
- Persiste preferencia en localStorage
- Aplica cambios al DOM

#### Contacto
- Maneja el estado del formulario
- Procesa envío de datos
- Interacción con WhatsApp

### Componentes de Presentación

Todos los demás componentes son puramente de presentación con funcionalidad mínima de navegación suave (scroll to section).

### Ventajas de Esta Arquitectura

1. **Performance**: Solo se carga JavaScript donde es necesario
2. **Mantenibilidad**: Separación clara de responsabilidades
3. **Escalabilidad**: Fácil añadir nuevas secciones
4. **SEO-Friendly**: Contenido mayormente estático

### Sistema de Temas

El tema utiliza CSS variables definidas en `/src/styles/theme.css`:

- **Modo Claro**: Azul institucional (#0f3d5c) + Dorado (#c49a4b)
- **Modo Oscuro**: Azul claro (#2c7eb8) + Dorado brillante (#d4a853)

### Imágenes

Todas las imágenes usan el esquema `figma:asset` para optimización:

- Logo PROFORME horizontal
- Logo Red CONOCER
- Banners y fondos de sección

### Navegación

Navegación suave mediante `scrollIntoView` con ID de secciones:
- `#inicio`
- `#quienes-somos`
- `#servicio`
- `#estandares`
- `#cursos`
- `#contacto`

### Mejoras Visuales

- **Botón de Contacto Hero**: Background animado con gradiente dorado pulsante
- **Botón WhatsApp**: Background verde con efecto glow
- **Transiciones**: Smooth en hover states
- **Responsive**: Diseño adaptable a todos los dispositivos
