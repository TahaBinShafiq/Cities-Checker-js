function citiesChecker () {
    var cities = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
        "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
        "Islamabad", "Sialkot", "Bahawalpur", "Sukkur",
        "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
        "Mirpur Khas", "Chiniot", "Okara"];
    
    var citiesName = document.getElementById('city')
    for(var i = 0; i <= cities.length; i++){
        if(cities [i] === 'Islamabad'){
         citiesName.innerHTML = '"Islamabad is the <br> cleanest city of <br> Pakitan!"'
        }
    }
    }
    var userBtn = document.getElementById('btn');
    userBtn.addEventListener('click' , citiesChecker)
    
