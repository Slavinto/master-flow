import Image from "next/image";

import { teamMembers } from "@/constants";

const OurTeam = () => {
    return (
        <section className='flex flex-col gap-[22px] container-sm mb-[140px]'>
            <p className='subheading'>our members</p>
            <h2 className='section-main-text max-w-[597px]'>
                Who is part of Master Flow. Our team of experts.
            </h2>
            <div className='grid grid-cols-3 gap-[60px] gap-x-20 gap-y-[60px] mt-[38px]'>
                {teamMembers.map((m) => (
                    <figure key={m.name} className='flex flex-col gap-2'>
                        <Image
                            src={m.picPath}
                            width={360}
                            height={460}
                            alt='a person foto'
                        />
                        <p className='text-base font-semibold text-dark opacity-30 pt-[14px]'>
                            {m.name}
                        </p>
                        <p className='text-2xl font-semibold text-darker-blue'>
                            {m.jobTitle}
                        </p>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
