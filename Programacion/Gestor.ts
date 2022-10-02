class Registro{
    Nombre:string;
    Apellido:string;
    Auto:string;
    Modelo:any;
    Patente:any;
    Chasis:any;
    Motor:any; 
    DeudaPatente:boolean;
    Multas:boolean;

mostrarInfo(){
  console.log(`Data info de automotor:this.Nombre ${this.Nombre} , this.Apellido${this.Apellido} , this.Auto${this.Auto} , this.Modelo${this.Modelo} , this.Patente${this.Patente} , this.Chasis${this.Chasis} , this.Motor${this.Motor} , this.DeudaPatente${this.DeudaPatente} , This.Multas${this.Multas}`) ;

}

constructor(
  Nombre:string,
  Apellido:string,
  Auto:string,
  Modelo:any,
  Patente:any,
  Chasis:any,
  Motor:any,
  DeudaPatente:boolean,
  Multas:boolean,)
  {this.Nombre = Nombre
   this.Apellido = Apellido
   this.Auto = Auto
   this.Modelo = Modelo
   this.Patente = Patente
   this.Chasis = Chasis
   this.Motor = Motor
   this.DeudaPatente = DeudaPatente
   this.Multas = Multas}


}


let Misubishi: Registro = new Registro(`pablo`, `lamenza`,`todoterreno`,`2010`,`123abc`,`sfhsfhsfh443`,`asdfasdh74543`,`false`,`false`,);


console.log(Misubishi.mostrarInfo());