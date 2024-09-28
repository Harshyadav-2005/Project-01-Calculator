const operators = ['+','-','*','/']; 

const display = document.getElementById("display");

let cleardisplay = false;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = this.textContent;
        
        // Clear the display if necessary
        if(cleardisplay && value!=='='){
            display.value = '';
            cleardisplay = false;
        }
        
        // Handle 'clr' button
        if(value === 'clr'){
            display.value = '';
        } 
        
         // Handle '=' button
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
        
        // Handle decimal point
        else if(value ==='.'){
            const lastnum = display.value.split(/[\+\-\*\/]/).pop();
            if(!lastnum.includes('.')){
                display.value += value;
            }
        }
        
        // Handle operators
        else if(operators.includes(value)){
            const lastchr = display.value.slice(-1);
            if(display.value === ''){
                return;
            }
            if(!operators.includes(lastchr)){
                display.value += value;
            }
            
        }

         // Handle numbers and other inputs
        else{
            display.value += value;
        }
    });
});
