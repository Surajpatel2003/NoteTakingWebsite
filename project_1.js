
let addbtn = document.getElementById("addnoteid");
let notesObj;
showNotes();
//When We click on add button 
addbtn.addEventListener('click',function(e){
    // let title=document.getElementById("title");
    
    let textarea=document.getElementById("textareaid");
    let notes= localStorage.getItem('notes');
    if(notes==null)
    {
         notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(textarea.value,title);
    console.log(notesObj)
    localStorage.setItem('notes',JSON.stringify(notesObj));
    textarea.value="";
    showNotes();

})

function showNotes()
{
    let notes= localStorage.getItem('notes');
    if(notes==null)
    {
         notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
     let title=document.getElementById("title");
    //  console.log(title.value)
    let html="";
    notesObj.forEach(function(element,index) {
         html+=`<div style="border: 3px Solid grey; margin:8px" class="cardNote">
        <h4>Note : ${index+1}</h4>
        <p id="pid">${element}</p>
        <input type="checkbox" class="checkbox" name="" id="checkbox">
        <button id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        </div>
        `
        
    });
    // if(notes==null){
    //     textelem.innerText=`Please add notes by click on "Add Notes"`
    // }
    let textelem=document.getElementById("save")
    if(notesObj.length!=0){
    textelem.innerHTML=html;
    }
    else{
        textelem.innerHTML=`<p>Please save the note by click on "Add Note".</p>`
    }
    // console.log(notes)
}

function deletenote(index){
    let notes= localStorage.getItem('notes');
    if(notes==null)
    {
         notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
    



}

let seachtxt=document.getElementById("searchtxt")
seachtxt.addEventListener('input',function(){
   
        let searchvalue=(searchtxt.value).toLowerCase()
        // console.log(searchvalue)
    // console.log(document.getElementById("save").children[1].children[1].innerText)
    let cardnote=document.getElementById("save")
    let cardTxt=cardnote.children;
    // console.log(cardTxt)
    Array.from(cardTxt).forEach(function(element){
        
        let cardValue=element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardValue.includes(searchvalue))
        if(cardValue.includes(searchvalue))
        {
            element.style.display="block"
            // console.log(cardValue);
        }
        else
        {
            element.style.display="none"
        }

    })

})

// console.log(document.getElementById("save").children[1].getElementsByClassName("checkbox"))

let bookmarkbtn=document.getElementById("bookmarkbtn");
bookmarkbtn.addEventListener('click',function(){

    let checkbox=document.getElementById("checkbox");
     
})




























// console.log("PROJECT 1")
// let textarea = document.getElementById("textareaid")
// let addbutton = document.getElementById("addnoteid");
// let i = 0;

// addbutton.addEventListener('click', function () {
//     i = 0;
//     // i+=1;

//     // For Save notes
//     let text = textarea.value;
//     let savenote = document.createElement('div')
//     savenote.style.display = "inline-block";
//     savenote.setAttribute('id', 'savenoteid');
//     savenote.setAttribute('class', 'savenoteclass');
//     savenote.classList.add("testclass");
//     savenote.innerText = text
//     savenote.style.border = "5px Solid grey"
//     savenote.style.padding = "10px";
//     savenote.style.margin = "20px";
//     savenote.style.width = "200px";
//     savenote.style.overflow = "auto"

//     // savenote.innerText="";
//     textarea.value = "";
//     // console.log(savenote.classList)
//     // console.log(savenote.offsetWidth)

//     console.log(savenote)
//     document.getElementById("save").appendChild(savenote);



//     //For Delete the button

//     let deletbutton = document.createElement("button");
//     deletbutton.innerText = "Delete Note";
//     deletbutton.setAttribute('id', 'deletbuttonid');
//     document.getElementById("save").appendChild(deletbutton);
//     deletbutton.addEventListener('click', function () {

//         document.getElementById("save").removeChild(deletbutton.previousElementSibling)
//         // document.getElementById("save").removeChild(document.getElementById("save").children)
//         document.getElementById("save").removeChild(deletbutton)

//         // document.getElementById("save").removeChild(document.getElementById("save").children[1])
//         console.log("delete button is clicked")
//     })

//     // Click on save note

//     savenote.addEventListener('click', function () {
//         if (i == 0) {
//             let textvalue = savenote.innerText;
//             savenote.innerHTML = `<textarea name="" id="savenotetextareaid" cols="30" rows="10" class="">${textvalue}</textarea>`

//             console.log("Click on save note", textvalue)
//             i += 1;
//         }


//     })


// })
// let j = 0;
// let searchtext = document.getElementById("searchinputid")
// searchtext.addEventListener('click', function () {
//     if (j != 0) {
//         console.log(searchtext.value)

//     }
//     j += 1;
// })
// console.log(searchtext)






