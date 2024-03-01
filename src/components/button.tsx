"use client";

import { ButtonProps } from "@/types";

import * as React from "react";
import { Button } from "@mui/base/Button";
import { prepareForSlot } from "@mui/base/utils";
import Link from "next/link";

const LinkSlot = prepareForSlot(Link);

export default function CustomButton({ title, type, classNames }: ButtonProps) {
    return (
        <>
            {type === "button" ? (
                <Button className={classNames}>{title}</Button>
            ) : (
                <Button
                    className={classNames}
                    href='#'
                    slots={{ root: LinkSlot }}
                >
                    {title}
                </Button>
            )}
        </>
    );
}
