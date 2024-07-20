import type { NavbarData } from "$interfaces/api.interfaces"

const navbarData: NavbarData[] = [
    {
        title: "Home",
        route: "/"
    },
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
        title: "Shop",
        route: "/shop"
    },
    {
        title: "Tour",
        route: '/tour'
    }
]

export {
    navbarData
}