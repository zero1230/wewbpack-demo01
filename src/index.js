import x from './x.js'
import "./x.scss";
import "./y.less";
import "./z.styl"
import png from "./assets/1.png"

const div=document.getElementById("app")
div.innerHTML = `
     <img src="${png}">
`;

const btn=document.createElement("button")
btn.innerText="懒加载按钮"
btn.onclick=()=>{
    const promise=import("./lazy")
    promise.then((module)=>{
        const fn=module.default
        fn()
    },()=>{
        console.log('模块加载错误。。。')
    })
}
div.appendChild(btn)