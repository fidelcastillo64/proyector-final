let productos = [[0,"Galletas",15],
                [1,"Sabritas",13],
                [2,"Agua",10],
                [3,"Chocolate",20]];
let carrito=[];
var unavez0 = 0;
var unavez1 = 0;
var unavez2 = 0;
var unavez3 = 0;

window.addEventListener("load",cargar);

function cargar()
{
    s = document.querySelector('section');
    for(i=0;i<productos.length;i++)
    {
        s.innerHTML+="<div id='"+productos[i][0]+"'>"+
                    "<h1>"+productos[i][1]+"</h1>"+
                    "<p>$"+productos[i][2]+"</p>"+
                    "<button onclick='agregar("+productos[i][0]+")'>+</button>"+
                    "</div>"
    }
}

function agregar(id)
{
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
    switch (id) {
        case 0:
            unavez0 = unavez0 + 1;
            break;
        case 1:
            unavez1 = unavez1 + 1;
            break;
        case 2:

            unavez2 = unavez2 + 1;
            break;
        case 3:
            unavez3 = unavez3 + 1;
            break; 
        default:
            alert("that????????????");
            break;
    }
    let navegador = document.querySelector('nav').innerHTML;
    var total;
    total = ((unavez0*productos[0][2])+(unavez1*productos[1][2])+(unavez2*productos[2][2])+ (unavez3*productos[3][2]) );
    navegador =
    "<div id='P"+productos[0][0]+"'>"+
    "<h1>" + (unavez0)+ " " +productos[0][1]+"</h1>"+
    "<p>$"+(productos[0][2]*unavez0)+"</p>"+
    "</div>" + 
    "<div id='P"+productos[1][0]+"'>"+
    "<h1>" + (unavez1)+ " " +productos[1][1]+"</h1>"+
    "<p>$"+(productos[1][2]*unavez1)+"</p>"+
    "</div>" +
    "<div id='P"+productos[2][0]+"'>"+
    "<h1>" + (unavez2)+ " " +productos[2][1]+"</h1>"+
    "<p>$"+(productos[2][2]*unavez2)+"</p>"+
    "</div>"+
    "<div id='P"+productos[3][0]+"'>"+
    "<h1>" + (unavez3)+ " " +productos[3][1]+"</h1>"+
    "<p>$"+(productos[3][2]* unavez3)+"</p>"+
    "</div>"
    +
    "<div id='total'>"+
    "<h5> TOTAL A PAGA</h5>"+
    "<p>$"+total+"</p>"+
    "</div>"
    ;

    document.querySelector('nav').innerHTML = navegador;
    if (unavez0 == 0) {
        document.getElementById('P0').style.display = 'none';
    } else {
        document.getElementById('P0').style.display = 'block';
    }
    if (unavez1 == 0) {
        document.getElementById('P1').style.display = 'none';
    } else {
        document.getElementById('P1').style.display = 'block';
    }
    if (unavez2 == 0) {
        document.getElementById('P2').style.display = 'none';
    } else {
        document.getElementById('P2').style.display = 'block';
    }
    if (unavez3 == 0) {
        document.getElementById('P3').style.display = 'none';
    } else {
        document.getElementById('P3').style.display = 'block';
    }
    
}
function mostrarCarrito()
{
    let listaProductos = "";
    for(i=0;i<carrito.length;i++)
    {
        for(j=0;j<productos.length;j++)
        {
            if(productos[j][0]==carrito[i])
            {
                listaProductos+="- "+productos[j][1]+" $"+productos[j][2]+"\n";
            }
        }
    }
    alert("Carrito:\n"+listaProductos);


}
function visibilidad()
{
    document.querySelector('nav').classList.toggle("visible");
    document.querySelector('section').classList.toggle("sn");
    mostrarCarrito();
}