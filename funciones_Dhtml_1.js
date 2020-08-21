function cambiarColor()
{
  var tit=document.getElementById('titulo1');
  tit.style.color='#ff0000';
}

function cambiarTamanoFuente()
{
//Solo se puede cambiar una propiedad a la vez, por eso en este ejemplo solo se puede dejar una descomentada
  var tit=document.getElementById('titulo1');
//   tit.style.fontFamily = 'Courier New', Courier, monospace;
  tit.style.fontSize = '50px';
//   tit.style.textAlign = 'right';
}

function cambiarFuente(tam)
{
  var tit=document.getElementById('comentarios1');
  tit.style.fontSize=`${tam}px`;
}

function cantidadHijos()
{
  var lista=document.getElementById('bloque1');
  console.log(`TRABAJANDO CON childNodes`);
  console.log(lista.childNodes);
  lista.childNodes.forEach((elemento, indice) => console.log(elemento, indice));

  alert('La cantidad de hijos del nodo div es: '+lista.childNodes.length);  
  var cadena="";
  for(var x=0;x<lista.childNodes.length;x++) 
  {
    if (lista.childNodes[x].nodeType==Node.TEXT_NODE)
      cadena=cadena+"Nodo tipo Texto\n";
    if (lista.childNodes[x].nodeType==Node.ELEMENT_NODE)
      cadena=cadena+"Nodo tipo Elemento\n";
    cadena += "nodeName: "+ lista.childNodes[x].nodeName + " --- nodeType: " + lista.childNodes[x].nodeType + " --- nodeValue: " + lista.childNodes[x].nodeValue +"\n\n";
  }
  alert(cadena);
}

function cantidadHijosDeDivs()
{
  var contenedorjeto1=document.getElementById('bloque2');
  alert('La cantidad de hijos del primer div es:'+contenedorjeto1.childNodes.length);  
  var contenedorjeto2=document.getElementById('bloque3');
  alert('La cantidad de hijos del segundo div es:'+contenedorjeto2.childNodes.length);  
}

function cambiarTexto()
{
  console.log("Accediendo a un nodo de texto de un elemento HTML (childNodes - nodeValue)");
  var tit=document.getElementById('tituloCambiante');

  console.log(tit.childNodes);
  console.log("Valor antes del cambio");
  tit.childNodes.forEach((elemento, indice) => console.log(elemento, indice));

  
  tit.childNodes[0].nodeValue='Ahora vemos el nuevo título';
  
  console.log("Valor después del cambio");
  tit.childNodes.forEach((elemento, indice) => console.log(elemento, indice));
}

function sumarUno()
{
  var contenedorj=document.getElementById('contador1');
  console.log("Valor antes del cambio");
  console.log(`nodeValue: ${contenedorj.childNodes[0].nodeValue} **** nodeName: ${contenedorj.childNodes[0].nodeName} **** nodeType: ${contenedorj.childNodes[0].nodeType}`);
//   contenedorj.childNodes.forEach((elemento, indice, array) => console.log(elemento, indice, array));
//   for(let nodo of contenedorj.childNodes)
//       console.log(nodo);  
  contenedorj.childNodes[0].nodeValue=parseInt(contenedorj.childNodes[0].nodeValue)+1;
  console.log("Valor después del cambio");
  console.log(`nodeValue: ${contenedorj.childNodes[0].nodeValue} **** nodeName: ${contenedorj.childNodes[0].nodeName} **** nodeType: ${contenedorj.childNodes[0].nodeType}`);   
//   contenedorj.childNodes.forEach((elemento, indice, array) => console.log(elemento, indice, array));
//   for(let nodo of contenedorj.childNodes)
//       console.log(nodo);
}

function cambiarColorDivDesdeHijo()
{
  var hijo=document.getElementById('parrafo1');
  var padre=hijo.parentNode;
  padre.style.backgroundColor='#ff0000';
  console.log('Soy el hijo:', hijo);
  console.log('Soy el padre:', hijo.parentElement);
  console.log('Soy el padre:', hijo.parentNode);
}

function cambiarTamFuente()
{
  var hijo=document.getElementById('parrafo1.1');
  var padre=hijo.parentNode;
  padre.style.fontSize='60px';  
  console.log('Soy el hijo:', hijo);
  console.log('Soy el padre:', hijo.parentElement);
}

