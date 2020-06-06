

function exibirResult(){
 let numero= document.getElementById("number");
 
  const div= document.getElementById("result");
  document.write('Oi, tudo bom? O resultado é: <br>')
  
  for (let x=1; x<=numero.value; x++){
    let result= x * numero.value;

     document.write(`

      ${x} x ${numero.value} = ${result} <br>
     `);
  }
}