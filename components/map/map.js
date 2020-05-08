// import L from "leaflet";
import Head from "next/head";
import { CircleMarker, Map, TileLayer, Tooltip } from "react-leaflet";
import "./map.css";

const Mp = ({ coords }) => {
  const center = [
    coords.lat ? coords.lat : 45.3667,
    coords.lon ? coords.lon : -77.4167,
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>

      <Map center={center} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={center} color="red" radius={25} stroke={0}>
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </CircleMarker>
      </Map>
    </>
  );
};

export default Mp;