function proximoParrafo()
{
  var puntero1=document.getElementById('parrafo1.2');
  while (puntero1!=null)
  {
    console.log('Estoy parado en :', puntero1);
    //console.log('Mi hermano siguiente es :', puntero1.nextSibling);
    console.log('Mi hermano siguiente es :', puntero1.nextElementSibling);
    //console.log('Mi hermano anterior es :', puntero1.previousSibling);
    console.log('Mi hermano anterior es :', puntero1.previousElementSibling);

    alert(puntero1.childNodes[0].nodeValue);
    puntero1 = puntero1.nextElementSibling;

    //Este bloque de codigo hace uso de nextSibling, el cual devuelve el hermano siguiente sea un elemento html o no.
    //por ejemplo, puede devolver los elementos texto que se crean cuando se presiona enter entre etiquetas html
//     if (puntero1.nodeType==Node.ELEMENT_NODE)
//       alert(puntero1.childNodes[0].nodeValue);
//     puntero1=puntero1.nextSibling;
  }
}

function mostrarFilaTabla()
{
  var puntero1=document.getElementById('elemento1');
  while (puntero1!=null)
  {
        //Forma larga usando nextSibling
//     if (puntero1.nodeType==Node.ELEMENT_NODE)
//       alert(puntero1.childNodes[0].nodeValue);
//     puntero1=puntero1.nextSibling;
      //Forma corta usando
      console.log('Estoy parado en :', puntero1);
      console.log('Mi hermano siguiente es :', puntero1.nextElementSibling);
      console.log('Mi hermano anterior es :', puntero1.previousElementSibling);
      alert(puntero1.childNodes[0].nodeValue)
      puntero1 = puntero1.nextElementSibling;
  }
}

function proximoParrafo2(id)
{
  var puntero1=document.getElementById(id);
  console.log('Estoy parado en el padre:', puntero1);
  if(puntero1.id == 'parrafos2'){
      //var puntero2=puntero1.firstChild;
      var puntero2=puntero1.firstElementChild;
      while (puntero2!=null)
      {
            console.log('Estoy parado en el hijo:', puntero2);
            console.log('Mi hermano siguiente es :', puntero2.nextElementSibling);
            console.log('Mi hermano anterior es :', puntero2.previousElementSibling);
            if (puntero2.nodeType==Node.ELEMENT_NODE)
            alert(puntero2.childNodes[0].nodeValue);
            puntero2=puntero2.nextSibling;
      }
  }
  else if(puntero1.id == 'parrafos2.1'){
      //var puntero2=puntero1.lastChild;
      var puntero2=puntero1.lastElementChild;      
      while (puntero2!=null)
      {
            console.log('Estoy parado en el  hijo :', puntero2);
            console.log('Mi hermano anterior es :', puntero2.previousElementSibling);
            console.log('Mi hermano siguiente es :', puntero2.nextElementSibling);
            if (puntero2.nodeType==Node.ELEMENT_NODE)
                  alert(puntero2.childNodes[0].nodeValue);
            puntero2=puntero2.previousSibling;
      }
  }
}

function cambiarParrafos()
{
  var lista=document.getElementsByTagName('p');
  console.log("El arreglo de parrafos es: ", lista);
  for(f=0;f<lista.length;f++)
  {
      console.log("Estoy parado en: ", lista[f]);
      lista[f].childNodes[0].nodeValue=lista[f].childNodes[0].nodeValue + '.';
      lista[f].style.color='green';
  }
}

function cambiarParrafosBloque2()
{
  var nodoContenedor=document.getElementById("bloque2.1");
  var lista=nodoContenedor.getElementsByTagName('p');
  var listaH2 = nodoContenedor.getElementsByTagName('h2');
  console.log("El elemento contenedor es: ", nodoContenedor);
  console.log("El arreglo de parrafos es: ", lista, lista.length);
  console.log("El arreglo de titulos es  es: ", listaH2, listaH2.length);

  for(f=0;f<lista.length;f++)
  {   
      console.log(`Soy el parrafo: ${f+1}`, lista[f]);
      lista[f].childNodes[0].nodeValue=lista[f].childNodes[0].nodeValue + '.';
      lista[f].style.color='greenyellow';
      lista[f].style.fontSize='40px';
  }
  for(let titulo of listaH2){
      console.log(`Soy titulo: `, titulo);
      titulo.style.color = 'deeppink';
  }
}

