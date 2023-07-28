//variables
    //ejercicio_1

let numberFive = 5;
console.log (numberFive);
document.write(" " + numberFive);

let numberTen = 10;
console.log(numberTen);
document.write(" " + numberTen);

let numberthree = 3;
console.log (numberthree);
document.write(" " + numberthree);

let nameGirl = 'Susana';
console.log(nameGirl);
document.write(" " + nameGirl);

let surname = 'Perez';
console.log(surname);
document.write(" " + surname);

let abrirPuerta = true;
console.log(abrirPuerta);
document.write(" " + abrirPuerta);

//ejercicio_2
    //de tipo integer es la variable numberFive,  numberTen, numberthree)

let suma = numberFive + numberTen + numberthree;
console.log(suma);
document.write(" " + suma);

let resta = numberFive - numberthree;
console.log(resta);
document.write(" " + resta);

let multiplicacion = numberFive * numberTen * numberthree;
console.log(multiplicacion);
document.write(" " + multiplicacion);

let division = numberTen / numberFive;
console.log(division);
document.write(" " + division);

//ejercicio_3
    // las de tipo texto son name y surname

let sister = nameGirl + " " + surname;
console.log(sister);
document.write(" " + sister);

//funciones 
    //ejercicio_1

function saludo(firstName) {
    let mensaje = `Hola, ${firstName} `;
    return mensaje 
}

console.log(saludo("Pedro"));
document.write(" " + saludo("Pedro"));

