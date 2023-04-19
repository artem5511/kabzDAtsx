import React from 'react';

type StarPropsType = {
    selected: boolean
}

export const Star = (props: StarPropsType) => {
   return props.selected === true ? <span><b>star</b></span> : <span>star</span>
}