function ocultarParrafos()
{
  var contenedorj=document.getElementById("bloque22");
  var lista=contenedorj.getElementsByTagName('p');
  var bandera = false;
  for(f=0;f<lista.length;f++)
  {
   lista[f].style.display='none';
  }
}

var contadorParrafos=1;
function agregarTextoParrafo(id)
{
      var nuevoTexto=document.createTextNode('Nuevo texto '+contadorParrafos+' - ');
      var nparrafo=document.getElementById(id);
      nparrafo.appendChild(nuevoTexto);
      contadorParrafos++;
}

function eliminarTextoDesdeFinal(id)
{
  var nparrafo=document.getElementById(id);
  if (nparrafo.hasChildNodes())
  {
        
    nparrafo.removeChild(nparrafo.lastChild);//Con esta instruccion se eliminan partiendo del ultimo hijo
    contadorParrafos--;
  }
}

function eliminarTextoDesdeInicio(id)
{
  var nparrafo=document.getElementById(id);
  if (nparrafo.hasChildNodes())
  {
    nparrafo.removeChild(nparrafo.firstChild);//Con esta instruccion se eliminan partiendo del primer hijo
    contadorParrafos--;
  }
}

function mostrarSoluciones()
{
  var nt;
  var contenedorj;

  nt=document.createTextNode('Respuesta 1');
  contenedorj=document.getElementById('opcion1');
  contenedorj.appendChild(nt);

  nt=document.createTextNode('Respuesta 2');
  contenedorj=document.getElementById('opcion2');
  contenedorj.appendChild(nt);

  nt=document.createTextNode('Respuesta 3');
  contenedorj=document.getElementById('opcion3');
  contenedorj.appendChild(nt);
}

function agregarParrafo(id)
{
  var nParrafo=document.createElement('p'); 
  var nTexto=document.createTextNode('Hola Mundo');
  nParrafo.appendChild(nTexto);
  var contenedor=document.getElementById(id);
  contenedor.appendChild(nParrafo);
  console.log('Soy el texto del parrafo creado:', nTexto);
  console.log('Soy el parrafo creado:', nParrafo);
  console.log('Soy el contenedor del parrafo creado:', contenedor);
}

function mostrarSolucionesLi(id)
{
  var nt;
  var contenedorj;
  var elemento;
  contenedorj=document.getElementById(id);

  elemento=document.createElement('li');
  nt=document.createTextNode('Respuesta 1');
  elemento.appendChild(nt);  
  contenedorj.appendChild(elemento);

  elemento=document.createElement('li');
  nt=document.createTextNode('Respuesta 2');
  elemento.appendChild(nt);
  contenedorj.appendChild(elemento);
}

function insertarEnMedio(idDiv, idParrafo)
{
  var elemento=document.createElement('p');
  var nodotexto=document.createTextNode('Párrafo insertado antes del parrafo ' + idParrafo);
  elemento.appendChild(nodotexto);
  var puntero=document.getElementById(idParrafo);
  var pa=document.getElementById(idDiv);
  pa.insertBefore(elemento,puntero); 
}

function insertarParrafoAlPrincipio(idContenedor)
{
  var elemento=document.createElement('p');
  var nodotexto=document.createTextNode('Ahora este es el primer párrafo');
  elemento.appendChild(nodotexto);
  var pa=document.getElementById(idContenedor);
  var puntero=pa.firstChild;
  pa.insertBefore(elemento,puntero); 
}

var contador2=1;
function agregarOtroParrafo(idContenedor)
{
  var nuevotexto=document.createTextNode("Hola Mundo " + contador2 + " - ");
  var nuevoelemento=document.createElement("p");   
  contador2++;

  nuevoelemento.appendChild(nuevotexto);
  var puntero=document.getElementById(idContenedor);
  puntero.appendChild(nuevoelemento);
}

function eliminarPrimerElemento(idContenedor)
{
  var puntero=document.getElementById(idContenedor);
//   if (puntero.childNodes.length>0) 
//     puntero.removeChild(puntero.childNodes[0]);  

    if(puntero.hasChildNodes)
      puntero.removeChild(puntero.firstElementChild);
}

function eliminarUltimoElemento(idContenedor)
{
  var puntero=document.getElementById(idContenedor);
//   if (puntero.childNodes.length>0) 
//     puntero.removeChild(puntero.childNodes[puntero.childNodes.length-1]);  
      if(puntero.hasChildNodes)
            puntero.removeChild(puntero.lastElementChild);
}

