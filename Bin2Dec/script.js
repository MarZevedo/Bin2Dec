document.getElementById("conversor").onclick = function(){bin2decval()};     
function bin2decval(){
    let  numero1 = document.getElementById("num1").value;
    for(i=0;i<numero1.length;i++){
        if(numero1[i] ==0 || numero1[i] ==1 ){
        } else{
                alert ("Numero digitado invalido. Digite somente 0 ou 1 ")
                return;
            }
        }  
        let result = parseInt(numero1,2);
        document.getElementById("num2").innerHTML = result;
    } 