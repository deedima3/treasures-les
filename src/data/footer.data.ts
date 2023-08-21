import type { FooterData } from "$interfaces/api.interfaces"

const footerData: FooterData[] = [
    {
        title: "Our Village",
        link: [
            {
                route: "/document/profil-desa",
                title: "Profil Desa"
            },
            {
                route: "/document/tentang-desa",
                title: "Tentang Desa Kami"
            }
        ]
    },
    {
        title: "Contact",
        link: [
            {
                route: "",
                title: "Badan Usaha Desa Les"
            },
            {
                route: "",
                title: "Kepala Desa Les"
            },
            {
                route: "",
                title: "Koordinator Desa KKN"
            },
        ]
    },
]

export {
    footerData
}