function eliminarElementoPorPosicion(idContenedor, posicion)
{
  var puntero=document.getElementById(idContenedor);
  var valor=document.getElementById(posicion).value -1;
  console.log('Soy puntero.childElementCount: ', puntero.childElementCount);
  console.log('Soy puntero.childNodes: ', puntero.childNodes);
  console.log('Soy puntero.children: ', puntero.children);

//   if (valor<puntero.childNodes.length)
//     puntero.removeChild(puntero.childNodes[valor]); //Con children tambien se toman los elementos texto que se crean con cada salto de linea
  
  if(valor<=puntero.children.length)  
    puntero.removeChild(puntero.children[valor]);
}

function crearElementoyAtributo(idDiv)
{
  var nodotexto=document.createTextNode('google');
  var elemento=document.createElement('a');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href','http://www.google.com.ar');

  var puntero=document.getElementById(idDiv);
  puntero.appendChild(elemento);  
}

function definirAtributoDeTabla(idTabla,idBorde)
{
  var reftabla=document.getElementById(idTabla);
  var valorBorde = document.getElementById(idBorde).value;
  reftabla.setAttribute('border',valorBorde);
}

function eliminarAtributoDeEnlaces(idenlace1, idenlace2)
{
  var puntero=document.getElementById(idenlace1);
  puntero.removeAttribute('href');
  puntero=document.getElementById(idenlace2);
  puntero.removeAttribute('href');
}

function inicializarAtributoDeEnlaces(idenlace1,idenlace2)
{
  var puntero=document.getElementById(idenlace1);
  puntero.setAttribute('href','http://www.google.com.ar');
  puntero=document.getElementById(idenlace2);
  puntero.setAttribute('href','http://www.yahoo.com.ar');
}

function borrarAtributoDeTabla(idTabla)
{
  var reftabla=document.getElementById(idTabla);
  reftabla.removeAttribute('border');
}

function recuperarAtributoDeEnlace(idEnlace)
{
  var puntero=document.getElementById(idEnlace);
  alert(puntero.getAttribute('href'));
}

function CopiarHrefDeEnlaces(idEnlace1, idEnlace2)
{
  var puntero1=document.getElementById(idEnlace1);
  var puntero2=document.getElementById(idEnlace2);
  puntero2.setAttribute('href',puntero1.getAttribute('href'));
}

function cambiarAtributcontenedororderDeTabla(idTabla)
{
  var reftabla=document.getElementById(idTabla);
  if (reftabla.hasAttribute('border'))
    reftabla.removeAttribute('border');
  else
    reftabla.setAttribute('border','20');
}

function aumentarBordeDeTabla(idTabla)
{
  var reftabla=document.getElementById(idTabla);
  if (reftabla.hasAttribute('border'))
  {
    var valor=reftabla.getAttribute('border');
    valor++;
    reftabla.setAttribute('border',valor);
  }
  else
    reftabla.setAttribute('border','1');
}

var orden=1;
function clonarNodos(idDiv, idDivNuevos)
{
  var div = document.getElementById(idDiv);
  var nuevos = div.cloneNode(true);
  nuevos.style.id='enlaces'+orden;
  orden++;
  div = document.getElementById(idDivNuevos);
  div.appendChild(nuevos);
  console.log('Soy el elemento despues de una clonacion', div);
}

function clonarNodoParrafo(idOrigen, idDestino)
{
  var id = document.getElementById(idOrigen);
  var nuevos = id.cloneNode(true);
  nuevos.style.id = nuevos.style.id + 'b';
  id = document.getElementById(idDestino);
  id.appendChild(nuevos);
}

function tipoDeNodos(idDiv)
{
  var puntero=document.getElementById(idDiv);
  var expresion = `ELEMENTO PADRE:
  nodeName: ${puntero.nodeName} ---- nodeType: ${puntero.nodeType} ---- nodeValue: ${puntero.nodeValue}`;
  console.log('Soy el padre', puntero);
  alert (expresion);

  var hijo = puntero.childNodes[0];
  expresion = `ELEMENTO HIJO:
  nodeName: ${hijo.nodeName} ---- nodeType: ${hijo.nodeType} ---- nodeValue: ${hijo.nodeValue}`;
  console.log('Soy el hijo', hijo);
  alert (expresion);

  var nieto = hijo.childNodes[0];
  expresion = `ELEMENTO NIETO:
  nodeName: ${nieto.nodeName} ---- nodeType: ${nieto.nodeType} ---- nodeValue: ${nieto.nodeValue}`;
  console.log('Soy el nieto', nieto);
  alert (expresion);
}

