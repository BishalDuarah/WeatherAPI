const form = document.getElementById('weather-form');
const locationInput = document.getElementById('location');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const location = locationInput.value.trim();
  if (!location) return;

  const apiKey = 'c12e9ac8f16049ff9f514238252301';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Location not found');
      return res.json();
    })
    .then(data => {
      cityName.textContent = data.location.name;
      temperature.textContent = data.current.temp_c;
      weatherResult.classList.remove('hidden');
    })
    .catch(err => {
      weatherResult.classList.add('hidden');
      alert('Could not find weather for that location.');
    });
});
