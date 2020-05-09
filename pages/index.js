import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";
import "./index.css";
import "./map.css";
import Linegraph from "../components/linegraph";
import Countries from "../components/countries";
import Deaths from "../components/deaths";
import Recovered from "../components/recovered";

// Map uses "window", so it cannot be server side rendered
const Map = dynamic(() => import("../components/map"), { ssr: false });

const Home = () => {
  const [data, setData] = React.useState({});
  const [coords, setCoords] = React.useState({});

  React.useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const geolocate = (country) => {
    axios
      .get(
        `https://nominatim.openstreetmap.org/?country=${country}&format=json`
      )
      .then((response) => {
        setCoords({ lat: response.data[0].lat, lon: response.data[0].lon });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Coronavirus COVID-19 (2019-nCoV)</title>
        <link rel="icon" href="/favicon2.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <header className="bg gray">
        <h3>COVID-19 Dashboard</h3>
      </header>
      <div className="content-container">
        <div className="grid-container">
          <div className="left-upper bg flex-column-center justify-start">
            <h5 className="gray">Total Confirmed:</h5>
            <h1 className="red">
              {data &&
                data.Global &&
                data.Global.TotalConfirmed.toLocaleString()}
            </h1>
          </div>
          <div className="left-middle bg scroll">
            {data && data.Countries && (
              <Countries data={data.Countries} geolocate={geolocate} />
            )}
          </div>
          <div className="left-lower bg flex-column-center justify-center">
            <p className="attribution gray">
              Data Source:{" "}
              <a href="https://covid19api.com/" target="_blank">
                https://covid19api.com/
              </a>
            </p>
            <p className="attribution gray">
              Last Updated: {new Date(data.Date).toLocaleString()}
            </p>
          </div>
          <div className="map-container bg">
            <Map coords={coords} />
          </div>
          <div className="right-upper bg scroll flex-column-center justify-start">
            <h5 className="gray">Total Deaths:</h5>
            <h1 className="red">
              {data && data.Global && data.Global.TotalDeaths.toLocaleString()}
            </h1>
            {data && data.Countries && <Deaths data={data.Countries} />}
          </div>
          <div className="right-upper-2 bg scroll flex-column-center justify-start">
            <h5 className="gray">Total Recovered:</h5>
            <h1 className="green">
              {data &&
                data.Global &&
                data.Global.TotalRecovered.toLocaleString()}
            </h1>
            {data && data.Countries && <Recovered data={data.Countries} />}
          </div>
          <div className="right-lower bg">
            <Linegraph />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
