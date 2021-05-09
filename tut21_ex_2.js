console.log("we are in tut 21")
let div = document.createElement('div');
div.id = 'divid';
div.className = 'div.class';
div.setAttribute('style','border:3px Solid black ; width:300px ; height:100px; margin:20px')
let val=document.getElementById('textarea').length
if(val==null){

     let text=document.createTextNode("I am editable div.Click me to edit me");
}
else
{
     let text=textarea.value;
}
div.appendChild(text);
let maindiv=document.getElementById('maindiv');
let underdiv=document.getElementById('underdiv');

maindiv.insertBefore(div,underdiv);
l
div.addEventListener('click',function(){
     let no_of_textarea=document.getElementById('textarea');
     // console.log(no_of_textarea.)
     if(no_of_textarea===null){

      let html=divid.innerHTML;
      div.innerHTML=`    <textarea name="" id="textarea"  class="textarea"  cols="39" rows="6">${html}</textarea>`
      
     }

     
div.addEventListener('mouseleave',function(){
    
     let textarea=document.getElementById("textarea");
     div.innerText=textarea.value;
     localStorage.setItem('text',textarea.value)
    console.log(localStorage.getItem('text').length)
})
})




