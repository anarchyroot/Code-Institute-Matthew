/**
 * Created by matthewaltomare on 04/05/2017.
 */
class Human {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor:string;

    constructor(_firstName: string, _lastName: string, _age: number, _eyeColor: string) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.eyeColor = _eyeColor;
    }
     getFullName(): string {
         return this.firstName + " " + this.lastName;
     }
}

var tim = new Human("Tim", "Burton", 62, "brown");
console.log(tim.getFullName());
