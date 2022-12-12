class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

class Model extends Car{
    constructor(name,year,model){
    super(name,year);
    this.model=model;
}    
}
  const myCar = new Model("Ford", 2022,'newmodel');
  console.log(myCar.name + " " + myCar.year+" "+myCar.model);
 