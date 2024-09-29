const apiKey = '68a785c6a9c0cd5f033eda8ef53baadd';

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('ciudad').textContent = data.name || 'No disponible';
            document.getElementById('temperatura').textContent = data.main.temp || 'No disponible';
            document.getElementById('descripcion').textContent = data.weather[0].description || 'No disponible';
            alert(data);
        })
        .catch(error => {
            alert(error);
            document.getElementById('ciudad').textContent = 'No disponible';
            document.getElementById('temperatura').textContent = 'No disponible';
            document.getElementById('descripcion').textContent = 'No disponible';
    
        });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        }, () => {
            document.getElementById('ciudad').textContent = 'No disponible';
            document.getElementById('temperatura').textContent = 'No disponible';
            document.getElementById('descripcion').textContent = 'No disponible';
        });
    } else {
        document.getElementById('ciudad').textContent = 'No disponible';
        document.getElementById('temperatura').textContent = 'No disponible';
        document.getElementById('descripcion').textContent = 'No disponible';
    }
}

getLocation();