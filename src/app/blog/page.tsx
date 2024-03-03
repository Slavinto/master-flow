import { Platform, SubscribeForm } from "@/components";
import React from "react";

const Blog = () => {
    return (
        <main>
            <Platform />
            <SubscribeForm
                textLg='Receive our articles by mail!'
                textSm='Enter your email into form below to get updates from us'
                textBtn='Submit'
                variant='simple-light'
            />
        </main>
    );
};

export default Blog;
