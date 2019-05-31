window.onload = function() {    
    var apiKey = 'IoW8mwayMBJlIJ2HG9FlappM4DN/Bg2QzqIGv1IaUDgsbMtzvZMOkQ==';
    var apiUrl = 'https://api-weather-utar.azurewebsites.net/api/temperature/current';

    var setGreeting = function() {
        var dateNow = new Date();
        var hoursNow = dateNow.getHours();
    
        var greet;
    
        if (hoursNow < 12)
            greet = 'Good Morning';
        else if (hoursNow >= 12 && hoursNow <= 17)
            greet = 'Good Afternoon';
        else if (hoursNow >= 17 && hoursNow <= 24)
            greet = 'Good Evening';
    
        document.getElementById('greeting').innerHTML = '<b>' + greet + ' UTAR';
    }

    var getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

    var getCurrentTemperature = function() {
        const request = new Request(apiUrl + `?code=${apiKey}`, {method: 'GET'});        

        fetch(request)
        .then(resp => resp.json())
        .then(jsonResp => {
            document.getElementById('currentApiTemperature').innerHTML = `01/06: ${jsonResp[0]['temperature']}°`;            
        });
    }

    var getIoTTemperature = function(){
        setInterval(function() {
            var minTemperature = 35;
            var maxTemperature = 25;

            document.getElementById('currentIoTTemperature').innerHTML = 'IoT Temperature: ' + getRandomInt(minTemperature,maxTemperature) + '°';            
        }, 2000)
    }

    setGreeting();
    getCurrentTemperature();
    getIoTTemperature();
}