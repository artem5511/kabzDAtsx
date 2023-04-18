import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

//function declaration
function App(props: any) {
    console.log("App rendering")
    //полезное что то
    //обязана вернуть JSX
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsTitle = {
    title: string
}
 function PageTitle (props: PageTitlePropsTitle) {
     console.log("AppTitle rendering")
return <h1>{props.title}</h1>
}
export default App;
