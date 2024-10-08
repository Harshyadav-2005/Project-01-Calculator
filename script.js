const operators = ['+','-','*','/']; 

const display = document.getElementById("display");

let cleardisplay = false;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = this.textContent;

        if(cleardisplay && value!=='='){
            display.value = '';
            cleardisplay = false;
        }

        if(value === 'clr'){
            display.value = '';
        } 

        else if(value === '='){
            if(display.value === ''){   
                return;
            }
            try{
                display.value = eval(display.value);
                cleardisplay = true;
            }
            catch(Err){
                display.value = 'Error' ;
            }
        }
  
        else if(value ==='.'){
            const lastnum = display.value.split(/[\+\-\*\/]/).pop();
            if(!lastnum.includes('.')){
                display.value += value;
            }
        }

        else if(operators.includes(value)){
            const lastchr = display.value.slice(-1);
            if(display.value === ''){
                return;
            }
            if(!operators.includes(lastchr)){
                display.value += value;
            }
            
        }

        else{
            display.value += value;
        }
    });
});
