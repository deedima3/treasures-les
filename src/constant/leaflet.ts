import leaflet from 'leaflet'

const roundedIcon = leaflet.divIcon({
    html: '<div class="w-10 h-10 text-transparent rounded-full bg-brand-dark"></div>',
    iconSize: [10, 10],
    className: ''
})

const productIcon = leaflet.divIcon({
    html: '<div class="w-10 h-10 text-transparent rounded-full bg-brand-dark"></div>',
    iconSize: [10, 10],
    className: ''
})

const destinationIcon = leaflet.divIcon({
    html: '<div class="w-10 h-10 text-transparent rounded-full bg-brand-dark"></div>',
    iconSize: [10, 10],
    className: ''
})

export {
    roundedIcon,
    productIcon,
    destinationIcon
}