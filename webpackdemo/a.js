// console.log("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊")
import React from 'React'
import ReactDom from 'react-dom'
// import img from './img/img.jpg'
// import timg from './img/timg.jpg'

// async function sayHello(){
//     let result = await fetch("https://www.baidu.com");
//     console.log(result)
// }
// sayHello()
import Hello from './hello.jsx'
// console.log(hello)
// console.log(SERVICE_URL)
// console.log(document.getElementsByTagName("a")[0].href=SERVICE_URL)

import './test.scss'
ReactDom.render(<Hello />,document.getElementById("reactBox"))