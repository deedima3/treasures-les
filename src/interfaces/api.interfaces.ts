interface NavbarData {
    route: string;
    title: string;
}

interface FooterLink {
    route: string;
    title: string;
}

interface FooterData {
    title: string;
    link: FooterLink[]
}

interface Currency {
    code: string;
    symbol: string;
    amount: number;
}

interface GraphCMSImage {
    width: number;
    height: number;
    url: string
}

interface GraphCMSLocation {
    distance: number;
    logitude: number;
    latitude: number
}

interface Price {
    isPromotion: boolean;
    amountName: string;
    quantity: number;
    price: number;
}

interface Destination {
    slug: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    description: string;
    location: GraphCMSLocation;
    shortLocation: string;
    price: Price
    image: GraphCMSImage;
    video: GraphCMSImage;
    backgroundImage: GraphCMSImage
}

type ShortDestination = Pick<Destination, "shortDescription" | "image" | "price" | "shortLocation" | "slug" | "title">

type ApiResponse<T> = {
    data: T;
}

type ApiDataResponse<ResponseType> = {
    [key: string]: ResponseType;
}

export type {
    NavbarData,
    ShortDestination,
    Destination,
    Currency,
    FooterData,
    FooterLink,
    ApiResponse,
    ApiDataResponse
}