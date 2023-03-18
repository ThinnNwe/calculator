let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let total = '';

for(item of buttons){    
    
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ",buttonText);

    if(buttonText == "*"){
        //buttonText ="*";
        total += buttonText;
        input.value = total;
    }

    else if(buttonText == ""){
        console.log(buttonText);
        input.value += buttonText;
    }

    else if(buttonText == "Clear"){
        input.value = "";
        total = "";
   }

    else if(buttonText == "Del"){
       // console.log("before"+screenValue);
       
       total.slice(0,-1);

       total = total.slice(0,-1);
      input.value = total;

       
   }

   else if(buttonText == "="){
    input.value = eval(total);
   }

   else{
    total += buttonText;
   // console.log(screenValue);
   input.value = total;
   }

})

}