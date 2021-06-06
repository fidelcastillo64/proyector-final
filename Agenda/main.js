function agregarcontacto(){

    nom = document.getElementById("NombreInt").value;
    num = document.getElementById("NumeroInt").value;
    cor = document.getElementById("CorreoInt").value;
    nombres.push(nom);
    numeros.push(num);
    correos.push(cor);
    guardar();
    alert("contacto agregado con exito");
}
function vercontacto (){
    select = document.getElementById("selectorN1").value;
    posicion = nombres.indexOf(select);
    document.getElementById("numero").innerHTML = numeros[posicion];
    document.getElementById("correo").innerHTML = correos[posicion];
    
}

function editarcontacto(){
    indice = nombres.indexOf(document.getElementById("selectorN2").value);

        nuevonom = document.getElementById("NombreInt2").value;
        nuevonum = document.getElementById("NumeroInt2").value;
        nuevocor = document.getElementById("CorreoInt2").value;
        
        nombres[indice] = nuevonom;
        numeros[indice] = nuevonum;
        correos[indice] = nuevocor;
        guardar();
        alert("contacto editado con exito");
}
function guardar(){
    localStorage.setItem("nombresLS", nombres);
    localStorage.setItem("numerosLS", numeros);
    localStorage.setItem("correosLS", correos);
}
function cargar() {

    if (localStorage.getItem("nombresLs")) {

        //Sacar los datos
        nombres = localStorage.getItem("nombresLs");
        nombres = localStorage.getItem("numerosls");
        correos = localStorage.getItem("correosLs");
        console.log(nombres);

        //hacerlos Arreglo

        nombres = nombres.split(',');
        numeros = numeros.split(',');
        correos = correos.split(',');


    } else {

        //crear los arreglos
        nombres = [];
        numeros = [];
        correos = [];
        
    }
    document.getElementById("watch").style.display = "none";
    document.getElementById("edit").style.display = "none";
}

function seletor(){
    select = document.getElementById("selectorMenu").value;
    switch (select) {
        case 'Agregar':
            document.getElementById("Add").style.display = "inline";
            document.getElementById("watch").style.display = "none";
            document.getElementById("edit").style.display = "none";
            break;
        case 'Ver':
            document.getElementById("Add").style.display = "none";
            document.getElementById("watch").style.display = "inline";
            document.getElementById("edit").style.display = "none";
            CargarOpciones("selectorN1");
            break;
        case 'Editar':
            document.getElementById("Add").style.display = "none";
            document.getElementById("watch").style.display = "none";
            document.getElementById("edit").style.display = "inline";
            CargarOpciones("selectorN2");
            break;
        default:
            break;
    }
}
function CargarOpciones(id){
    opcion = "<option> selecccione el nombre del contacto</option>";
    for (let index = 0; index < nombres.length; index++) {
        opcion = opcion +  "<option>" + nombres[index]+ "</option>\n"
    }
    document.getElementById(id).innerHTML  = "";
    document.getElementById(id).innerHTML  = opcion;

}
