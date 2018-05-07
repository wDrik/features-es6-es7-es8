// ----> Arrow function

// $.ajax({ url: 'http://...' })
//     .then(function(response){
        
//     });

$.ajax({ url: 'http://...' })
    .then((response) => {

    });

api.get('/users').then(response => {
    //
});

api.get('/users').then(response => myFunction(response));


// -----------------------------
class User {
    name = 'Iorgen';
    company = 'IWSInformatica';

    mostrarNome = () => {
        console.log(this.name);
        console.log(this.company);
    }
}


// -----------------------------
const array = [1, 2, 3, 4, 5, 6];

// array.forEach(function(item, index) {
//     array[index] = item * 2;
// });

array = array.map((item) => {
    return item * 2;
}); 

array = array
    .map(item => item * 2)
    .filter(item => item < 5); 


// -----------------------------
const returnJSX = (x) => (
    <div class="container">
        <h1>Hello World!</h1>
    </div>
);

const returnJSX = (x) => ({ a: 2, b: 3 }); 


//-----> Structuring

const address = {
    street: 'Fake',
    number: 123,
    city_state: {
        city: 'SP',
        state: 'São Paulo'
    } 
}

// const street = address.street;
// const number = address.number;
// const city = address.city;
// const state = address.state;

const { 
    street, 
    number, 
    city_state: { 
        city,
        state
    } 
} = address;

const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);


//-----> Rest and Spread operator ES6

const array = [1, 2, 3, 4, 5];
const [a, b, ...c] = array;
console.log(c); // [3, 4, 5]

const css = {
    fontSize: 12,
    color: '#fff'
}

const title = {
    fontWeight: 'bold',
    ...css, // fontSize: 12, color: '#fff'
    fontSize: 20
}

// -----------------------------
function soma(a, b, ...params) {
    a = 1;
    b = 2;
    params = [3, 4];

    return Math.sum(params);
}

soma(1, 2, 3, 4);

// -----------------------------
const user = {
    name: 'Iorgen',
    company: 'IWSInformatica'
}

// function showCompanyName(user) {
//     console.log('name: ' + user.name + ' company: ' + user.company);
// }

function showCompanyName({ name, company }) {
    console.log('name: ' + name + ' company: ' + company);
}


// -----------------------------
const id = 1;
const name = 'Iorgen';

const user = {
    id,
    name
}

console.log(`My name is ${name.toUpperCase()}`);

//-----> Async Await

// api.get('/users')
//     .then(response => {
//         api.get('/users/address')
//             .then(respAddres => {
//                 //
//             })
//             .catch(err => {})
//     })
//     .catch(err => { })
    

const searchUserAndAddress = async () => {
    try {
        const user = await api.get('/users');
        const address = await api.get('/users/address');
    } catch(err) {
        console.log(err);
    }
}
