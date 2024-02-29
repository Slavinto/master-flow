import { mostAskedQuestions } from "@/constants";
import { CustomAccordion } from ".";

const Faq = () => {
    return (
        <section className='flex flex-col gap-[22px] items-center w-full p-[100px] bg-darker-blue mb-[140px]'>
            <h2 className='section-main-text text-white'>
                The most asked questions
            </h2>
            {mostAskedQuestions.map((q) => (
                <CustomAccordion
                    key={q.question}
                    topText={q.question}
                    expandedText={q.answer}
                />
            ))}
        </section>
    );
};

export default Faq;
