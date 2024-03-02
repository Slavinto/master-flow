import type { PlanCardProps } from "@/types";
import Image from "next/image";
import { Button } from ".";

const PlanCard = ({ card }: PlanCardProps) => {
    const { price, title, description, features, buttonText, preferred } = card;
    return (
        <section className='flex gap-5 flex-col shadow-md max-w-[360px] border-[1.4px] rounded border-stroke-gray px-[56px] pt-[50px] pb-9'>
            <div className='flex gap-[5px] items-center'>
                <h3 className={`card-price ${preferred && "text-light-green"}`}>
                    ${price}
                </h3>
                <p className='card-per-month'>/month</p>
            </div>
            <h4 className='card-title'>{title}</h4>
            <p className='card-description'>{description}</p>
            <div className='h-[1px] bg-black opacity-20' />
            <ul className='flex flex-col gap-7'>
                {features.map((feature) => (
                    <li key={feature} className='flex gap-3'>
                        <Image
                            src={"/static/assets/icons/check-circle.svg"}
                            width={24}
                            height={24}
                            alt='check icon'
                        />
                        <p className='card-features-text'>{feature}</p>
                    </li>
                ))}
            </ul>
            <Button
                title={buttonText}
                type='button'
                classNames={`card-button ${
                    preferred && "bg-primary text-white"
                }`}
            />
        </section>
    );
};

export default PlanCard;
