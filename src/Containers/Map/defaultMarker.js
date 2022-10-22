import L from "leaflet";
// const svg = document.createElementNS(`
//     <div><svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
//       <text x="20" y="35" class="small">My</text>
//     </svg></div>`,'svg');


// var s = new XMLSerializer().serializeToString(svg)
// var encodedData = window.btoa(s);
// console.log(encodedData)

const defaultMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

export { defaultMarker };
