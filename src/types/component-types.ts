import { FC } from "react";

export type ButtonProps = {
    title?: string;
    type?: "button" | "link" | "submit" | "reset";
    classNames?: string;
    onClick: () => void;
};

export type ButtonComponent = FC<ButtonProps>;
// ===================================================
export type PostCardProps = {
    imgUrl: string;
    category: string;
    title: string;
    postUrl: string;
};

export type PostCard = FC<PostCardProps>;
// ===================================================
export type PriceCard = {
    preferred: boolean;
    price: number;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
};

export type PlanCardProps = { card: PriceCard };
// ===================================================
export type AccordionProps = {
    topText: string;
    expandedText: string;
};
// ===================================================
export type SubscribeFormProps = {
    textLg: string;
    textSm: string;
    textBtn: string;
    variant?: "dark" | "light" | "simple-light";
};

// ===================================================
export type ButtonSubmitProps = {
    label: string;
    loading: string;
    classNames: string;
};

// ===================================================
export type BlogArticle = {
    id: string;
    article: string;
};

export type SearchResults = {
    query?: string;
    searchResults?: BlogArticle[];
    cards?: PostCardProps[];
};
// ===================================================
