import { navbarItems } from "@/constants";
import Image from "next/image";
import { Button } from ".";

const Navbar = () => {
    return (
        <nav className='w-full flex items-center gap-8 border-2 border-red-500 h-24'>
            <Image
                src={"/static/assets/icons/logo.svg"}
                className=''
                width={206}
                height={32}
                alt='master flow icon'
            />
            <ul className='flex gap-8 border-2 border-green-500 h-10'>
                {navbarItems.map((item) => (
                    <li key={item} className=''>
                        {item}
                    </li>
                ))}
            </ul>
            <div className='flex'>
                <Button
                    title={"Get Started"}
                    type='button'
                    classNames='w-[146px] h-[52px] border-[1.4px] border-stroke-gray rounded-full'
                />
            </div>
        </nav>
    );
};

export default Navbar;
