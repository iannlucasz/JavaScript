function createCar(name , model , age , version) {
    return {
        name,
        model,
        age,
        version,
        getFullName() {
            return `${this.name} ${this.model}`
        },
        
    }
}



const car1 = createCar("Nissan GTR", "Skyline R34" , 1994 , 'Brian Edition')
console.log(car1.getFullName())



