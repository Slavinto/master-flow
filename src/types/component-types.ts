import { FC } from "react";

export type ButtonComponent = FC<{
    classNames: string;
    title: string;
    type?: "button" | "submit" | "reset";
}>;
