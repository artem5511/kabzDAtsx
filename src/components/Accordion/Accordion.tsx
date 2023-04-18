import React from 'react';

type AccordionPropsTitle = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsTitle) => {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {props.collapsed && <AccordionBody/>}
            </div>
        )
};
export const Accordion2 = (props: AccordionPropsTitle) => {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
};

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <div><h3>---{props.title}---</h3></div>
};

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

};