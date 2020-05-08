// import L from "leaflet";
import Head from "next/head";
import { CircleMarker, Map, TileLayer, Tooltip } from "react-leaflet";
import "./map.css";

const Mp = ({ coords }) => {
  const center = [
    coords.lat ? coords.lat : 51.505,
    coords.lon ? coords.lon : -0.09,
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

      {/* <Map center={[21.3, -157.9]} zoom={12}> */}
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

// stroke	    Boolean	  true	Whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
// color	    String	  '#3388ff'	Stroke color
// weight	    Number	  3	Stroke width in pixels
// opacity	  Number	  1.0	Stroke opacity
// lineCap	  String	  'round'	A string that defines shape to be used at the end of the stroke.
// lineJoin	  String	  'round'	A string that defines shape to be used at the corners of the stroke.
// dashArray	String	  null	A string that defines the stroke dash pattern. Doesn't work on Canvas-powered layers in some old browsers.
// dashOffset	String	  null	A string that defines the distance into the dash pattern to start the dash. Doesn't work on Canvas-powered layers in some old browsers.
// fill	      Boolean	  depends	Whether to fill the path with color. Set it to false to disable filling on polygons or circles.
// fillColor	String	  *	Fill color. Defaults to the value of the color option
// fillOpacity	Number	0.2	Fill opacity.
// fillRule	  String	  'evenodd'	A string that defines how the inside of a shape is determined.
// bubblingMouseEvents	Boolean	true	When true, a mouse event on this path will trigger the same event on the map (unless L.DomEvent.stopPropagation is used).
// renderer	  Renderer	Use this specific instance of Renderer for this path. Takes precedence over the map's default renderer.
// className	String	  null	Custom class name set on an element. Only for SVG renderer.
