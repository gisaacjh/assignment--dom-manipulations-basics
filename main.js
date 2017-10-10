
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  //  Cuando el evento "click" ocurra en el elemento"Push Me" <button>
  //  Insertar un texto con un elemento <h2> dentro de un <div class="answer-box">

  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Work done!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  // Cada evento 'click' debe doblar el valor del número debajo
  // hacer que el evento 'click' se multiplique por 2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
    answerPTagWithValue.innerHTML = answerPTagWithValue.innerHTML * 2

})

var contador = 0
document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  // cambiar el color del circulo de #FFFFFF a #000000
  // el interruptor es un click
  var answerColorBox = document.querySelector('#circle-bw')
  contador ++
  if (answerColorBox.innerHTML % 2 === 0) {
      answerColorBox.style.background = 'black'
  } else {
      answerColorBox.style.background = 'white'
}

})
var contador = 0
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  //manipular el div para que el circulo duplique su altura y anchura
  //el circulo debe ser mayor o igual a 320px
  // en ese momento debe retornara su tamaño original 40px x 40px
  var answerSize = document.querySelector('circle-red')
  contador ++
  answerSize.style.
  console.log('circle-red');
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
