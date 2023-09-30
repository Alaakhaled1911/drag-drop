let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
btn.onclick = function ()
{
    if (inp.value!='')
    {
        boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p> `
        inp.value ='';  
    }
    dragitem(); 
} 
function dragitem()
{
let items = document.querySelectorAll('.item');
items.forEach(item=>
    {
item.addEventListener('dragstart',function(){
  drag=item;
  item.style.opacity='0.5';
})
item.addEventListener('dragend',function(){
    drag=null;
    item.style.opacity='1';
})
boxes.forEach(box=>{
    box.addEventListener('dragover',function(e){
e.preventDefault();
this.style.background="rgb(127, 192, 103)";
this.style.color="#fff";


    })


    box.addEventListener('dragleave',function(){

        this.style.background="#fff";
        this.style.color="#000089";
        
        
            })
            box.addEventListener('drop',function(){



         this.append(drag) ;     
         this.style.background="#fff";
         this.style.color="#000089";
         
            })




})
    }
    
    
    ) 


}