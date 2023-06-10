const API_KEY = "28740c74920862425b53e7540ff03376";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=";

document.getElementById("search_button").addEventListener('click', function() {
  const areaInputField = document.getElementById('area');
  const area = areaInputField.value.trim();

  // 入力が空でないことを確認する
  if (area !== '') {
    const url = `${BASE_URL}${area}&appid=${API_KEY}`;

    // APIリクエストを実行する
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp - 273.15;  // ケルビンから摂氏に変換
        const weatherDescription = data.weather[0].description;

        // 天候情報を表示
        document.getElementById('city_name').textContent = `都市名: ${cityName}`;
        document.getElementById('temperature').textContent = `気温: ${temperature.toFixed(2)}℃`;
        document.getElementById('weather').textContent = `天候: ${weatherDescription}`;
      });

    // テキストフィールドをクリアする
    areaInputField.value = '';
  }
});
