export const contactMapHtml = `
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
    .view-toggle {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 1000;
      display: flex;
      background: #ffffff;
      border-radius: 999px;
      padding: 3px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.25);
      font-family: system-ui, -apple-system, sans-serif;
    }
    .view-toggle button {
      border: 0;
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 999px;
      color: #002b5c;
      background: transparent;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .view-toggle button.active {
      background: #002b5c;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <div id="map">
    <div class="view-toggle">
      <button id="btnStreet" type="button">Street</button>
      <button id="btnSat" class="active" type="button">Satellite</button>
    </div>
  </div>
  <script>
    var map = L.map('map', { zoomControl: false });
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    var street = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; CartoDB &copy; OpenStreetMap'
    });

    var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri'
    });

    var current = satellite;
    current.addTo(map);

    function setView(mode) {
      map.removeLayer(current);
      current = (mode === 'sat') ? satellite : street;
      current.addTo(map);
      current.bringToBack();
      document.getElementById('btnStreet').className = (mode === 'sat') ? '' : 'active';
      document.getElementById('btnSat').className = (mode === 'sat') ? 'active' : '';
    }

    document.getElementById('btnStreet').addEventListener('click', function () { setView('street'); });
    document.getElementById('btnSat').addEventListener('click', function () { setView('sat'); });

    var pinSvg = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ea4335"/><circle cx="12" cy="9" r="3.5" fill="#ffffff"/></svg>';

    var customIcon = L.divIcon({
      html: pinSvg,
      className: 'custom-pin',
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -32]
    });

    var hq = L.marker([9.7076931, 80.0190207], { icon: customIcon }).addTo(map)
      .bindPopup("<b>SL MediLab</b><br/>Main Headquarters");

    map.setView([9.7076931, 80.0190207], 15);

    setTimeout(function () { hq.openPopup(); }, 500);
  </script>
</body>
</html>
`;
