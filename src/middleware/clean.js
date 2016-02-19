export default function Clean(){
  this.instance = null
  this.elements = null
  if (global.window){
    global.window.document.body.innerHTML = ''
  }
}