import { ButtonComponent } from "@/types";

const Button: ButtonComponent = ({ title, type, classNames }) => {
    return (
        <button type={type} className={`w-40 h-[52px] ${classNames}`}>
            {title}
        </button>
    );
};

export default Button;
