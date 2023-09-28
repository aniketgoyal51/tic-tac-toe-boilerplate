var boxele=document.querySelectorAll(".box");
var winningcombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
var xat=[]
var oat=[]
var click=0
var won=0
const msg=document.getElementById("message")
const res=document.getElementById("result")
const btn=document.getElementById("button")


boxele.forEach(box => {
    console.log(box);
    box.onclick = handle;
})

function handle(e){
    console.log(e.target);
    console.log(e.target.id);
    const i=e.target.id
    const text=document.createElement('p')
    text.setAttribute("id","text")
    boxele[i-1].appendChild(text)
    console.log(boxele[i-1]);



    if(click%2==0){
        xat.push(parseInt(i-1))
        console.log(xat)
        text.innerHTML="X"
        text.style.color= '#FAB201';
        result(winningcombinations , xat , 'X')
    } else {
        oat.push(parseInt(i-1))
        console.log(oat)
        text.innerHTML="O"
        text.style.color= '#FAB201';
        result(winningcombinations , oat , 'O')
    }
    click++
    if(click==9 && won==0){
        res.style.visibility='visible'
        msg.innerHTML="It's a tie 🤝"
    }

}

function result(winningcombinations , at , player){
    let flag=0;
    let checker = [];
    for (var i=0; i<winningcombinations.length; i++){
        if(Array.isArray(winningcombinations[i])){
            result(winningcombinations[i],at,player)
        }else{
            if(at.includes(winningcombinations[i])){
                checker.push(true);
                flag++;
            }else{
                checker.push(false);
            }
        }
    }
    if(checker.every(check => check ===true)&& flag>2){
        res.style.visibility='visible';
        msg.innerHTML="'"+player+"'"+"Won the Game!"
        won=1;
    }
}

btn.onclick = () => {
    location.href="./index.html"
}