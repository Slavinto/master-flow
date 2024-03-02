import Image from "next/image";
import Link from "next/link";

import { customerLogos } from "@/constants";

const CustomerLogos = () => {
    return (
        <div className='flex gap-[120px]'>
            {customerLogos.map((logo) => (
                <Link href='#' key={logo.name}>
                    <Image
                        src={logo.path}
                        width={135}
                        height={40}
                        alt='customers logo'
                    />
                </Link>
            ))}
        </div>
    );
};

export default CustomerLogos;
