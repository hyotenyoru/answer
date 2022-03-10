//1~3
var NumberByFactory=[];
var FactoryByNumber=[];
var FactoryByNumberArray=[];
var FactoryByNumbercheck=[];
var employeeslistbyalphabetical=[];


const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 

//1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
factories.forEach(Output => {
    NumberByFactory.push({name:Output.name,count:Output.employees.length})
});
var NumberByFactoryOutput=JSON.stringify(NumberByFactory);
console.log("1. Count Employees Number by Factory=>"+NumberByFactoryOutput+"\n");


//2. Count Factories Number by Employee 
factories.forEach(Output=>{
    //輸出所有字串
    employees=Output.employees;
    if (employees!=[]) {
        employees.forEach(input=>{
            FactoryByNumberArray.push(input);
        });
    }
});
var FactoryByNumberArrayOutput=JSON.stringify(FactoryByNumberArray);
//console.log(FactoryByNumberArrayOutput);

FactoryByNumberArray.forEach(input=>{
    var name=input;
    var count=0;
    var key=1;
    FactoryByNumbercheck.forEach(check=>{
        if (input==check)
            key=0;
    });
    if(key){
        FactoryByNumberArray.forEach(Output=>{
            if (name==Output) {
                count++;
            }
        })
        FactoryByNumber.push({employee:name,count:count});
        FactoryByNumbercheck.push(name);
    }
})
var FactoryByNumberOutput=JSON.stringify(FactoryByNumber);
console.log("2. Count Factories Number by Employee=>"+FactoryByNumberOutput+"\n");

//3. Order employees list by alphabetical order
factories.forEach(Output=>{
    var index=Output.employees.sort();
    employeeslistbyalphabetical.push({name:Output.name,employees:index});
});
var employeeslistbyalphabeticalOutput=JSON.stringify(employeeslistbyalphabetical);
console.log("3. Order employees list by alphabetical order=>"+employeeslistbyalphabeticalOutput+"\n");




