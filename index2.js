function info(id, info, className='') {
  const box = document.getElementById(id)
  const p = document.createElement('p')
  p.setAttribute('class', className)
  p.innerHTML = info
  box.appendChild(p)
}

let nextId = 'next-root'

function _next(deadline){
  let len = 1000
  let i = 0
  function _step(deadline){
    for(i; i<len; i++){
      if(deadline.timeRemaining() > 0){// 这一帧里还有剩余时间
        console.log(i)

        if(i*10%len === 0){
          info(nextId, `requestIdleCallback 调用了 ${i} 次`, 'orange')
        }
      }else{
        window.requestIdleCallback(_step);break;
      }
    }
  }
  
  _step(deadline)
}


function next(){
  let i = 0
  const len = 5
  function step(){
    if(i < len){
      i++
      info(nextId, `requestAnimationFrame执行了 ${i} 次`)
      window.requestAnimationFrame(step)
    }
  }
  window.requestIdleCallback(_next)
  window.requestAnimationFrame(step)
}


document.getElementById('next').addEventListener('click', next)
