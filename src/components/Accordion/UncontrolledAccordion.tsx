import React, {useState} from 'react';

type AccordionPropsTitle = {
    titleValue: string
    // collapsed: boolean
}
export const UncontrolledAccordion = (props: AccordionPropsTitle) => {

    let [collapsed, setCollapsed] = useState(false);
    debugger
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(true)
            }}>TOGGLE
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
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