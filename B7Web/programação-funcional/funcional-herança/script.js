const defaultUser  = {
    name:"",
    email:"",
    level: 1,
}

let user1 = {
    ...defaultUser,
    name:"Iann Lucas",
    email:"contact.iannlucas@gmail.com",
}



let adm1 = {
    ...defaultUser,
    name: "Gleyson Campos",
    level: "Máximo",
    email: "loremipsolon@idk.com"

}

console.log(adm1)