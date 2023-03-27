let score = 0;
let ocena = 1;
let odp = [
    "D",
    "A",
    "A",
    "B",
    "D",
    "C",
    "C",
    "C",
    "D",
    "D"
];
function checkAnswer(){
    score = 0;
    for(let i = 1; i<=odp.length;i++)
    {
        
   
        if(document.querySelector('input[name="test'+i+'"]:checked').value == odp[i-1])
        {
            score += 1;
        }
   
    }
    console.log("shgdja");
    console.log(odp.length)
    if(score/odp.length<0.4){
        ocena = 1;
    }
    else if(score/odp.length<0.6){
        ocena = 2;
    }
    else if(score/odp.length<0.7){
        ocena = 3;
    }
    else if(score/odp.length<0.90){
        ocena = 4;
    }
    else if(score/odp.length<0.96){
        ocena = 5;
    }
    else{
        ocena = 6;
    }
    
    document.getElementById("questions-size").innerHTML= '<section class="center"><br><em>Wynik:</em>'+score+' / '+odp.length+' <br><h2>Ocena: '+ocena+'</h2></section>';
}














