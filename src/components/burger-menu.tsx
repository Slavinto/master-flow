"use client";

import React, { useState } from "react";
import Hamburger from "hamburger-react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='lg:hidden'>
            {" "}
            <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        </div>
    );
};

export default BurgerMenu;
