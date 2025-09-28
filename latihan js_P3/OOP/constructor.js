function person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;

    this.greet = function(){
        return 'Hello, My name is jang ${this.name}';
    };
}

let person1 = new person("jang", 20, "Depok");
let person2 = new person("Bey", 18, "Depok");

console.log(person1.greet);
console.log(person2);