let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let num3 = parseInt(prompt("Ingrese otro número"));

  if(num1 > num2 && num1 > num3)
  {
    document.write(`El número ${num1} es el mayor`);
  }
  else {
      if(num2 > num1 && num2 > num3)
      {document.write(`El número ${num2} es el mayor`);} 
    else {
        document.write(`El número ${num3} es el mayor`);
    }
  } 