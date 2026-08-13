export const branchMapHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    html, body, #map { height: 100%; margin: 0; padding: 0; background: #e8ecf0; }
    .leaflet-popup-content-wrapper {
      background: #002b5c !important;
      color: #ffffff !important;
      border-radius: 12px !important;
      font-family: system-ui, -apple-system, sans-serif !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    }
    .leaflet-popup-tip {
      background: #002b5c !important;
    }
    .leaflet-popup-content {
      margin: 10px 14px !important;
      font-size: 13px !important;
      line-height: 1.4 !important;
    }
    .leaflet-popup-content b {
      font-size: 14px !important;
    }
    .custom-pin svg {
      filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.3));
    }
    .leaflet-control-attribution {
      font-size: 10px !important;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = L.map('map', { zoomControl: false });
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; CartoDB &copy; OpenStreetMap'
    }).addTo(map);

    var pinSvg = \`
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ea4335"/>
        <circle cx="12" cy="9" r="3.5" fill="#ffffff"/>
      </svg>
    \`;

    var customIcon = L.divIcon({
      html: pinSvg,
      className: 'custom-pin',
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -32]
    });

    var marker1 = L.marker([9.7076931, 80.0190207], {icon: customIcon}).addTo(map)
      .bindPopup("<b>SM MediLabs &ndash; Jaffna</b><br/>Main Headquarters");

    var marker2 = L.marker([8.601004, 81.214157], {icon: customIcon}).addTo(map)
      .bindPopup("<b>SM MediLabs &ndash; Trincomalee</b><br/>Branch Office");

    var group = new L.featureGroup([marker1, marker2]);
    map.fitBounds(group.getBounds().pad(0.35));

    setTimeout(function() {
      marker1.openPopup();
    }, 500);
  </script>
</body>
</html>
`;
