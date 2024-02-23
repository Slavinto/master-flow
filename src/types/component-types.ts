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
