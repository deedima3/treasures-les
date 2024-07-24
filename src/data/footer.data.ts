import type { FooterData } from "$interfaces/api.interfaces"
import { generateWhatsappLink } from "$utils/utils"

const FOOTER_MESSAGE = "Hi, I know your contact from the website"
const BUMDES_NUMBER = '+621238392010'
const PERBEKEL_NUMBER = '+628137393449'
const KOOR_NUMBER = '+6287865963687'

const footerData: FooterData[] = [
    {
        title: "Follow Us",
        link: [
            {
                route: "https://www.facebook.com/wanwa.angenes",
                title: "Facebook"
            },
            {
                route: "https://www.instagram.com/pemdesles",
                title: "Instagram"
            },
            {
                route: "https://www.tiktok.com/@pemdesles",
                title: "TikTok"
            },
            {
                route: "https://les-buleleng.desa.id",
                title: "Website"
            },
        ]
    },
    {
        title: "Contact",
        link: [
            {
                route: generateWhatsappLink(BUMDES_NUMBER, FOOTER_MESSAGE),
                title: "Village-Owned Enterprise (BUMDes)"
            },
            {
                route: generateWhatsappLink(KOOR_NUMBER, FOOTER_MESSAGE),
                title: "Community Service Program (KKN)"
            },
            {
                route: generateWhatsappLink(PERBEKEL_NUMBER, FOOTER_MESSAGE),
                title: "Head of Village"
            },
        ]
    },
]

export {
    footerData
}