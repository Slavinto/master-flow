import { FC } from "react";

export type ButtonProps = {
    classNames: string;
    title: string;
    type?: "button" | "link";
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
// ===================================================
// ===================================================
// ===================================================
