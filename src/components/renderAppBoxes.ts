import renderTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");


const renderAppBoxes=()=>{
    container?.append(renderTaskBox())
}


export default renderAppBoxes