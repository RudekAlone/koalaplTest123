

let score = 0;
let urlText = document.URL
let urlTextArray = urlText.split("/");
console.log(urlTextArray[urlTextArray.length - 1]);
function checkAnswer(){
    for(let i = 1; i<=3;i++)
    {
        
    if(document.querySelector('input[name="test'+i+'"]:checked').value =='D')
    {
        score += 1;
    }
    }
    window.parent.document.getElementById("xp").innerText="jghg";
}














