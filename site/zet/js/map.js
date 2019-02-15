    function initMap() {
        let coordinates = {lat: -6.109579, lng: 106.748476},

            map = new google.maps.Map(document.querySelector('.map'), {
                zoom: 17,
                center: coordinates
            });

             image = 'img/map-pin.png';
             marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: image
            });
    }