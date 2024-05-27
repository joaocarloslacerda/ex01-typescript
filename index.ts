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

//string
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
console.log("----------String----------")
console.log(concatenaNome(user))

//number
const valueOne: number = 15.00;
const valueTwo: number = 5;

function multiplyValues(valueOne: number, valueTwo: number): Number{

    return valueOne*valueTwo
};
console.log("----------Number----------")
console.log(multiplyValues(valueOne, valueTwo))

//Array + reutilização de interface
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

console.log("----------Array----------")
console.log(findUser(users))


//Boolean
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

    console.log(productDonation)
    productDonation == true || false ? (productDonation = productDonation) : (arrayStock = stock.slice())

    for(let element of stock){
        if(element.donation === productDonation){
            arrayStock.push(element)
        }
    }
    
    return arrayStock;
}
console.log("----------Boolean----------")
console.log(getProduct(stock, false))
console.log("sem false")
console.log(getProduct(stock))



//Type para tipos únicos

//Reutilização das interfaces/types

//Faça condicionais com if, ternário com “condição ? true : false” e true || false