function tipoDeNodosDelParrafo(idParrafo)
{
  var puntero=document.getElementById(idParrafo);
  console.log('Soy el padre', puntero, 'Tengo Estos hijos', puntero.childNodes.length, puntero.childNodes);
  for(f=0;f<puntero.childNodes.length;f++)
  {  
      console.log('Soy un hijo', puntero.childNodes[f]);    
      console.log(puntero.childNodes[f].nodeName + " es de tipo " + puntero.childNodes[f].nodeType + " tiene el valor " + puntero.childNodes[f].nodeValue);   
      if(puntero.childNodes[f].hasChildNodes())
            for(let nieto of puntero.childNodes[f].childNodes){
                  console.log('Soy un nieto', nieto);    
                  console.log(nieto.nodeName + " es de tipo " + nieto.nodeType + " tiene el valor " + nieto.nodeValue);   
            }

      //alert (puntero.childNodes[f].nodeName + " es de tipo " + puntero.childNodes[f].nodeType + " tiene el valor " + puntero.childNodes[f].nodeValue);
  }
}

//************************************************************************************************************************************************************* */
//************************************************************************************************************************************************************* */
//FUNCIONES PARA LA DINAMICA DE CAMBIAR LAS PROPIEDADES DE UN PARRAFO
function cambiarColorFondoParrafo()
{
  var pun=document.getElementById('colorfondo');
  var punrec=document.getElementById('recuadro');
  punrec.style.backgroundColor=pun.value;
}

