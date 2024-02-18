import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className='padding-x border-2 border-red-500 w-full h-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos dicta consequuntur recusandae sint tempora veniam
                provident quasi facere libero temporibus voluptatem quibusdam,
                molestias voluptatibus asperiores distinctio iure est
                praesentium harum.
            </section>
            <Button classNames='' title='Get Started' type='button' />
        </main>
    );
}
