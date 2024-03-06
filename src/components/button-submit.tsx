"use client";

import { ButtonSubmitProps } from "@/types";
import { useFormStatus } from "react-dom";

const ButtonSubmit = ({ label, loading, classNames }: ButtonSubmitProps) => {
    const { pending } = useFormStatus();
    return (
        <input
            disabled={pending}
            type='submit'
            value={pending ? loading : label}
            className={classNames}
        />
    );
};

export default ButtonSubmit;
