let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenVal = '';
for( item of buttons){
    item.addEventListener('click',(e) =>{
        buttonText = e.target.innerText;
        if (buttonText == 'C'){
            screenVal = "";
            screen.value = screenVal;
        }
        else if(buttonText == 'X'){
            buttonText = '*';
            screen.value += buttonText;
            screenVal = screen.value;
            console.log(screen.value);

        }
         else if(buttonText  == '='){
        screen.value = eval(screenVal);
        screenVal = '';
        }
        else if(buttonText){
            screen.value +=buttonText;
            screenVal = screen.value;
        }
    
    });

 }

         
window.onerror = function(){
    alert('Please input valid expression');
}
