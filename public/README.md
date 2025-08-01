# Carpeta Public - Assets Estáticos

Esta carpeta contiene todos los assets estáticos del proyecto que se sirven directamente desde la raíz del servidor.

## Estructura

```
public/
├── images/     # Imágenes del proyecto
├── icons/      # Iconos SVG, PNG, etc.
├── fonts/      # Fuentes personalizadas
└── README.md   # Este archivo
```

## Cómo usar los assets

### En desarrollo
Los archivos en esta carpeta están disponibles directamente desde la raíz del servidor. Por ejemplo:
- `public/images/logo.png` → accesible en `/images/logo.png`
- `public/icons/arrow.svg` → accesible en `/icons/arrow.svg`

### En producción (build)
Los archivos se copian tal como están a la carpeta `dist` durante el build.

## Convenciones de nomenclatura

- **Imágenes**: Usar nombres descriptivos en minúsculas con guiones (ej: `hero-banner.jpg`)
- **Iconos**: Usar nombres descriptivos (ej: `arrow-right.svg`, `menu-icon.png`)
- **Fuentes**: Usar nombres descriptivos (ej: `roboto-regular.woff2`)

## Tipos de archivos soportados

### Imágenes
- PNG, JPG, JPEG, SVG, GIF, WebP, ICO

### Fuentes
- WOFF, WOFF2, TTF, OTF, EOT

### Otros
- PDF, JSON, XML, TXT

## Optimización

- Comprime las imágenes antes de agregarlas
- Usa formatos modernos como WebP cuando sea posible
- Optimiza los SVG eliminando metadatos innecesarios
- Usa fuentes WOFF2 para mejor rendimiento 