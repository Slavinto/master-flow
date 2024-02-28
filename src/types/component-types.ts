import { FC } from "react";

export type ButtonProps = {
    classNames: string;
    title: string;
    type?: "button" | "link";
};
// ===================================================
export type PostCardProps = {
    imgUrl: string;
    category: string;
    title: string;
    postUrl: string;
};

export type PostCard = FC<PostCardProps>;
// ===================================================

export type ButtonComponent = FC<ButtonProps>;
