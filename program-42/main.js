function createCar(manufacturer, modelName, ...options) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Process optional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        if (options[i] && options[i + 1]) {
            car[options[i]] = options[i + 1];
        }
    }

    return car;
}

// Call the function with required and optional information
var carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the returned object
console.log("Car Information:", carInfo);
