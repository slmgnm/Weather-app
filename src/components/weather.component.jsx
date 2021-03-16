const Weather = () => {
  return (
    <div className="cotainer">
      <div className="cards">
        <h1>London</h1>
        <h5 className="py-4">
          <i className=" wi wi-day-sunny display-1"></i>
        </h5>
        <h1 className="py-2"> 25&deg;</h1>

        {minMaxTemp(24, 19)}
        <h4 className="py-4">Slow rain</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}
export default Weather;
