//your code here!

let list = document.getElementById("infi-list");



let x =1;
while(true){
    let li = document.createElement("li")
    li.innerText = `Item ${x}`
    list.append(li)
    if(x==10){
        break
    }
    x++;
}

list.addEventListener('scroll',()=>{
    console.log("page is being scrolled")
    let li = document.createElement("li")
    li.innerText = `Item ${x}`
    list.append(li)
    x++;
})