function object(){
//creating objects by literals

employeeDetails={name : 'karthick' , empId : 10453 ,salary:25000 };
console.log(employeeDetails.empId);
console.log(employeeDetails);

//instance of object

var emp=new Object();
emp.fname='sri';
console.log(emp);

//by using object constructor

function emp1(lname,age){
    this.lname=lname;
    this.age=age;
}
e=new emp1('kumar' , 22);
console.log(e.lname+e.age);

//methods in javascript objects to change value in a object

function empdetails(name , id , mobNumber , salary){
    this.name=name;
    this.id=id;
    this.mobNumber=mobNumber;
    this.salary=salary;

    this.changeMobNum=changeMobNum;
    function changeMobNum(othernum){
        this.mobNumber=othernum;
    }

    this.changeSalary=changeSalary;
    function changeSalary(otherSalary){
        this.salary=otherSalary;
    }
}
details= new empdetails('karthick' , 12043 , 9894400012 , 30000);
console.log(details);
details.changeMobNum(1234567890);
details.changeSalary(23000);
console.log(details);
console.log(delete details.id);
console.log(details);
}