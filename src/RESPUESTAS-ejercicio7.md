# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

interface permite Declaration Merging: si declaras dos interfaces con el mismo nombre, TypeScript las fusiona automáticamente. type no puede hacer esto, lo que causa error.

## ¿Qué permite hacer `type` que `interface` no?

type permite crear uniones (A | B), tuplas[string, boolean, Error], alias de tipos primitivos (como type Edad = number), y mapped types (tipos que se transforman basándose en otros tipos). interface está diseñada solo para objetos, no para estos casos.

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Sí, ambas se pueden extender. Con `interface` se usa la palabra clave `extends`. Mientras que con `type` se hace con el operador `&`.

```typescript
interface Alumno {
    legajo: number;
    nombre: string;
    edad: number;
}

interface AlumnoAvanzado extends Alumno {
    promedio: number;
    especialidad: string;
}

// -----------------------------------------------------------------------------
//                          Versión con `type`
// -----------------------------------------------------------------------------

type Alumno = {
    legajo: number;
    nombre: string;
};

type AlumnoAvanzado = Alumno & {
    promedio: number;
};
```

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Elegiría `interface` para representar una entidad del dominio como `Alumno`. 

Las razones son:

1. **Intención clara**: `interface` está diseñada específicamente para definir contratos y estructuras de objetos, lo que hace más evidente que se trata de una entidad de negocio.

2. **Semántica correcta**: Cuando alguien ve `interface Alumno`, inmediatamente entiende que es un objeto que debe cumplir con esa estructura. Con `type` no queda tan clara la intención.

3. **Declaration Merging**: Si en el futuro necesito extender la entidad `Alumno` en múltiples partes del código, `interface` permite fusionar automáticamente las declaraciones.

4. **Estándar en la comunidad**: En proyectos TypeScript profesionales, `interface` es el estándar para modelar entidades de dominio.

5. **Mejor para herencia**: `extends` es más clara y natural que `&` cuando se trata de relaciones entre entidades.
