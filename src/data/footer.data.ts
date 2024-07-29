import type { FooterData } from "$interfaces/api.interfaces"
import { generateWhatsappLink } from "$utils/utils"

const FOOTER_MESSAGE = "Hi, I know your contact from the website"
const BUMDES_NUMBER = '+6281238392010'
const PERBEKEL_NUMBER = '03623303967'
const KOOR_NUMBER = '+6285338391881'

const footerData: FooterData[] = [
    {
        title: "Follow Us",
        link: [
            {
                route: "https://www.facebook.com/profile.php?id=100076945958412",
                title: "Facebook"
            },
            {
                route: "https://www.instagram.com/girisegare",
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
                route: `tel:${PERBEKEL_NUMBER}`,
                title: "Village Office"
            },
        ]
    },
]

export {
    footerData
}