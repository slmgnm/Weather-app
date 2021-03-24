import React from "react";

const Weather = (props) => {
  return (
    // <div
    //   className={
    //     typeof props.current_Temp != "undefined"
    //       ? props.current_Temp > 10
    //         ? "App warm"
    //         : "App"
    //       : "App"
    //   }>
      <div className="container text-light">
        <div className="cards pt-4">
          <h1>{props.city}</h1>
          {typeof props.city != "undefined" ? (
            <div className="date">{dateBuilder(new Date())}</div>
          ) : (
            ""
          )}
          <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`} />
          </h5>
          {props.current_Temp ? (
            <h1 className="py-2">{props.current_Temp}&deg;</h1>
          ) : null}

          {/**show max & min temp */}
          {minmaxTemp(props.max_Temp, props.min_Temp)}

          <h4 className="py-3">{props.description}</h4>
        </div>
      </div>
    // </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default Weather;
