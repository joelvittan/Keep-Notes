


// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Select the container you want to be selected by default
    var defaultContainer = document.getElementById("menu1");
    
    // Add the 'selected' class to it
    defaultContainer.classList.add("selected");

    // Add an event listener to change the selected container when any container is clicked
    var containers = document.querySelectorAll(".menu-item");
    containers.forEach(function(container) {
        container.addEventListener("click", function() {
            // Remove 'selected' class from all containers

            containers.forEach(function(c) {
                c.classList.remove("selected");
            });
            // Add 'selected' class to the clicked container
            this.classList.add("selected");
        });
    });


    //contentselect
    newNoteCont.style.display="inline-flex"
    archivedCont.style.display="none"
    deleteCont.style.display="none"

    menu1.onclick=function(){
        newNoteCont.style.display="inline-flex"
        archivedCont.style.display="none"
        deleteCont.style.display="none"
    }
    menu2.onclick=function(){
        newNoteCont.style.display="none"
        archivedCont.style.display="inline-flex"
        deleteCont.style.display="none"
    }
    menu3.onclick=function(){
        newNoteCont.style.display="none"
        archivedCont.style.display="none"
        deleteCont.style.display="inline-flex"
    }
    

    //metricunit select
    var defaultContainer1 = document.getElementById("menu1");
    
    // Add the 'selected' class to it
    defaultContainer1.classList.add("metric-select");

    // Add an event listener to change the selected container when any container is clicked
    var containers1 = document.querySelectorAll(".metric-item");
    containers1.forEach(function(container) {
        container.addEventListener("click", function() {
            // Remove 'selected' class from all containers
            containers1.forEach(function(c) {
                c.classList.remove("metric-select");
            });
            // Add 'selected' class to the clicked container
            this.classList.add("metric-select");
        });
    });




    createTaskButt.addEventListener("click",function(){
        popUpForm1.style.display="block"
        bgCont.style.opacity="60%"
        bgCont.classList.add("blurred")
    })
    cancelButt.addEventListener("click",function(){
        popUpForm1.style.display="none"
        bgCont.style.opacity="100%"
        bgCont.classList.remove("blurred")
    })
    
    



    let form1=document.getElementById("form1")
    //adding new task data to task table
    form1.addEventListener("submit",function(event){
        event.preventDefault()
        console.log("hiiii")
        fetch("/addNote",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "noteTitle":noteTitle.value,
                "note":note.value,
                "tags":tagInput.value, 
                "background":colorName.value
            })
            })
            .then(response=>response.json())
            .then(data=>{console.log(data)})
            location.reload()
            popUpForm1.style.display="none"
            bgCont.style.opacity="100%"
            bgCont.classList.remove("blurred")

    }) 
          

    
   
    let noteContainers=function(x){
        let noteContBody= document.getElementById("noteCont")
                let notediv=document.createElement("div")
                let noteHed=document.createElement("h1")
                let notePara=document.createElement("p")
                let tags=document.createElement("span")
                let noteFunctions=document.createElement("div")
                let edit=document.createElement("i")
                let archive=document.createElement("i")
                let deleteico=document.createElement("i")

                //adding classes and ids
                notediv.classList.add("metric-item")
                noteHed.classList.add("metric-item-hed")
                tags.classList.add("tag")
                noteFunctions.classList.add("noteFunctions")
                edit.classList.add("fa-solid","fa-pen")
                archive.classList.add("fa-solid","fa-box-archive")
                deleteico.classList.add("fa-solid","fa-trash")

                //adding content to table
                notediv.style.backgroundColor=`${x.BackgroundColor}`
                noteHed.textContent=x.NoteTitle
                notePara.textContent=x.Note
                


                //adding class names
                notediv.setAttribute("id","item1")
                noteHed.setAttribute("id","noteHed")
                notePara.setAttribute("id","notePara")
                noteFunctions.setAttribute("id","noteFunctions")
                edit.setAttribute("id","edit")
                archive.setAttribute("id","archive")
                deleteico.setAttribute("id","deleteico")


                //tags
                let tagsarray=x.Tags

                //appending
                noteContBody.appendChild(notediv)
                notediv.appendChild(noteHed)
                notediv.appendChild(notePara)
                let tagsarr=x.Tags.split(",")
                let span=document.createElement("span")
                notediv.appendChild(span)
                let spanfun= function(tag){
                    span.textContent=tagsarr
                    span.className="tag"
                    span.setAttribute("id","tags")
                    
                }
                tagsarr.forEach((tag)=>{
                    spanfun(tag)
                })
               
                notediv.appendChild(noteFunctions)
                noteFunctions.appendChild(edit)
                noteFunctions.appendChild(archive)
                noteFunctions.appendChild(deleteico)
    }


    //fetting data from server side
    fetch("/getData",{
        method:"GET",
        headers:{"Content-Type":"application/json"},
    })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            data.forEach((x)=>{
                console.log(x)
                noteContainers(x)
            })

    })


    
    //getting searched dataof pending task
    pendingTaskSearch.addEventListener('keyup', (event) => {
        if (event.key === 'Enter'&& pendingTaskSearch.value!=="") {
            console.log(pendingTaskSearch.value)
            fetch("/pendingTaskSearch",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({"pendingTaskSearch":pendingTaskSearch.value})
            })
                .then(response=>response.json())
                .then(data=>{console.log(data)
                    console.log(data)
                    pendingTaskTable(data)
                    
            })
        }
    });


    //exporting as excel
    




})    







