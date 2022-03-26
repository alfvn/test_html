window.onerror = (e)=>{
  console.log('1111', e)
}
new Promise(resolve=>{
  console.log(a)
})
// .catch((e)=>{
//   // console.log(e)
// })

window.addEventListener('unhandledrejection', e=>{
  let {error, promise} = e
  console.log(e)
})

console.log(b)
// throw new Error("b")
console.log('ok')

