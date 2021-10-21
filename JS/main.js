   
//LLAMADAS///////////////////////////   
   let ejecutar = document.getElementById("ejecutar");
   let limpiar = document.getElementById("limpiar");
   let estado = true;

   

   let mostrarAños = document.getElementById("mostrarAños");
   let mostrarMeses = document.getElementById("mostrarMeses");
   let mostrarDias = document.getElementById("mostrarDias");

//FUNCIONES///////////////////////

const calculoPorAños = (miSalario, porAños) => {
   if (porAños >= 0 && porAños <= 50){
      mostrarAños.textContent = "";
      let enFuncionAños = parseFloat(porAños * miSalario);
      return enFuncionAños;
   }else{ 
      mostrarAños.textContent = '"COLOQUE UN RANGO DE 1 A 50 AÑOS"';
      let ninguno = 0;
      return ninguno;
   }
}


const calculoPorMeses = (miSalario,porMeses) => {
   mostrarMeses.textContent = "";
   if(porMeses >= 0 && porMeses <= 12){
      let sal1 = miSalario / 12;
      let sal2 = parseFloat(sal1 * porMeses);
      return sal2;
   }else{
      mostrarMeses.textContent = '"COLOQUE UN RANGO DE 1 A 12 MESES"';
      let ninguno1 = 0;
      return ninguno1;
      
   }     
}

const calculoPorDias = (miSalario,porDias) =>{
   mostrarDias.textContent = "";
   if(porDias >= 0 && porDias <= 31){
      let dia1 = miSalario / 12;
      let dia2 = dia1 / 30;
      let dia3 = parseFloat(dia2 * porDias);
      return dia3;
   }else{
      mostrarDias.textContent = '"COLOQUE UN MAXIMO DE 1 A 31 DIAS"';
      let ninguno2 = 0;
      return ninguno2;
     
   }
}

const calculoDesahucio = (miSalario, opciones) =>{
    if(opciones == "SI"){
       let duplicamosSalario = miSalario * 3;
       return duplicamosSalario;

    }else if (opciones == "NO"){ 
       let valor = 0;
       return valor;
    }
}


function Resultante(){

   //LLAMADAS
   let miSalario = document.getElementById("Salario").value;
   let porAños = document.getElementById("Años").value;
   let porMeses = document.getElementById("Meses").value;
   let porDias = document.getElementById("Dias").value;
   let opciones = document.getElementById("opciones").value;


   //CAJAS DE GUARDADO
   let guardarAños = document.getElementById("guardarAños");
   let guardarMeses = document.getElementById("guardarMeses");
   let guardarDias = document.getElementById("guardarDias");
   let guardarDesahucio = document.getElementById("guardarDesahucio"); 
   let guardarTotal = document.getElementById("guardarTotal");


   if(miSalario == "" || porAños == "" || porMeses == "" || porDias == "" ){
      Swal.fire({
         title:"¡RELLENAR TODOS LOS CAMPOS!",
         icon:'error',
         confirmButtonText:'Ok!',
         width:"280px",
         backdrop:false,     
         position:"center",
         //timer:5000,
         toast:true,
         timerProgressBar:false, 
         confirmButtonColor:"#203753",      //color del boton
         confirmButtonAriaLabel:"Confirmar",
         showCloseButton:false,
      })
      //alert("RELLENAR TODOS LOS CAMPOS");
   }else if (estado == true){
      
      let resultadoPorAños = calculoPorAños(miSalario, porAños);
      guardarAños.textContent = resultadoPorAños;
   
      let resultadoPorMeses = calculoPorMeses(miSalario,porMeses);
      guardarMeses.textContent = resultadoPorMeses;
   
      let resultadoPorDias = calculoPorDias(miSalario, porDias);
      guardarDias.textContent = resultadoPorDias;

      let resultadoDesahucio = calculoDesahucio(miSalario,opciones);
      guardarDesahucio.textContent = resultadoDesahucio;
   
      
   
      let total = resultadoPorAños + resultadoPorMeses + resultadoPorDias + resultadoDesahucio;
      guardarTotal.textContent = total; 
      

   }
}



ejecutar.addEventListener("click", () =>{
   Resultante();
})



limpiar.addEventListener("click" , function(){

   document.getElementById("Salario").value = "";
   
   document.getElementById("Años").value = "";
   document.getElementById("guardarAños").textContent = "0";

   document.getElementById("Meses").value ="";
   document.getElementById("guardarMeses").textContent = "0";

   document.getElementById("Dias").value = "";
   document.getElementById("guardarDias").textContent = "0";

  
   document.getElementById("guardarDesahucio").textContent = "0" ;

   document.getElementById("guardarTotal").textContent = "0";


   Swal.fire({
      title:"¡Datos eliminados,<br>Ingresar nuevos datos!",
      icon:'success',
      confirmButtonText:'Ok!',
      width:"280px",
      backdrop:false,     
      position:"center",
      //timer:5000,
      toast:true,
      timerProgressBar:false, 
      confirmButtonColor:"#203753",      //color del boton
      confirmButtonAriaLabel:"Confirmar",
      showCloseButton:false,
   })

})


