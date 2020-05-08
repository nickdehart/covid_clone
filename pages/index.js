import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";
import "./index.css";
import Title from "../components/title";
import Graphs from "../components/graphs";
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
        console.log(response.data);
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
      <Title title="COVID-19 Dashboard" />
      <div className="content-container">
        <div className="grid-container">
          <div className="left-upper">
            <h5>Total Confirmed:</h5>
            <h1 className="red">
              {data &&
                data.Global &&
                data.Global.TotalConfirmed.toLocaleString()}
            </h1>
          </div>
          <div className="left-middle scroll">
            {data && data.Countries && (
              <Countries data={data.Countries} geolocate={geolocate} />
            )}
          </div>
          <div className="left-lower">
            <p className="attribution">
              Data Source:{" "}
              <a href="https://covid19api.com/" target="_blank">
                https://covid19api.com/
              </a>
            </p>
            <p className="attribution">
              Last Updated: {new Date(data.Date).toLocaleString()}
            </p>
          </div>
          <div className="map-container">
            <Map coords={coords} />
          </div>
          <div className="right-upper scroll">
            <h5>Total Deaths:</h5>
            <h1 className="red">
              {data && data.Global && data.Global.TotalDeaths.toLocaleString()}
            </h1>
            {data && data.Countries && <Deaths data={data.Countries} />}
          </div>
          <div className="right-upper-2 scroll">
            <h5>Total Recovered:</h5>
            <h1 className="green">
              {data &&
                data.Global &&
                data.Global.TotalRecovered.toLocaleString()}
            </h1>
            {data && data.Countries && <Recovered data={data.Countries} />}
          </div>
          <div className="right-lower">
            <Graphs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
