import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AccordionProps } from "@/types";

export default function CustomAccordion({
    topText,
    expandedText,
}: AccordionProps) {
    return (
        <Accordion className='flex flex-col border-0 !bg-canvas-darker-blue shadow-none'>
            <AccordionSummary
                className='border-0 shadow-none'
                aria-controls='panel1-content'
                id='panel1-header'
            >
                <Typography className='questions-question'>
                    {topText}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='questions-answer'>
                    {expandedText}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}
