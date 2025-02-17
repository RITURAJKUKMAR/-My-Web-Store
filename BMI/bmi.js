let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let w=document.getElementsByName("weight")[0].value;
    let l=document.getElementsByName("height")[0].value;
    let status=document.getElementById("status");
    console.log(Number(w));
 
    l =(l / 100);
    l=l*l;
    let bm = (w / l).toFixed(1);
    if (bm < 18.5)
    {
        status.innerText="Underweight";
        status.style.color="blue";
    }
    else if (bm <= 25 && bm >= 18.5)
    {
        status.innerText="Normal";
        status.style.color="green";
    }
    else if (bm > 25)
    {
        status.innerText="Overweight";
        status.style.color="yellow";
    }
    console.log(w);
    console.log(l);
    console.log(bm);
    number.innerText = bm;
})

let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    number.innerText =20.8;

})