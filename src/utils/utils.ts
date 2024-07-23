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

export const generateWhatsappLink = (phoneNumber: string, message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURI(message)}`
}

export function getFormattedDateTime(timeZone: string): string {
    const now = new Date().toLocaleString('en-GB', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    const [date, time] = now.split(', ');

    // Reformat date from DD/MM/YYYY to YYYY-MM-DD
    const formattedDate = date.replace(/\//g, '-')
        .split('-')
        .reverse()
        .join('-');

    return `${formattedDate} ${time}`;
}