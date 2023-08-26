import type { Stage } from "$hoody";
import type { ValueOf } from "houdini";

type Blog = {
    readonly title: string | null;
    readonly headerImage: {
        readonly url: string;
        readonly width: number | null;
        readonly height: number | null;
    } | null;
    readonly shortDescription: string | null;
    readonly slug: string | null
}

type Product = {
    readonly title: string | null;
    readonly subtitle: string | null;
    readonly shortDescription: string | null;
    readonly slug: string | null;
    readonly price: ({
        readonly isPromotion: boolean | null;
        readonly price: number | null;
        readonly quantity: number | null;
        readonly stage: ValueOf<typeof Stage>;
        readonly amountName: string | null;
    })[];
    readonly headerImage: {
        readonly url: string;
        readonly height: number | null;
        readonly width: number | null;
    } | null;
}

type MapProduct = {
    readonly title: string | null;
    readonly subtitle: string | null;
    readonly slug: string | null;
    readonly headerImage: {
        readonly url: string;
        readonly height: number | null;
        readonly width: number | null;
    } | null;
}

type Destination = Product

type Image = {
    readonly url: string;
    readonly width: number | null;
    readonly height: number | null;
}

type Price = {
    readonly isPromotion: boolean | null;
    readonly price: number | null;
    readonly quantity: number | null;
    readonly amountName: string | null;
    readonly stage: ValueOf<{
        readonly DRAFT: "DRAFT";
        readonly PUBLISHED: "PUBLISHED";
    }>
}

type Location = {
    readonly latitude: number;
    readonly longitude: number;
}

type Shop = {
    readonly instagramLink: string | null;
    readonly shopName: string | null;
    readonly waNumber: string | null;
    readonly slug: string | null;
    readonly shopLogo: {
        readonly url: string;
        readonly width: number | null;
        readonly height: number | null;
    } | null;
}

type Tour = {
    readonly slug: string | null;
    readonly title: string | null;
    readonly shortDescription: string | null;
    readonly headerImage: {
        readonly url: string;
        readonly width: number | null;
        readonly height: number | null;
    } | null;
}

type LocationType = {
    type: 'destination' | 'product' | 'shop'
}

type TypedLocation = LocationType & Location

export type {
    Blog,
    Image,
    Price,
    Shop, Location,
    Destination,
    Product,
    MapProduct,
    TypedLocation,
    Tour
}