// create map
const map = L.map('mapid').setView([-23.582169487943364, -46.746820146824994], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "mapmarker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`Brechó da Rê <a href="orphanage.html"><img src="arrow-white.svg" > </a>`)


// create and add marker
L
.marker([-23.577569488943364, -46.742820146824994], { icon })
.addTo(map)
.bindPopup(popup)

