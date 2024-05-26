//string
interface UserDomain {
    firstname: string;
    surname: string;
    password: string;
    status: boolean;
};

const user: UserDomain = {
    firstname: "João",
    surname: "Lacerda",
    password: "teste123",
    status: true,
};

function concatenaNome(user: UserDomain): string{

    return `User: ${user.firstname} ${user.surname} \nPassword: ${user.password} \nStatus: ${user.status}`
};
console.log("--------------------")
console.log(concatenaNome(user))

//number
const valueOne: number = 15.00;
const valueTwo: number = 5;

function multiplyValues(valueOne: number, valueTwo: number): Number{

    return valueOne*valueTwo
};
console.log("--------------------")
console.log(multiplyValues(valueOne, valueTwo))

//Array
const users: UserDomain[] = [
    {
        firstname: "João",
        surname: "Lacerda",
        password: "teste123",
        status: true,
    },
    {
        firstname: "José",
        surname: "Augusto",
        password: "123teste",
        status: false,
    },
    {
        firstname: "Eduardo",
        surname: "Quadro",
        password: "123321",
        status: true,
    }
]
function findUser(users: UserDomain[]):UserDomain[]{
    
    const arrayFilter: UserDomain[] = users.filter((user: UserDomain) => user.status == true)

    return arrayFilter
}

console.log("--------------------")
console.log(findUser(users))


//Boolean

//Interface para objetos

//Type para tipos únicos

//Reutilização das interfaces/types

//Faça condicionais com if, ternário com “condição ? true : false” e true || false