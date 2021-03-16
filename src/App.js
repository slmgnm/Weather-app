import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/weather.component";
import "weather-icons/css/weather-icons.min.css";

const apiKey = "bc18c402b76c6b37c7349690ff712e79";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`,
    );
    const response = await api_call.json();
    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Weather />;
      </div>
    );
  }
}

export default App;
