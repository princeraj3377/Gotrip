const fname =document.getElementById("fname");
const email=document.getElementById("email");
const mob= document.getElementById("mob")

const gen=document.getElementById("gender");
console.log(gen)


const btn= document.getElementById("btn");

btn.addEventListener("click", ()=>{
    const jar= fname.value;
    const bar=email.value;
    const tar=mob.value;
    const pen = gen.value;
    localStorage.setItem("name", jar);
    localStorage.setItem("email",bar);
    localStorage.setItem("mobile no",tar);
    localStorage.setItem("grnder",pen);
    
});

