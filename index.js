function info(id, info, className='') {
  const box = document.getElementById(id)
  const p = document.createElement('p')
  p.setAttribute('class', className)
  p.innerHTML = info
  box.appendChild(p)
}

let preId = 'pre-root'
function _pre(){
  let len = 10000
  let i = 0
  let start = +new Date()
  for(i; i<len; i++){
    if(i*10%len === 0){
      info(preId, `requestIdleCallback 调用了 ${i} 次`, 'orange')
    }
    console.log(i)
  }
  let last = +new Date()
  info(preId, `一共花费时间 ${last - start}`)
}

function pre(){
  let i = 0
  const len = 5
  function step(){
    if(i < len){
      i++
      info(preId, `requestAnimationFrame执行了 ${i} 次`)
      window.requestAnimationFrame(step)
    }
  }
  window.requestIdleCallback(_pre)
  window.requestAnimationFrame(step)
}


document.getElementById('pre').addEventListener('click', pre)
