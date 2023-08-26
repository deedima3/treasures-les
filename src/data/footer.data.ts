import type { FooterData } from "$interfaces/api.interfaces"
import { generateWhatsappLink } from "$utils/utils"

const FOOTER_MESSAGE = "Hi, i know your contact from the website"
const BUMDES_NUMBER = '+621238392010'
const PERBEKEL_NUMBER = '+628137393449'
const KOOR_NUMBER = '+6287865963687'

const footerData: FooterData[] = [
    {
        title: "Our Village",
        link: [
            {
                route: "/document/profil-desa",
                title: "Profil Desa"
            },
        ]
    },
    {
        title: "Contact",
        link: [
            {
                route: generateWhatsappLink(BUMDES_NUMBER, FOOTER_MESSAGE),
                title: "Badan Usaha Desa Les"
            },
            {
                route: generateWhatsappLink(PERBEKEL_NUMBER, FOOTER_MESSAGE),
                title: "Kepala Desa Les"
            },
            {
                route: generateWhatsappLink(KOOR_NUMBER, FOOTER_MESSAGE),
                title: "Koordinator Desa KKN"
            },
        ]
    },
]

export {
    footerData
}