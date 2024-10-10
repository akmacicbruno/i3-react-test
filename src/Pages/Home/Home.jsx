import "./style-home.css";
import { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel/Caurosel";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [airplanes, setAirplanes] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);

  useEffect(() => {
    fetch("/airplanes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAirplanes(data.airplanes))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 560);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="home-carousel">
          <Carousel airplanes={airplanes}></Carousel>
        </div>
      ) : (
        <div className="home-cards">
          {airplanes.map((airplane, index) => (
            <Card
              key={index}
              name={airplane.name}
              description={airplane.description}
              imageUrl={airplane.image_url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
