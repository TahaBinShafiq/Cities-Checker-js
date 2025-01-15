function citiesChecker () {
var cities = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
    "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
    "Islamabad", "Sialkot", "Bahawalpur", "Sukkur",
    "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
    "Mirpur Khas", "Chiniot", "Okara"];

    var userValue = document.getElementById('city').value;
    if (userValue === cities[9]){
        alert('Islamabad is the cleanest city of Pakistan!');
    }else if(userValue === cities[0]){
        alert('Karachi is the City of Light!')
    }else{alert('This City is not Found')}

}

var userBtn = document.getElementById('btn');
userBtn.addEventListener('click' , citiesChecker)