function cambiarColorFuenteParrafo()
{
  var pun=document.getElementById('colorfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.color=pun.value;
}

function cambiarTamanoFuenteParrafo()
{
  var pun=document.getElementById('tamanofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontSize=pun.value;
}

function cambiarTipoFuenteParrafo()
{
  var pun=document.getElementById('tipofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontFamily=pun.value;
}

function cambiarEstiloFuenteParrafo()
{
  var pun=document.getElementById('estilofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontStyle=pun.value;
}

function cambiarPesoFuenteParrafo()
{
  var pun=document.getElementById('pesofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontWeight=pun.value;
}

function cambiarAlineacionFuenteParrafo()
{
  var pun=document.getElementById('alineacionfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.textAlign=pun.value;
}

function cambiarDecoracionFuenteParrafo()
{
  var pun=document.getElementById('decoracionfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.textDecoration=pun.value;
}

function cambiarEspacioLetrasParrafo()
{
  var pun=document.getElementById('espacioletras');
  var punrec=document.getElementById('recuadro');
  punrec.style.letterSpacing=pun.value;
}

function cambiarEspacioPalabrasParrafo()
{
  var pun=document.getElementById('espaciopalabras');
  var punrec=document.getElementById('recuadro');
  punrec.style.wordSpacing=pun.value;
}

function cambiarTransformacionTextoParrafo()
{
  var pun=document.getElementById('transformaciontexto');
  var punrec=document.getElementById('recuadro');
  punrec.style.textTransform=pun.value;
}

function cambiarAnchcontenedorordeParrafo()
{
  var pun=document.getElementById('anchcontenedororde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderWidth=pun.value;
}

function cambiarEstilcontenedorordeParrafo()
{
  var pun=document.getElementById('estilcontenedororde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderStyle=pun.value;
}

function cambiarColorBordeParrafo()
{
  var pun=document.getElementById('colorborde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderColor=pun.value;
}

function cambiarPaddingParrafo()
{
  var pun=document.getElementById('padding');
  var punrec=document.getElementById('recuadro');
  punrec.style.padding=pun.value;
}

function cambiarMarginParrafo()
{
  var pun=document.getElementById('margin');
  var punrec=document.getElementById('recuadro');
  punrec.style.margin=pun.value;
}
//************************************************************************************************************************************************************* */
//FUNCIONES DE OTRO EJEMPLO
//************************************************************************************************************************************************************* */
function cambiarEstiloLista(idLista, idSelecTipoLista)
{
  var pun=document.getElementById(idLista);
  var punselect=document.getElementById(idSelecTipoLista);
  pun.style.listStyleType=punselect.value;
}

//************************************************************************************************************************************************************* */
//FUNCIONES DE OTRO EJEMPLO
//************************************************************************************************************************************************************* */
var cantHijos = 0;
function agregarHijo(idFielSet) 
{
  cantHijos++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'text';
  nuevohijo.name = 'nombre' + cantHijos;
  nuevohijo.id = 'nombre' + cantHijos;
  var fs = document.getElementById(idFielSet)
  console.log('Soy fs antes de añadir un input para hijo', fs);
  fs.appendChild(nuevohijo);
  fs.appendChild(document.createElement('br'));
  fs.appendChild(document.createElement('br'));
  console.log('Soy fs después de añadir un input para hijo', fs);
}

//************************************************************************************************************************************************************* */
//FUNCIONES DE OTRO EJEMPLO
//************************************************************************************************************************************************************* */
function crearText(idSeccion, idSeleccion) 
{
  var actuales=document.getElementById(idSeccion);
  var cant=actuales.childNodes.length;
  for(f=0;f<cant;f++)
  {
    actuales.removeChild(actuales.childNodes[0]);
  }
  var se=document.getElementById(idSeleccion);
  var cantidad=0;
  for(f=0;f<se.value;f++)
  {
    cantidad++;
    var nuevohijo = document.createElement('input');
    nuevohijo.type = 'text';
    nuevohijo.name = 'nombre' + cantidad;
    nuevohijo.id = 'nombre' + cantidad;
    document.getElementById(idSeccion).appendChild(nuevohijo);
    document.getElementById(idSeccion).appendChild(document.createElement('br'));
    document.getElementById(idSeccion).appendChild(document.createElement('br'));
  }
}

//************************************************************************************************************************************************************* */
//FUNCIONES DE OTRO EJEMPLO
//************************************************************************************************************************************************************* */
function mostrarAtributos(contenedorjeto)
{
  var ref=document.getElementById('titulo2');
  ref.firstChild.nodeValue='Name: '+contenedorjeto.name+' --- Id: '+contenedorjeto.id+' --- Value: '+contenedorjeto.value+' --- Type: '+contenedorjeto.type;
  
}

function concatenar(contenedorjeto)
{
  var ref=document.getElementById('titulo3');
  ref.firstChild.nodeValue=ref.firstChild.nodeValue+contenedorjeto.value;
}

function presionado(e)
{
  alert('Coordenada x de la flecha del mouse:'+ e.clientX+'\n'+
        'Coordenada y de la flecha del mouse:'+ e.clientY);  
  var contenedorj = document.getElementById('ayuda');
  contenedorj.style.display = 'block';
  contenedorj.style.left = e.clientX+10+'px';
  contenedorj.style.top = e.clientY+10+'px';
  console.log('Soy el contenedorjeto div', contenedorj)
}


//************************************************************************************************************************************************************* */
//FUNCIONES DE OTRO EJEMPLO: EVENTOS EN DL DOM SEGUN W3C
//************************************************************************************************************************************************************* */
window.addEventListener('load',inicializarEventos,false);

function inicializarEventos(e)
{
  var boton1=document.getElementById('b11');
  boton1.addEventListener('click',presionBoton,false);  
  var boton2=document.getElementById('b22');
  boton2.addEventListener('click',presionBoton,false);  
  //////////////////////////////////////////////////////////////////

  var boton111=document.getElementById('b111');
  boton111.addEventListener('click',cambiarColorBoton,false);  
  var boton222=document.getElementById('b222');
  boton222.addEventListener('click',cambiarColorBoton,false);  
  //////////////////////////////////////////////////////////////////

  var ob=document.getElementById('recuadro2');
  ob.addEventListener('click',presionMouse,false);
  //////////////////////////////////////////////////////////////////
  //Añadiendo captura de eventos con false y con true
  var contenedor;
  contenedor=document.getElementById('div1i');
  contenedor.addEventListener('click',presionRecuadroInte,false);
  contenedor=document.getElementById('div1e');
  contenedor.addEventListener('click',presionRecuadroExte,false);

  contenedor=document.getElementById('div2i');
  contenedor.addEventListener('click',presionRecuadroInte,true);
  contenedor=document.getElementById('div2e');
  contenedor.addEventListener('click',presionRecuadroExte,true);
  //////////////////////////////////////////////////////////////////

  var ob=document.getElementById('div11');
  ob.addEventListener('click',presionRecuadroExte2,false);
  ob=document.getElementById('div22');
  ob.addEventListener('click',presionRecuadroInte2,false);
  //////////////////////////////////////////////////////////////////

  var boton1=document.getElementById('b1111');
  boton1.addEventListener('click',presionBoton2,false);
  var boton2=document.getElementById('b2222');
  boton2.addEventListener('click',presionBoton2,false);
  var boton3=document.getElementById('b3333');
  boton3.addEventListener('click',presionBoton2,false);
  document.addEventListener('click',presionDocumento,false);
  //////////////////////////////////////////////////////////////////
  
  ob=document.getElementById('enlaceGoogle');
  ob.addEventListener('click',presionEnlace,false);
  //////////////////////////////////////////////////////////////////

  var ob=document.getElementById('enlaceBuscar');
  ob.addEventListener('click',presionEnlaceBuscar,false);
  //////////////////////////////////////////////////////////////////

  ob=document.getElementById('botonCreaEnlaces');
  ob.addEventListener('click',crearEnlaces,false);
  //////////////////////////////////////////////////////////////////

  ob=document.getElementById('botonCreaLista');
  ob.addEventListener('click',crearLista,false);
  //////////////////////////////////////////////////////////////////

  ob=document.querySelector("#boton11");//Aqui se hace uso de querySelector. Elemento con id="#boton1"
  ob.addEventListener('click',presion,false);
  //////////////////////////////////////////////////////////////////

  ob=document.querySelector("#boton111");
  ob.addEventListener('click',presion2,false);
  ///////////////////////////////////////////////////////////////////////
  
  ob=document.querySelector("#boton1111");
  ob.addEventListener('click',pintarTabla,false);
  ///////////////////////////////////////////////////////////////////////

  var vecDivs = document.querySelectorAll('div.cuadradito');
  console.log('Vector de Divs', vecDivs);  

  for(f=0;f<vecDivs.length;f++)
  {
    vecDivs[f].addEventListener('mouseover',mostrarToolTip,false);
    vecDivs[f].addEventListener('mouseout',ocultarToolTip,false);
    vecDivs[f].addEventListener('mousemove',mostrarToolTip,false);
  }
  var ele=document.createElement('div');
  ele.setAttribute('id','divmensaje');
  var vec=document.getElementsByTagName('body');
  vec[0].appendChild(ele);
  ///////////////////////////////////////////////////////////////////////

  console.log('Soy el parametro event dentro de inicializarEventos', e);


}

function presionBoton(e)
{
  var boton=e.target;
  var ref=document.getElementById('titulocontenedorjeto');
  ref.firstChild.nodeValue='Name: '+boton.name+' --- Id: '+boton.id+' --- Value: '+boton.value+'  --- Type: '+boton.type;
  console.log('Soy el parametro event dentro de presionBoton', e);
}

function cambiarColorBoton(e)
{
  var boton=e.target;
  boton.style.background='#ff0000';
  console.log('Soy el parametro event dentro de cambiarColorBoton', e);
}

function presionMouse(e)
{
  var contenedor=e.target;
  while (contenedor.hasChildNodes())
  {
    contenedor.removeChild(contenedor.lastChild);
  }
  var nt=document.createTextNode('Tecla alt presionada (e.altKey) ? '+e.altKey);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('Tecla ctrl presionada (e.ctrlKey) ? '+e.ctrlKey);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('Tecla shift presionada (e.shiftKey) ? '+e.shiftKey);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('Nombre del evento (e.type) ? '+ e.type);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('El elemento que causo el evento (e.target) ? '+e.target);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada x del mouse respecto a la ventana (e.clientX) ? '+ e.clientX);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada y del mouse respecto a la ventana (e.clientY) ? '+  e.clientY);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada x del mouse respecto a la pantalla completa (e.screenX) ? '+ e.screenX);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada y del mouse respecto a la pantalla completa (e.screenY) ? '+ e.screenY);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada x del mouse respecto al comienzo de la página (e.pageX) ? '+ e.pageX);
  contenedor.appendChild(nt);
  insertarBR(contenedor);
  var nt=document.createTextNode('La coordenada y del mouse respecto al comienzo de la página (e.pageY) ? '+ e.pageY);
  contenedor.appendChild(nt);
  insertarBR(contenedor);

  console.log('Soy el parametro event dentro de presionMouse', e, e.target);
  
}

function insertarBR(contenedor)
{
  var elemento=document.createElement('br');
  contenedor.appendChild(elemento);
}

function presionRecuadroInte()
{
  alert('se presionó el recuadro interior');
}

function presionRecuadroExte()
{
  alert('se presionó el recuadro exterior');
}

function presionRecuadroInte2(event)
{
  alert('se presionó el recuadro interior');
  event.stopPropagation();
}

function presionRecuadroExte2()
{
  alert('se presionó el recuadro exterior');
}

function presionBoton2(e)
{
  e.stopPropagation();
  var ref=e.target;
  alert(ref.value);
  console.log('Soy el parametro event dentro de presionBoton2', e, e.target);
}

function presionDocumento(e)
{
  e.stopPropagation();
  alert('se presionó el fondo del documento');
  console.log('Soy el parametro event dentro de presionDocumento', e, e.target);
}

function presionEnlace(e)
{
  e.preventDefault(); //Se cancela el evento por defecto
  var url=e.target.getAttribute('href');
  window.open(url);     
  console.log('Soy el parametro event dentro de presionEnlace', e, e.target);
}

function presionEnlaceBuscar(e)
{
  e.preventDefault();
  var url=e.target.getAttribute('href');
  var pal=document.getElementById('palabraBuscar').value;
  window.open(url+'/search?q='+pal);     
  console.log('Soy el parametro event dentro de presionEnlaceBuscar', e, e.target);
}

function crearEnlaces(e)
{
  //Utilizando el innerHTML
  var ob1=document.getElementById("enlaces1");
  ob1.innerHTML='<a href=" '+document.getElementById('textEnlace1').value+' ">Enlace 1</a><br>'+
                '<a href=" '+document.getElementById('textEnlace2').value+' ">Enlace 2</a>';

  //Utilizando los métodos para crear nodos de elemento y texto
  var puntero=document.getElementById('enlaces2');
  
  var elementoEnlace=document.createElement('a');  
  puntero.appendChild(elementoEnlace);
  var nodotexto=document.createTextNode('Enlace 1');
  elementoEnlace.appendChild(nodotexto);
  elementoEnlace.setAttribute('href',document.getElementById('textEnlace1').value);

  puntero.appendChild(document.createElement('br'));  

  elementoEnlace=document.createElement('a');
  puntero.appendChild(elementoEnlace);
  nodotexto=document.createTextNode('Enlace 2');
  elementoEnlace.appendChild(nodotexto);
  elementoEnlace.setAttribute('href',document.getElementById('textEnlace2').value);
}

function crearLista(e)
{
  var ob=document.getElementById("listaCreada");
  ob.innerHTML='<ul>'+
                  '<li> Primer elemento</li> '+
                  '<li> Segundo elemento</li> '+
                  '<li> Tercer elemento</li> '+
                  '<li> Cuarto elemento</li> '+
                '</ul>';
}

function presion(e)
{
  var ob1=document.querySelector(".mensaje");
  ob1.style.backgroundColor='#ff0';
  var ob2=document.querySelector("#lista1");
  ob2.style.backgroundColor='#0ff';
}

function presion2(e)
{
  var ob1=document.querySelectorAll("ol.listaOrdenada li");
  for(var x=0;x<ob1.length;x++)
    ob1[x].style.backgroundColor='#ff0';
  console.log("Elementos recuperados de OL", ob1,  ob1.innerHTML);

  ob1=document.querySelectorAll("ul.listaDesordenada li");
  for(let li of ob1)
    li.style.backgroundColor = 'greenyellow';
  console.log("Elementos recuperados de UL", ob1,  ob1.innerHTML);
  
}

function pintarTabla(e)
{
  var table2014=document.querySelectorAll("#a2014 td");
  for(var x=0;x<table2014.length;x++)
    table2014[x].style.backgroundColor='blue';
  console.log("Elementos recuperados de tabla 2014", table2014,  table2014.innerHTML);

  var table2015=document.querySelectorAll("#a2015 td");
  for(var x=0;x<table2015.length;x++)
    table2015[x].style.backgroundColor='#fc0';
    console.log("Elementos recuperados de tabla 2015", table2015,  table2015.innerHTML);
}

function mostrarToolTip(e) 
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "visible";
  texto=e.target.getAttribute('title');
  d.style.left = e.clientX + document.body.scrollLeft + 15;
  d.style.top = e.clientY + document.body.scrollTop + 15;
  if (d.childNodes.length>0)
    d.firstChild.nodeValue=texto;
  else
  {
    d.appendChild(document.createTextNode(texto));
  }
}

function ocultarToolTip(e) 
{
  var d = document.getElementById("divmensaje");
  d.style.visibility = "hidden";
}