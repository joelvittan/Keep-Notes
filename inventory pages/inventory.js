


// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Select the container you want to be selected by default
    var defaultContainer = document.getElementById("cont1");
    
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


    //metricunit select
    var defaultContainer1 = document.getElementById("item1");
    
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
    
    
    
    //default hiding
    completedTaskCont.classList.add("hide")
    
    item2.onclick=function(){
        pendingTaskCont.classList.add("hide")
        completedTaskCont.classList.remove("hide")
    }
    item1.onclick=function(){
        pendingTaskCont.classList.remove("hide")
        completedTaskCont.classList.add("hide")
    }



    //popup2
   /* popup22.onclick=function(){
        popUpForm2.style.display="block"
        bgCont.style.opacity="60%"
        bgCont.classList.add("blurred")
        
    }*/
    closepp.onclick=function(){
        popUpForm2.style.display="none"
        bgCont.style.opacity="100%"
        bgCont.classList.remove("blurred")
    }




    //adding new task data to task table
    form1.addEventListener("submit",function(event){
        event.preventDefault()
        console.log("hiiii")
        fetch("/addTask",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "taskName":taskName.value,
                "vendor":vendor.value,
                "workMode":workMode.value,
                "user":user.value,
                "contactDetails":contactDetails.value,
                "cvFile":cvFile.value,
                "invoiceNum":invoiceNum.value,
                "hiii":"dwdwdwdw"
            })
            })
            .then(response=>response.json())
            .then(data=>{console.log(data)})
            popUpForm1.style.display="none"
            bgCont.style.opacity="100%"
            bgCont.classList.remove("blurred")
            location.reload();

    })  

    let pendingTaskTable=function(x){
        let pendingTaskTableBody= document.getElementById("pendingTaskTableBody")
                let tr=document.createElement("tr")
                let SlNo=document.createElement("td")
                let date=document.createElement("td")
                let taskName=document.createElement("td")
                let vendor=document.createElement("td")
                let contactDetails=document.createElement("td")
                let cvFile=document.createElement("td")
                let cvFileName=document.createElement("a")
                let workMode=document.createElement("td")
                let auditor=document.createElement("td")


                //adding content to table
                SlNo.textContent=x.SlNo
                date.textContent=x.date
                taskName.textContent=x.taskName
                vendor.textContent=x.vendor
                contactDetails.textContent=x.contactDetails
                cvFileName.textContent=x.cvFile
                cvFileName.href="#"
                workMode.textContent=x.workMode
                auditor.textContent=x.auditor

                //adding class names
                SlNo.setAttribute("id","table-head")
                SlNo.scope="row"
                date.setAttribute("id","table-head")
                taskName.setAttribute("id","table-head")
                vendor.setAttribute("id","table-head")
                contactDetails.setAttribute("id","table-head")
                cvFileName.setAttribute("id","table-head")
                workMode.setAttribute("id","table-head")
                auditor.setAttribute("id","table-head")
                
                


                cvFile.appendChild(cvFileName)
                tr.appendChild(SlNo)
                tr.appendChild(date)
                tr.appendChild(taskName)
                tr.appendChild(vendor)
                tr.appendChild(contactDetails)
                tr.appendChild(cvFile)
                tr.appendChild(workMode)
                tr.appendChild(auditor)
                pendingTaskTableBody.appendChild(tr)
    }
    let submissionslink
    



    //completed task table
    let completedTaskTable=function(x){
                let completedTaskTableBody= document.getElementById("completedTaskTableBody")
                let tr=document.createElement("tr")
                let SlNo=document.createElement("td")
                let date=document.createElement("td")
                let taskName=document.createElement("td")
                let vendor=document.createElement("td")
                let contactDetails=document.createElement("td")
                let submision=document.createElement("td")
                let cvFileName=document.createElement("a")
                let workMode=document.createElement("td")
                let auditor=document.createElement("td")


                //adding content to table
                SlNo.textContent=x.SlNo
                date.textContent=x.date
                taskName.textContent=x.taskName
                vendor.textContent=x.vendor
                contactDetails.textContent=x.contactDetails
                cvFileName.textContent=x.submissions
                cvFileName.href="#"
                let submissionslink=cvFileName
                workMode.textContent=x.workMode
                auditor.textContent=x.auditor

                //adding class names
                SlNo.setAttribute("id","table-head")
                SlNo.scope="row"
                date.setAttribute("id","table-head")
                taskName.setAttribute("id","table-head")
                vendor.setAttribute("id","table-head")
                contactDetails.setAttribute("id","table-head")
                cvFileName.setAttribute("id","table-head")
                workMode.setAttribute("id","table-head")
                auditor.setAttribute("id","table-head")
                
                


                submision.appendChild(cvFileName)
                tr.appendChild(SlNo)
                tr.appendChild(date)
                tr.appendChild(taskName)
                tr.appendChild(vendor)
                tr.appendChild(contactDetails)
                tr.appendChild(submision)
                tr.appendChild(workMode)
                tr.appendChild(auditor)
                completedTaskTableBody.appendChild(tr)

                submissionslink.onclick=function(){
                    popUpForm2.style.display="block"
                    bgCont.style.opacity="60%"
                    bgCont.classList.add("blurred")
                }
    }


     //completed task table
     let popupForm2Table=function(x){
        let popupForm2TableBody= document.getElementById("popupForm2TableBody")
        let tr=document.createElement("tr")
        let SlNo=document.createElement("td")
        let vehicleName=document.createElement("td")
        let chaseNumber=document.createElement("td")
        let vechileFound=document.createElement("td")
        let video=document.createElement("td")
        let cvFileName=document.createElement("a")


        //adding content to table
        SlNo.textContent=x.SlNo
        vehicleName.textContent=x.vehicleName
        chaseNumber.textContent=x.chaseNumber
        vechileFound.textContent=x.vechileFound
        cvFileName.textContent="video.mp4"
        cvFileName.href="#"

        //adding class names
        SlNo.setAttribute("id","table-head")
        SlNo.scope="row"
        vehicleName.setAttribute("id","table-head")
        chaseNumber.setAttribute("id","table-head")
        vechileFound.setAttribute("id","table-head")
        cvFileName.setAttribute("id","table-head")
        
        


        video.appendChild(cvFileName)
        tr.appendChild(SlNo)
        tr.appendChild(vehicleName)
        tr.appendChild(chaseNumber)
        tr.appendChild(vechileFound)
        tr.appendChild(cvFileName)
        popupForm2TableBody.appendChild(tr)

        
}
    


    //fetting data from server side
    let taskContentLabel=document.getElementById("taskContentLabel")
    let item_1=document.getElementById("item-1-1")
    let item_2=document.getElementById("item-1-2")
    fetch("/getData",{
        method:"GET",
        headers:{"Content-Type":"application/json"},
    })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            data.forEach((x)=>{
                console.log(x)
                pendingTaskTable(x)
                taskContentLabel.textContent=`${data.length} Tasks`
                item_1.textContent=`${data.length}`
                item_2.textContent=`${data.length}`
            })

    })


    //fetching completed tasks
    let taskContentLabel1=document.getElementById("taskContentLabel1")
    let item_2_1=document.getElementById("item-2-1")
    let item_2_2=document.getElementById("item-2-2")
    fetch("/getDataC",{
        method:"GET",
        headers:{"Content-Type":"application/json"},
    })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            data.forEach((x)=>{
                console.log(x)
                completedTaskTable(x)
                taskContentLabel1.textContent=`${data.length} Tasks`
                item_2_1.textContent=`${data.length}`
                item_2_2.textContent=`${data.length}`
            })

    })


     //popup2 completed tasks
     let taskContentLabel3=document.getElementById("taskContentLabel3")
     fetch("/getDataP",{
        method:"GET",
        headers:{"Content-Type":"application/json"},
    })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            data.forEach((x)=>{
                console.log(x)
                popupForm2Table(x)
                taskContentLabel3.textContent=`${data.length} Tasks`
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







