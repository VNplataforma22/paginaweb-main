const id = '1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
const rango = 'Programas!A:L'
const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`




function informacion(tech) {

  const container = document.querySelector('.cards-events')

  const contenedor = document.createElement('div')
  contenedor.classList.add('card-events')
  container.appendChild(contenedor)


  const fondo = document.createElement('div')
  fondo.classList.add('background')
  contenedor.appendChild(fondo)
  fondo.style.backgroundImage = `url('${tech.imagen}')`


  const texto = document.createElement('div')
  texto.classList.add('text')
  contenedor.appendChild(texto)


  const featured = document.createElement('div')
  featured.classList.add('featured')

  texto.appendChild(featured)
  const txtId = document.createElement('div')
  txtId.classList.add('paralelogramo-txt')
  txtId.textContent = (tech.id)
  featured.appendChild(txtId)

  const fecha = document.createElement('img')
  fecha.classList.add('date')
  fecha.setAttribute('src', `../Imagenes/banderas/${tech.pais.toUpperCase()}.png`)
  fecha.textContent = (tech.pais)
  texto.appendChild(fecha)

  const titulo = document.createElement('h2')
  titulo.classList.add('title')
  texto.appendChild(titulo)
  const txtTitulo = document.createElement('div')
  txtTitulo.classList.add('paralelogramo-txtTitulo')
  txtTitulo.textContent = (tech.programa)
  titulo.appendChild(txtTitulo)


  const descripcion = document.createElement('h3')
  descripcion.classList.add('subtitle')
  descripcion.textContent = (tech.descripcion)
  texto.appendChild(descripcion)

  const buttonCards = document.createElement('div')
  buttonCards.classList.add('card-button', 'button-space', 'wrap')
  texto.appendChild(buttonCards)


  const buttonVer = document.createElement('a')
  buttonVer.classList.add('read-now', 'button-blanco', 'js-open-modal')
  buttonVer.setAttribute('id', 'open')
  buttonVer.textContent = ('Detalles')
  buttonCards.appendChild(buttonVer)



  const removeSpacesFromString = (textoOriginal) => {
    let text1 = textoOriginal
    let text2 = text1.replace(/ /g, "%20");
    return text2
  }

  const buttonInteresado = document.createElement('a')
  buttonInteresado.classList.add('read-now', 'button-rojo')
  buttonInteresado.setAttribute('target', '_blank')
  buttonInteresado.setAttribute('href', 'https://api.whatsapp.com/send?phone=' + '5214427510421' + '&text=' + 'Buen%20día%20quisiera%20informes%20de%20programa%20' + tech.id + '%20' + removeSpacesFromString(tech.programa) + '%20en%20' + removeSpacesFromString(tech.pais) + '📚')
  buttonInteresado.textContent = ('Me interesa')
  buttonCards.appendChild(buttonInteresado)



  const contenedorMayorModal = document.createElement('div')
  contenedorMayorModal.setAttribute('id', 'mask')
  contenedorMayorModal.classList.add('hidden')
  buttonCards.appendChild(contenedorMayorModal)

  //CONTENEDOR  MODAL  CONTENEDOR  MODAL  CONTENEDOR  MODAL  CONTENEDOR  MODAL  CONTENEDOR  MODAL  CONTENEDOR  MODAL  CONTENEDOR  MODAL   
  const cntr = document.createElement('div')
  cntr.setAttribute('id', 'modal')
  cntr.classList.add('hidden')
  texto.appendChild(cntr)





  const tituloDetalles = document.createElement('h3')
  tituloDetalles.classList.add('nombreBold', 'tituloModal')
  tituloDetalles.textContent = ('Detalles del Programa')
  cntr.appendChild(tituloDetalles)




  const contenedorFlex = document.createElement('div')
  contenedorFlex.classList.add('centrar-detalles-ventana')
  cntr.appendChild(contenedorFlex)







  const contenedorTexto = document.createElement('div')
  contenedorTexto.classList.add('contenedor-texto')
  contenedorFlex.appendChild(contenedorTexto)



  const nombreBold = document.createElement('a')
  nombreBold.classList.add('nombreBold')
  nombreBold.textContent = ('Programa ')
  contenedorTexto.appendChild(nombreBold)

  const textoM = document.createElement('p')
  textoM.classList.add('modal__title')
  textoM.textContent = (tech.programa)
  contenedorTexto.appendChild(textoM)



  const nombreBold2 = document.createElement('a')
  nombreBold2.classList.add('nombreBold')
  nombreBold2.textContent = ('País ')
  contenedorTexto.appendChild(nombreBold2)

  const textoM2 = document.createElement('p')
  textoM2.classList.add('modal__content')
  textoM2.textContent = (tech.pais)
  contenedorTexto.appendChild(textoM2)




  const nombreBold3 = document.createElement('a')
  nombreBold3.classList.add('nombreBold')
  nombreBold3.textContent = ('Ingreso ')
  contenedorTexto.appendChild(nombreBold3)

  const textoM3 = document.createElement('p')
  textoM3.classList.add('modal__content')
  textoM3.textContent = (tech.ingreso)
  contenedorTexto.appendChild(textoM3)


  const nombreBold7 = document.createElement('a')
  nombreBold7.classList.add('nombreBold')
  nombreBold7.textContent = ('Nivel de Inglés ')
  contenedorTexto.appendChild(nombreBold7)

  const textoM7 = document.createElement('p')
  textoM7.classList.add('modal__content')
  textoM7.textContent = (tech.nivelIngles)
  contenedorTexto.appendChild(textoM7)



  const nombreBold4 = document.createElement('a')
  nombreBold4.classList.add('nombreBold')
  nombreBold4.textContent = ('Perfil')
  contenedorTexto.appendChild(nombreBold4)

  const textoM4 = document.createElement('p')
  textoM4.classList.add('modal__content')
  textoM4.textContent = (tech.Perfil)
  contenedorTexto.appendChild(textoM4)




  const nombreBold9 = document.createElement('a')
  nombreBold9.classList.add('nombreBold')
  nombreBold9.textContent = ('Descripción ')
  cntr.appendChild(nombreBold9)

  const textoM9 = document.createElement('p')
  textoM9.classList.add('modal__content')
  textoM9.textContent = (tech.descripcion)
  cntr.appendChild(textoM9)



  const nombreBold5 = document.createElement('a')
  nombreBold5.classList.add('nombreBold')
  nombreBold5.textContent = ('Beca ')
  cntr.appendChild(nombreBold5)

  const textoM5 = document.createElement('p')
  textoM5.classList.add('modal__content')
  textoM5.textContent = (tech.beca)
  cntr.appendChild(textoM5)



  const nombreBold8 = document.createElement('a')
  nombreBold8.classList.add('nombreBold')
  nombreBold8.textContent = ('¿Porqué escoger este programa? ')
  cntr.appendChild(nombreBold8)

  const textoM8 = document.createElement('p')
  textoM8.classList.add('modal__content')
  textoM8.textContent = (tech.razones)
  cntr.appendChild(textoM8)




  const nombreBold6 = document.createElement('a')
  nombreBold6.classList.add('nombreBold')
  nombreBold6.textContent = ('Precio')
  cntr.appendChild(nombreBold6)

  const textoM6 = document.createElement('p')
  textoM6.classList.add('modal__content')
  textoM6.textContent = (tech.precio)
  cntr.appendChild(textoM6)




  const contenedorImagen = document.createElement('div')
  contenedorImagen.classList.add('background-detalles')
  contenedorImagen.style.backgroundImage = `url('${tech.Imagen_detalles}')`
  contenedorFlex.appendChild(contenedorImagen)



  //CERRAR MODAL
  const cerrarModal = document.createElement('a')
  cerrarModal.classList.add('js-close')
  cerrarModal.setAttribute('id', 'close')
  cerrarModal.textContent = ('Cerrar')
  cntr.appendChild(cerrarModal)



  buttonVer.addEventListener('click', function () {
    cntr.classList.remove('hidden');
    contenedorMayorModal.classList.remove('hidden');
  });
  cerrarModal.addEventListener('click', function () {
    cntr.classList.add('hidden');
    contenedorMayorModal.classList.add('hidden');
  });
  contenedorMayorModal.addEventListener('click', function () {
    cntr.classList.add('hidden');
    contenedorMayorModal.classList.add('hidden');
  });

}


var foco = true

var select = document.getElementById('button-programa');
select.addEventListener('change',
  function () {
    var selectedOption = this.options[select.selectedIndex];
  });



var select2 = document.getElementById('button-pais');
select2.addEventListener('change',
  function () {
    var selectedOption2 = this.options[select2.selectedIndex];
  });



function limpiador() {
  const elements = document.getElementsByClassName("card-events");
  const elements2 = document.getElementsByClassName("sin-resultado");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  while (elements2.length > 0) {
    elements2[0].parentNode.removeChild(elements2[0]);
  }

}



function resetSelects() {
  var options = document.querySelectorAll('#button-programa option');
  for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;
  }
  var options2 = document.querySelectorAll('#button-pais option');
  for (var i = 0, l = options2.length; i < l; i++) {
    options2[i].selected = options2[i].defaultSelected;
  }
}



const limpiar = document.getElementById('limpiar')
limpiar.addEventListener('click', e => {
  e.preventDefault()
  resetSelects()
  foco = true
  if (foco == true) {
    limpiador()
    buscador()

  }
  console.log('limpiar:' + foco)

})



const buscar = document.querySelector('#formulario')
buscar.addEventListener('submit', e => {
  e.preventDefault()
  limpiador()

  const program = document.querySelector('#button-programa').value
  const paises = document.querySelector('#button-pais').value
  foco = false
  buscador(program.toUpperCase(), paises.toUpperCase())
})




if (foco == true) {
  buscador()
}





function buscador(uno, dos) {
  var cont = 0



  fetch(url)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((infoJson) => {
      let entries = infoJson.values;
      let numFilas = entries.length;

      let campos = [];
      let datos = [];
      for (var f = 0; f < numFilas; f++) {
        let fila = entries[f];

        let obj = {};
        for (var c = 0; c < fila.length; c++) {
          let celda = fila[c];
          if (f == 0) {
            campos.push(celda);
          }
          else {
            obj[campos[c]] = celda;
          }
        }

        if (f > 0) datos.push(obj);
      }

      return datos;
    })

    .then((resultado) => {
      let eventos = '';
      resultado.forEach(tech => {



        if (foco == true) {
          informacion(tech)
          cont++
        }

        if (tech.programa.toUpperCase() == uno && tech.pais.toUpperCase() == dos) {
          informacion(tech)
          cont++

        }

        if (uno == "" && tech.pais.toUpperCase() == dos) {
          informacion(tech)
          cont++
        }

        if (tech.programa.toUpperCase() == uno && dos == "") {
          informacion(tech)
          cont++
        }

        if (uno == '' && dos == '') {
          informacion(tech)
          cont++
        }


      })
      if (cont == 0) {

        const container = document.querySelector('.eventoss')

        const contenedorAviso = document.createElement('div')
        contenedorAviso.classList.add('contenedor-aviso')
        container.appendChild(contenedorAviso)

        const sinResultado = document.createElement('p')
        sinResultado.classList.add('sin-resultado')
        sinResultado.textContent = ('Aún no hay programas con estas características')
        contenedorAviso.appendChild(sinResultado)
      }

    })


}


