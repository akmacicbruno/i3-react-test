import "./style-about.css";
import { useEffect, useState } from "react";

function About() {
  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("./public/airport.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAirportData(data.airport))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <div className="container-about">
        <div>
          <h1 className="title">{airportData.name}</h1>
        </div>
        <div>
          <br />
        </div>
      </div>

      <div className="about">
        <div className="about__left">
          <p className="about__left-paragraph">{airportData.description}</p>
          <div className="about__left-cards">
            {airportData.features?.map((feature, index) => (
              <div key={index} className="about__left-cards-item">
                <img
                  className="about__left-cards-item-img"
                  src={feature.img}
                  alt="img"
                />
                <p className="about__left-cards-item-paragraph">
                  <strong>{feature.feature}</strong>: {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="about__right">
          <img
            className="about__right-img"
            src={airportData.imgUrl}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default About;
