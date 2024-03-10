"use client";

import { Button } from "@mui/base/Button";
import { RxReload } from "react-icons/rx";

import { ButtonProps } from "@/types";

export default function CustomButton({
    title,
    type,
    classNames,
    onClick,
}: ButtonProps) {
    return (
        <>
            {type === "button" ? (
                <Button className={classNames}>{title}</Button>
            ) : type === "reset" ? (
                <Button className={classNames} onClick={onClick}>
                    <RxReload className='w-7 h-7' />
                </Button>
            ) : (
                <Button className={classNames} href='#'>
                    {title}
                </Button>
            )}
        </>
    );
}
