import { ButtonComponent } from "@/types";

const Button: ButtonComponent = ({ title, type, classNames }) => {
    return (
        <button
            type={type}
            className={`font-semibold text-base text-primary ${classNames}`}
        >
            {title}
        </button>
    );
};

export default Button;
