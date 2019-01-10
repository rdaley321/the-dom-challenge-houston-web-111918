// As a user, i should see the timer increment every second once the page has loaded
// As a user, i can manually increment and decrement the counter as i like
// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

let timer = true
let ul = document.createElement('ul')
document.querySelector('#list').append(ul)
setInterval(function(){
    if(timer){
      document.querySelector('#counter').innerText = parseInt(document.querySelector('#counter').innerText) + 1
    }
  } , 1000)

document.querySelector('#minus').addEventListener('click', function(){
  document.querySelector('#counter').innerText = parseInt(document.querySelector('#counter').innerText) - 1
})

document.querySelector('#plus').addEventListener('click', function(){
  document.querySelector('#counter').innerText = parseInt(document.querySelector('#counter').innerText) + 1
})


document.querySelector('#heart').addEventListener('click', function(){
  const counter = document.querySelector('#counter').innerText
  const like = document.createElement('li')
  like.innerText = `You have liked number ${counter}:times`
  document.querySelector('.likes').append(like)
})

document.querySelector('#pause').addEventListener('click', function(){
  if (timer) {
  document.querySelector('#minus').disabled = true
  document.querySelector('#plus').disabled = true
  document.querySelector('#heart').disabled = true
  timer = false
  document.querySelector('#pause').innerText = 'resume'
  } else {
  document.querySelector('#minus').disabled = false
  document.querySelector('#plus').disabled = false
  document.querySelector('#heart').disabled = false
  timer = true
  document.querySelector('#pause').innerText = 'pause'
  }
})

document.querySelector('#submit').addEventListener('click', function(e){
  let li = document.createElement('li')
  li.innerText = document.querySelector('#input').value
  ul.append(li)
})
