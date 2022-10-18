console.log("Hello!")
let cb=document.querySelectorAll(".select");
let total_checked=0;
let error=document.getElementById("error");
// console.log(new_img)


const submit=()=>{
    let new_img1=Math.floor(Math.random()*9)+1;
    let new_img2=Math.floor(Math.random()*9)+1;
    let new_img3=Math.floor(Math.random()*9)+1;
    let new_img4=Math.floor(Math.random()*9)+1;
    cb.forEach((input)=>{
        if(input.checked){
            console.log("yes")
            total_checked++;
            
        }
    })
    if(total_checked==4){
        console.log("all selected")
        console.log(total_checked)
        error.innerText=""
        document.getElementById("first_img1").src=`img/${new_img1}.jfif`
        document.getElementById("first_img2").src=`img/${new_img2}.jfif`
        document.getElementById("first_img3").src=`img/${new_img3}.jfif`
        document.getElementById("first_img4").src=`img/${new_img4}.jfif`
    total_checked=0;
    }
    else{
        error.innerText="Please select All Images"
        
        
    } 
    reset()


}
const reset=()=>{
    cb.forEach((input)=>{
        input.checked=false;
        if(total_checked>=5){
            total_checked=0;
        }
        else if(total_checked<=3){

            total_checked=0;
        }
    })
}