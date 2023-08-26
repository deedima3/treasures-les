import type { NavbarData } from "$interfaces/api.interfaces"

const navbarData: NavbarData[] = [
    {
        title: "News Portal",
        route: "/blog"
    },
    {
        title: "Destination",
        route: "/destination"
    },
    {
        title: "Product",
        route: "/product"
    },
    {
        title: "Map",
        route: "/map"
    },
    {
        title: "Tour",
        route: '/tour'
    }
]

export {
    navbarData
}