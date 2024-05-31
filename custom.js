var circle = document.getElementById('circle');
var slider = document.getElementById('slider');

var attempts = document.getElementById('a');
var res = document.getElementById('res');

var random = Math.floor(Math.random()*10)+1;
let guess = 0;
var value1;
var circles = document.querySelectorAll('c');
var value;





    function guessing () {

    
    
    












        if (guess!=5) {
            if (value == random) {
                res.textContent= `Congratulations!!! You Guessed it Right !!!`;
                res.style.color= "green";
                document.getElementById(value).style.background="green";
                guess++;
                
            }
        
            
            else if (value > random) {
                guess++;
                document.getElementById(value).style.background="red";
            }
            else {
                guess++;
                document.getElementById(value).style.background="yellow";
            }
            
        
        } else {
            res.textContent = "Game Over !!! ";
            res.className="res1";
            res.style.color="red";
            document.getElementById('btn').style.display='flex';
        }
    
    
        attempts.textContent = "Number of Attempts Used: "+guess;
    }



circle.addEventListener('click',
    (e)=>{
        
       value = e.target.id;
       guessing(value)
       slider.value = value;
       console.log(value);

    }
)

slider.addEventListener('click',(e)=>{
    var ele=document.getElementById(e.target.value);
    ele.style.background="grey";
    ele.click();
    console.log(e.target.value)
    
})

