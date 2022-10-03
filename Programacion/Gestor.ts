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

   getNombre() {
    return "datos" + this.Nombre;}

   getApellido() {
      return "datos" + this.Apellido;}
    
   getAuto() {
       return "datos" + this.Auto;}
    
   getModelo() {
         return "datos" + this.Modelo;}
    
   getPatente() {
           return "datos" + this.Patente;}
    
   getChasis() {
             return "datos" + this.Chasis;}
    
   getMotor() {
               return "datos" + this.Motor;}
    
   getDeudaPatente() {
                  return "datos" + this.DeudaPatente;}
    
   getMultas() {
                    return "datos" + this.Multas;}
    


    setNombre(Nombre:string){
    this.Nombre = Nombre;}

    setApellido(Apellido:string){
      this.Apellido = Apellido;}

    setAuto(Auto:string){
        this.Auto = Auto;}

    setModelo(Modelo:any){
          this.Modelo = Modelo;}

    setPatente(Patente:any){
            this.Patente = Patente;}

    setChasis(Chasis:any){
              this.Chasis = Chasis;}

    setMotor(Motor:any){
                this.Motor = Motor;}

    setDeudaPatente(DeudaPatente:boolean){
                  this.DeudaPatente = DeudaPatente;}

    setMultas(Multas:boolean){
                    this.Multas = Multas;}
  


}


let Misubishi: Registro = new Registro(`pablo`, `lamenza`,`todoterreno`,`2010`,`123abc`,`sfhsfhsfh443`,`asdfasdh74543`,false,false,);


console.log(Misubishi.mostrarInfo());

// ZONA DE MODIFACIONES DE DATOS

// console.log(Misubishi.getNombre());
// // console.log(Misubishi.setNombre(`hola`));

// console.log(Misubishi.getApellido());
// // console.log(Misubishi.setApellido(`hola`));

// console.log(Misubishi.getAuto());
// console.log(Misubishi.setAuto(`hola`));

// console.log(Misubishi.getModelo());
// console.log(Misubishi.setModelo(`hola`));

// console.log(Misubishi.getPatente());
// console.log(Misubishi.setPatente(`hola`));

// console.log(Misubishi.getChasis());
// console.log(Misubishi.setChasis(`hola`))

// console.log(Misubishi.getMotor());
// console.log(Misubishi.setModelo(`hola`))

// console.log(Misubishi.getDeudaPatente());
// console.log(Misubishi.setDeudaPatente(true))

// console.log(Misubishi.getMultas());
// console.log(Misubishi.setMultas(true))

// console.log(Misubishi);