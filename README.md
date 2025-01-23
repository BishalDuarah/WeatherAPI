# WeatherAPI
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <style>
    body{
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #b1dafd;
      background: url(pink.jpg);
    }
    .weather-container {
      text-align: center;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      width: 300px;
    }
    .weather-container h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .weather-container input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .weather-container button {
      width: 100%;
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
    .weather-container button:hover {
      background-color: #0056b3;
    }
    .weather-details {
      margin-top: 20px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="weather-container">
    <h1>Weather App</h1>
    <input type="text" id="location" placeholder="Enter location">
    <button onclick="getWeather()">Get Weather</button>
    <div id="weather-details" class="weather-details"></div>
  </div>

  <script>
    async function getWeather() {
      const location = document.getElementById('location').value;
      const apiKey = 'c12e9ac8f16049ff9f514238252301';
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Location not found');
        }
        const data = await response.json();

        const { temp_c, condition } = data.current;
        const { name, country } = data.location;

        document.getElementById('weather-details').innerHTML = `
          <p><strong>Location:</strong> ${name}, ${country}</p>
          <p><strong>Temperature:</strong> ${temp_c}°C</p>
          <p><strong>Condition:</strong> ${condition.text}</p>
        `;
      } catch (error) {
        document.getElementById('weather-details').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      }
    }
  </script>
</body>
</html>
