new Promise(resolve=>{
  console.log(a)
}).catch((e)=>{
  console.log('catch', e)
})

window.addEventListener('unhandledrejection', e=>{
  let {error, promise} = e
  console.log(e)
})