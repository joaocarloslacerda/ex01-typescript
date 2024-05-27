//interface para objetos
interface UserDomain {
    firstname: string;
    surname: string;
    password: string;
    status: boolean;
};

interface Product {
    name: string;
    weight: number;
    expirationDate: Date;
    price?: number;
    donation: boolean;
}

//Type para tipos únicos
type Value = number;

//string
console.log("----------String----------")
const user: UserDomain = {
    firstname: "joão",
    surname: "lacerda",
    password: "teste123",
    status: true,
};

function concatenaNome(user: UserDomain): string{

    return `User: ${user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase()
                  } ${user.surname.charAt(0).toUpperCase() + user.surname.slice(1).toLowerCase()                        
            } \nPassword: ${user.password} \nStatus: ${user.status}`
};
console.log(concatenaNome(user))

//number
console.log("----------Number----------")
const valueOne: Value = 15.00;
const valueTwo: Value = 5;

function multiplyValues(valueOne: Value, valueTwo: Value): Value{

    return valueOne*valueTwo
};
console.log(multiplyValues(valueOne, valueTwo))

//Array + reutilização de interface
console.log("----------Array----------")
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
console.log(findUser(users))


//Boolean
console.log("----------Boolean----------")
const stock: Product[] = [
    {
        name: "Água",
        weight: 500,
        expirationDate: new Date('2024-12-12'),
        donation: true,
    },
    {
        name: "Vinho",
        weight: 1,
        expirationDate: new Date('2024-10-12'),
        price: 5.0,
        donation: false,
    },
    {
        name: "Arroz",
        weight: 5,
        expirationDate: new Date('2024-09-12'),
        donation: true,
    }
];

function getProduct(stock: Product[], productDonation?: boolean): Product[]{
    
    let arrayStock: Product[] = []

    for(let element of stock){
        if(element.donation === productDonation){
            arrayStock.push(element)
        }
    }
    return arrayStock;
}
console.log(getProduct(stock, true))

//ternário com “condição ? true : false”
const firstValue: Value = 13;
const secondValue: Value = 9;
console.log("----------ternário com “condição ? true : false”----------")
function exercCalculatorOne(firstValue: Value, secondValue: Value, operator?:string): Value{

    let operation: string = '';
    operator ? (operation = operator) : (operation = "+")

    switch (operation) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        default:
            throw new Error("Operação inválida!")
    }
}
console.log("Com operador no parâmetro")
console.log(exercCalculatorOne(firstValue, secondValue, "-"))
console.log("Sem operador no parâmetro")
console.log(exercCalculatorOne(firstValue, secondValue))

//ternário com true || false
console.log("----------ternário com true || false----------")
function exercCalculatorTwo(firstValue: Value, secondValue: Value, operator?:string): Value{

    const operation = operator || "*"

    switch (operation) {
        case '*':
            return firstValue * secondValue;
        case '/':
            return firstValue / secondValue;
        default:
            throw new Error("Operação inválida!")
    }
}
console.log("Com operador no parâmetro")
console.log(exercCalculatorTwo(firstValue, secondValue, "/"))
console.log("Sem operador no parâmetro")
console.log(exercCalculatorTwo(firstValue, secondValue))