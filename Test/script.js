let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    console.log("button clicked");
    let a=document.querySelector("ul");
    let res=await CallApi();
    for(let i=0;i<10;i++){
    a.innerText=res[i];
    }
})

let URL="https://api.github.com/users";

async function CallApi(){
    let login=[];
    try{
        let api=await axios.get(URL);
        arr=api.data;
        for(let i=0; i<10; i++){
        login.push(arr[i].login);
        }
        return login;
    }
    catch(error){
        console.log(error);
    }
    
}