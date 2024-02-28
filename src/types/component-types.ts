import { FC } from "react";

export type ButtonComponent = FC<{
    classNames: string;
    title: string;
    type?: "button" | "submit" | "reset";
}>;
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
    price: number;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
};

export type PlanCardProps = { card: PriceCard };
// ===================================================
// ===================================================
