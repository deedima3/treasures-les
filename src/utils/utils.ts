import translationData from 'locales/en.json'
import { template, crush } from 'radash'

export function formatNumber(number: number) {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });

    return formatter.format(number);
}

export const indonesianLocale = new Intl.Locale('id', {
    region: 'ID', hourCycle: 'h24', calendar: 'gregory'
});

export const translate = (key: string, templateData: { [key: string]: string } = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    console.log("Key", key)
    console.log(templateData)
    return template(crush(translationData)[key], templateData)
}

export const getInitials = (name: string) => {
    const parts = name.split(' ')
    let initials = ''
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0]
        }
    }
    return initials.length > 2 ? initials.substring(0, 2) : initials
}

export const checkRoleAccess = (currentRole: number, roleAccess: number[]) => {
    return roleAccess.includes(currentRole)
}