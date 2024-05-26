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
}
console.log(concatenaNome(user))

//number

//Array

//Boolean

//Interface para objetos

//Type para tipos únicos

//Reutilização das interfaces/types

//Faça condicionais com if, ternário com “condição ? true : false” e true || false