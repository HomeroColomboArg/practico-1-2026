/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO cambiar a type: COMPLETO ✅
export type Materia = {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad. COMPLETO ✅
    private edad: number = 0;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        if (legajo <= 0) {
            throw new Error("Legajo inválido");
        }
        if (!nombre || !apellido){
            throw new Error("Nombre y apellido son obligatorios");
        }
        if (!email) {
            throw new Error("Email es obligatorio");
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.setEdad(edad); 
        this.email = email;
        // TODO (Ejercicio 8): asignar los atributos recibidos. ✅
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }

    esMayorDeEdad(): boolean {
        return this.edad >=18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        // TODO: debe impedir edades inválidas.
        // edad < 0   -> throw new Error(...)
        // edad > 120 -> throw new Error(...)
        // COMPLETO ✅
        if (edad < 0 ||  edad> 120){
            throw new Error("Edad inválida");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        // TODO COMPLETO ✅
        this.materias.push(materia);
    }

    quitarMateria(codigo: number): Materia | undefined {
        // TODO: quitar la materia con ese código y devolverla.
        // Si no está inscripto en ninguna con ese código, devolver undefined. COMPLETO ✅
        let respuesta;
        if (this.estaInscripto(codigo)){
            // Busco la materia con ese codigo y la guardo en la variable materia
            const materia = this.materias.find(m => m.codigo === codigo);
            if (materia) {
                this.materias = this.materias.filter(m => m.codigo !== codigo);
                console.log("Se eliminó la materia " + materia.nombre + " con código: " + codigo);
                respuesta = materia;
            }    
        }
        else {
            respuesta = undefined;
        }
        return respuesta;
    }

    estaInscripto(codigo: number): boolean {
        // TODO COMPLETO ✅
        let inscripto = this.materias.some(materia => materia.codigo === codigo);
        return inscripto;
        
    }

    cantidadMaterias(): number {
        // TODO COMPLETO ✅
        return this.materias.length;
    }

    getMaterias(): Materia[] {
        // TODO: devolver las materias sin exponer el arreglo interno
        // (devolver una copia, no la referencia original). COMPLETO✅
        return this.materias.slice();
    }
}
