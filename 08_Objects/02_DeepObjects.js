const user = {
    name : "Harsh",
    address : {
        city : "Bhopal",
        pin : 462001,
        locations: {
            lat : 23.2599,
            lng : 77.4126,
        },
    },
};

let {lat,lng} = user.address.locations; // Destructuring of nested object
console.log(lat,lng);