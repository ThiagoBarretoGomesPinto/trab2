



        function CalcularJuros(){
  	    var CapInicial= parseFloat(formulario.CapInicialFront.value);
  	    var valorMensal =parseFloat(formulario.CapMensal.value);
  	    var  tj =parseFloat(formulario.tj.value);
		var pma = formulario.pma.value;
  	  	var Taxap=0;
  	    var Val_Acu_Peri = 0;
  	    var periodo = formulario.periodo.value;
  	    var Val_Peri;
  	    var Taxa_Calc=0
  	 



  	         if (pma = "1") {

  	             Val_Peri = periodo;

  	         } else {

  	             Val_Peri = 12 * periodo;
  	         }

  	         //S = P (1 + i)?n ? + T ((1+i)?n? - 1)/i

  	         Taxap = tj / 100;
              if(Val_Peri==1){
                
                Taxa_Calc = parseFloat((1+Taxap)*Val_Peri)

              }else
              {
                   Taxa_Calc = parseFloat((1 + Taxap) ^ parseFloat(Val_Peri));
              }

  	       

             
  	         //var s = CapInicial * (Math.pow(1 + Taxap, Val_Peri));
  	         var s = parseFloat(CapInicial * Taxa_Calc);
  	         var j = parseFloat((valorMensal * Taxa_Calc) - 1 / Taxap).toFixed(2);
  	          Val_Acu_Peri = (parseFloat(s) + parseFloat(j)).toFixed(2);
  	         var totalEmJuros = ((Val_Peri * valorMensal) + CapInicial).toFixed(2);


  	         var total = (parseFloat(Val_Acu_Peri) + parseFloat(totalEmJuros)).toFixed(2);

  	         document.getElementById("ValortotalAcumulado").innerHTML = Val_Acu_Peri;
  	         document.getElementById("ValortotalJuros").innerHTML = totalEmJuros;
  	         document.getElementById("Valortotal").innerHTML = total;


  	     }


