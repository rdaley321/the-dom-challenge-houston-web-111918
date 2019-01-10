let counterOn = true
let count = 0
let likes = {}

function Counter(){
  setInterval(function(){
      if(counterOn){
        count++
        document.querySelector('#counter').innerText = count
      }
    } , 1000)
}

function minusButton(){
   document.querySelector('#minus').addEventListener('click', function(){
    count--
    document.querySelector('#counter').innerText = count
  })
}

function plusButton(){
 document.querySelector('#plus').addEventListener('click', function(){
    count++
    document.querySelector('#counter').innerText = count
  })
}

function pauseButton(){
  document.querySelector('#pause').addEventListener('click', function(){
     counterOn = !counterOn
     if (counterOn) {
       document.querySelector('#pause').innerText = 'pause'
       document.querySelector('#minus').disabled = false
       document.querySelector('#plus').disabled = false
       document.querySelector('#heart').disabled = false
     } else {
       document.querySelector('#pause').innerText = 'resume'
       document.querySelector('#minus').disabled = true
       document.querySelector('#plus').disabled = true
       document.querySelector('#heart').disabled = true
     }
   })
}

function heartButton(){
  document.querySelector('#heart').addEventListener('click', function() {
    !(likes[count]) ? likes[count] = 0 : null
    likes[count]++
    let li = document.createElement('li')
    li.innerText = `You liked the number ${count} ${likes[count]} time(s).`
    document.querySelector('#list').append(li)
  })
}

function submitButton() {
  document.querySelector('#comment-form').addEventListener('submit', function(e){
    e.preventDefault()

    let li = document.createElement('li')
    li.innerText = document.querySelector('#input').value
    document.querySelector('#input').value = ''
    document.querySelector('#real-list').append(li)
  })
}

function startApp(){
  Counter()
  minusButton()
  plusButton()
  pauseButton()
  heartButton()
  submitButton()
}

startApp()
