import {createroot} from "react-dom/client"


const root=createroot(document.getElementById("root"))

root.render(<h1>Hello React</h1>)

//we can also write 
//createroot(document.getElementById("root")).render(<h1>Hello React</h1)