//ejercicio_2

 function sumaFunction(x,y) {
    return x + y
 }

 console.log(sumaFunction(9, 5));
 document.write(" " + sumaFunction(9, 5));

 //ejercicio_3

 function parImpar(n) {
    if(n % 2 == 0) {
     let resultP = `el número ${n} es par`;
     return(resultP);
 
    } else {
     let resultI = `el número ${n} es impar`;
     return(resultI);
    }
  }
 
 console.log(parImpar(35));
 document.write(" " + parImpar(35));

 //objetos
    //ejercicio_1

    var myNewCar = {
        make: 'Citroen',
        model: 'Space',
        year: 2000,
        color: 'red',
        wheels: 4, 
        doors: 5,
        engine: {cylinders: 4, size: 2.2}
    };
 
    //ejercicio_2

    function makeCar() {
        let resultMakeCar = myNewCar.make;
        return(resultMakeCar);
    }

    console.log(makeCar());
    document.write(" " + makeCar());

    //ejercicio_3

    function doorsCar() {
        let resultDoorsCar = myNewCar.doors;
        return(resultDoorsCar);
    }

    console.log(doorsCar());
    document.write(" " + doorsCar());

    //ejercicio_3

    function engineCar() {
        let resultEngineCar = myNewCar.engine.size;
        return(resultEngineCar);
    }

    console.log(engineCar());
    document.write(" " + engineCar());

    //arrays
        //ejercicio_1

    let studentAge = [13, 23, 33, 14, 24, 34, 15, 25, 35, 32];

    //ejercicio_2

    studentAge.forEach(element => console.log(element));
    document.write(" " + studentAge);

    //ejercicio_3

    let addNum = studentAge.push(18);
    studentAge.forEach(element => console.log(element));
    document.write(" " + studentAge);

    //ejercicio_4

    let pares = [];
    let impares = [];

    for(let i= 0;i<studentAge.length;i++){
        if(i % 2 ==0){
            pares.pop(studentAge[i]);
        }
        else{
            impares.push(studentAge[i]);
        }
    }

    console.log(" " + impares);
    document.write(" " + impares);

    //ejercicio_5

    let max = Math.max(...studentAge);
    console.log(max);
    document.write(" " + max);

    //ejercicio_6
    
    let min = Math.min(...studentAge);
    console.log(min);
    document.write(" " + min);

    //ejercicio_7

    function lowerLetter() {
        let hello = '¡HOLA Miriam!'.toLowerCase();
        return(hello);
    }
    
    console.log(lowerLetter());
    document.write(" " + lowerLetter());

    //ejercicio_8

    function capitalLetter() {
        let bye = '¡Adios Miriam!'.toUpperCase();
        return(bye);
    }

    console.log(capitalLetter());
    document.write(" " + capitalLetter());

    //ejercicio_9 

    let studentName = ["carlos", "rodrigo", "maría", "susana"];

    let capName = studentName;

    for (let i = 0; i < capName.length; i++) {
        capName[i] = capName[i][0].toUpperCase() + capName[i].substr(1);
    }

    console.log(capName);
    document.write(" " + capName);

    //Manipulación del Dom
        //ejercicio_1

    function logInMessage() {
        console.log("Está usted en la página de registro");
    }

    let activeButton = document.getElementById("buttonlogIn");
    console.log(activeButton);

    activeButton.onclick = addEventListener("click", logInMessage);
    //falta imprimir en pantalla el mensaje (solo sale en consola) 

    //ejercicio_2

    let title = document.querySelector('#h2Practic');
    title.textContent = "Práctica de Java Script";

    console.log(title);
    
    //ejercicio_3
        //oculta el html 
    function noShowElement() {
        document.getElementById('ocultTitle').style.display = 'none';
    }

    console.log(noShowElement());

        //muestra el html
    function ShowElement() {
        document.getElementById('ocultTitle').style.display = 'block';
    }

    console.log(ShowElement());

    //ejercicio_4

    let tenNames = ["Pedro", "María", "Juan", "Sofia", "Rodrigo", "Elisa", "Carlos", "Elena", "Luis", "Carmen"];

    //ejercicio_5

    console.log(tenNames);
    document.write(" " + tenNames);

    //ejercicio_6

    let eightNumbers = [23, 32, 45, 54, 67, 76, 98, 89];

    //ejercicio_7

    console.log(eightNumbers.length);
    document.write(" " + eightNumbers.length);

    //ejercicio_8

	function printDOM(node, prefix) {
		console.log(`${prefix} ${node.nodeName}  :  ${node.nodeType}  ->  ${node.nodeValue}`);
		for (let i = 0; i < node.childNodes.length; i++) {
		printDOM(node.childNodes[i], `${prefix} \t`);
		}
	}

    printDOM(document.getElementById("miFormulario"), "");

    //ejercicio_9

    function creaTabla() {
    
        var body = document.getElementsByTagName("body")[0];
      
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        for (var i = 0; i < 2; i++) {
          
          var hilera = document.createElement("tr");
      
          for (var j = 0; j < 2; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
          tblBody.appendChild(hilera);
        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "2");
      }

      //ejercicio_10

    let teachers = [
        {
            id: 1,
            name: "Carlos",
            status: "free",
            species: "human",
            type: "green",
            gender: "man",
        },
        {
            id: 2,
            name: "sofía",
            status: "ocuped",
            species: "human",
            type: "pink",
            gender: "woman",
        },
        {
            id: 3,
            name: "Pedro",
            status: "free",
            species: "human",
            type: "yellow",
            gender: "man",
        },
        {
            id: 4,
            name: "Carmen",
            status: "free",
            species: "human",
            type: "black",
            gender: "woman",
        },
        {
            id: 5,
            name: "Luis",
            status: "ocuped",
            species: "human",
            type: "red",
            gender: "man",
        },
        {
            id: 6,
            name: "Veronica",
            status: "free",
            species: "human",
            type: "white",
            gender: "woman",
        },
        {
            id: 7,
            name: "Cesar",
            status: "free",
            species: "human",
            type: "orange",
            gender: "man",
        },
        {
            id: 8,
            name: "Carlota",
            status: "ocuped",
            species: "human",
            type: "darkgreen",
            gender: "woman",
        },
        {
            id: 9,
            name: "Manolo",
            status: "free",
            species: "human",
            type: "lightpink",
            gender: "man",
        },
        {
            id: 10,
            name: "Helena",
            status: "free",
            species: "human",
            type: "grey",
            gender: "woman",
        },
    ];

//ejercicio_11

function generarTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < teachers.length; i++) {
      var teacher = teachers[i];
      
      var hilera = document.createElement("tr");
      
      var celdaId = document.createElement("td");
      var textoId = document.createTextNode(teacher.id);
      celdaId.appendChild(textoId);
      hilera.appendChild(celdaId);
  
      var celdaNombre = document.createElement("td");
      var textoNombre = document.createTextNode(teacher.name);
      celdaNombre.appendChild(textoNombre);
      hilera.appendChild(celdaNombre);
  
      var celdaEstado = document.createElement("td");
      var textoEstado = document.createTextNode(teacher.status);
      celdaEstado.appendChild(textoEstado);
      hilera.appendChild(celdaEstado);
  
      var celdaEspecie = document.createElement("td");
      var textoEspecie = document.createTextNode(teacher.species);
      celdaEspecie.appendChild(textoEspecie);
      hilera.appendChild(celdaEspecie);
  
      var celdaTipo = document.createElement("td");
      var textoTipo = document.createTextNode(teacher.type);
      celdaTipo.appendChild(textoTipo);
      hilera.appendChild(celdaTipo);
  
      var celdaGenero = document.createElement("td");
      var textoGenero = document.createTextNode(teacher.gender);
      celdaGenero.appendChild(textoGenero);
      hilera.appendChild(celdaGenero);
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    
    tabla.setAttribute("border", "1");
    
    body.appendChild(tabla);
}
      


    
    
    
    
  

    














