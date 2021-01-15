export class Persona {

 public Nombre: string
 public Apellidos: string
 public Edad: number
 public Sexo: string

constructor(Nombre:string, Apellidos:string, Edad:number,Sexo:string){
     this.Nombre=Nombre
     this.Apellidos=Apellidos
     this.Edad=Edad
     this.Sexo=Sexo
     console.log(this.Nombre,this.Apellidos,this.Edad,this.Sexo)
    }
}
