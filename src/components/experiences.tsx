import Image from "next/image";
import { BlogPostCard } from ".";
import { postCardsExperiences } from "@/constants";

const Experiences = () => {
    return (
        <section className='relative mb-[140px] flex flex-col gap-[60px]'>
            <h2 className='section-main-text'>Our latest experiences</h2>
            <div className='flex justify-between relative z-10'>
                {postCardsExperiences.map((item) => (
                    <BlogPostCard
                        key={item.title}
                        imgUrl={item.imgUrl}
                        category={item.category}
                        title={item.title}
                        postUrl={item.postUrl}
                    />
                ))}
            </div>
            <Image
                src={"/static/assets/patterns/shape1.svg"}
                alt='shape pattern'
                width={86}
                height={102}
                className='rotate-90 absolute bottom-[210px] -left-12'
            />
        </section>
    );
};

export default Experiences;
