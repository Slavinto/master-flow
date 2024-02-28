import { FC } from "react";

export type ButtonProps = {
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
    type?: "button" | "link";
};

export type ButtonComponent = FC<ButtonProps>;
