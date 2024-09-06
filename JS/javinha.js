    function entrar(){
        var user = document.getElementById("cxnome").value;
        var senha = document.getElementById("cxsenha").value;

        if(user == "ADM" && senha == "123"){
            alert("Acesso permitido!")
        }
        else{
            alert("Acesso negado!!")
        }
    }
    function parimpar(){
        var n1 = document.getElementById("cx1").value;
        if(parsefloat(n1)%2 == 0){
            alert("Numero Par")
        }
        else{
            alert("Numero Impar")
        }
    }



