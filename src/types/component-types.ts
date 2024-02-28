import { FC } from "react";

export type ButtonProps = {
    classNames: string;
    title: string;
    type?: "button" | "link";
};

export type ButtonComponent = FC<ButtonProps>;
