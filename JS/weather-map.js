/**
 * Created by renecortez on 4/27/17.
 */
$(document).ready(function(){
    'use strict';
    //declare variables
    var lat = 29.4241;
    var lon = -98.4636;
    var mapOptions = {
        zoom: 5,
        center: {
            lat: lat,
            lng: lon
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Render the map
    var map = new google.maps.Map(document.getElementById("map-display"), mapOptions);
    //draggable marker
    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lon
        },
        map: map,
        draggable: true
    });

    // Function to convert output to title case
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    function getWeather(lat, lon) {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "55aec6780da8e9b516e2937ae17b58af",
            lat: lat,
            lon: lon,
            units: "imperial",
            cnt: 3
        }).done(function (data) {
            console.log(data);
            data.list.forEach(function (element, index) {
//            console.log(element);

                var content = "";

                content += '<span id="temp">' + parseInt(element.temp.max) + '&deg;' + '/' + parseInt(element.temp.min) + '&deg;</span>';
                content += '<br><img src="http://openweathermap.org/img/w/' + element.weather[0].icon + '.png">';
                content += '<br><span>Clouds:</span>' + ' ' + titleCase(element.weather[0].description);
                content += '<br><span>Humidity:</span>' + ' ' + element.humidity + '%';
                content += '<br><span>Wind:</span>' + ' ' + element.speed + ' ' + 'mph/' + element.deg + '&deg;';
                content += '<br><span>Pressure:</span>' + ' ' + element.pressure;

                $('#day' + index).html(content);

            });
            var cityName = data.city.name;
            $('#cityName').text(cityName);
        });
    }
    marker.addListener('dragend', function(event) {
        lat = event.latLng.lat();
        lon = event.latLng.lng();
        mapOptions.center.lng = lon;
        mapOptions.center.lat = lat;
        getWeather(lat, lon);
    });

    getWeather(lat, lon);

});