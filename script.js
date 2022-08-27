let rgbbtn=document.querySelector("#rgbbtn");
let rgbinp=document.querySelectorAll(".rgb_input");
let hexinp=document.querySelector("#hex_input");
let body=document.querySelector("body");
let hexcopy=document.querySelector(".hex_copybtn");
let rgbcopy=document.querySelector(".rgb_copybtn");
let gradientPlusBtn=document.querySelector(".gradientPlusBtn");
let color1=document.getElementById(`color1`);
let color2=document.getElementById(`color2`);
let deg=document.getElementById(`deg`);
let gradient_copy_btn=document.querySelector(`.gradient_copy_btn`);






rgbbtn.addEventListener("click",function(){
    let {r,g,b}=generate_rgb_colour();
    let colour=`rgb(${r},${g},${b})`;
    body.style.background=colour;
    // this.style.background=colour;
    this.style.color=colour;
    rgbinp[0].style.borderBottom=`4px solid ${colour}`;
    rgbinp[1].style.borderBottom=`4px solid ${colour}`;
    rgbinp[2].style.borderBottom=`4px solid ${colour}`;
    hexinp.style.borderBottom=`4px solid ${colour}`;
    rgbinp[0].value=r;
    rgbinp[1].value=g;
    rgbinp[2].value=b;
    let generatedHex_code=`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    hexinp.value=generatedHex_code;
})

hexcopy.addEventListener("click",function(){
    let code=hexinp.value;
    navigator.clipboard.writeText(code);
    hexinp.style.background=code;
    this.innerText=`Copied`;
    setTimeout(() => {
        this.innerText=`Copy`;
        hexinp.style.background="#fff";
    }, 2000);
})

rgbcopy.addEventListener("click",function(){
    let code=`rgb(${rgbinp[0].value},${rgbinp[1].value},${rgbinp[2].value})`;
    navigator.clipboard.writeText(code);
    document.querySelector(".rgb_inp").style.background=code;
    this.innerText=`Copied`;
    setTimeout(() => {
        document.querySelector(".rgb_inp").style.background="#fff";
        this.innerText=`Copy`;
    }, 2000);
})

color1.addEventListener("input",function(){
    let clv1=this.value;
    let clv2=color2.value;
    let dg=0;

    document.querySelector(".clr1").innerText=`First colour: ${clv1}`;
    color2.addEventListener("input",function(){
        let clv2=this.value;
        document.querySelector(".clr2").innerText=`Second colour: ${clv2}`;
        body.style.background=`linear-gradient(${dg}deg, ${clv1} , ${clv2})`;
        deg.addEventListener("input",function(){
            let dg=this.value;
            document.querySelector(".degshow").innerText=`Angle: ${dg}`;
            body.style.background=`linear-gradient(${dg}deg, ${clv1} , ${clv2})`;
            gradient_copy_btn.addEventListener("click",function(){
                this.innerText="Copied";
                navigator.clipboard.writeText(`linear-gradient(45deg, ${clv1} , ${clv2})`);
                console.log(`linear-gradient(${dg}deg, ${clv1} , ${clv2})`)
            })
        })
    })
    body.style.background=`linear-gradient(${dg}deg, ${clv1} , ${clv2})`;
    
    setTimeout(() => {
        gradient_copy_btn.innerText="Copy";
    }, 2000);
    
})

hexinp.addEventListener("keyup",function(){
    let clr=this.value
    body.style.background=clr;
})

setInterval(() => {
    if (hexinp.value == "") {
        hexinp.value="#8854d6"
    }
}, 4000);



function generate_rgb_colour(){
    let r=Math.floor(Math.random() * 255);
    let g=Math.floor(Math.random() * 255);
    let b=Math.floor(Math.random() * 255);
    return {
        r,
        g,
        b
    } 
}