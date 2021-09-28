let guestList = [];
let parentElement = document.getElementById("parentElement");
let guestName = document.getElementById("guestName").value;
let addToStart = document.getElementById("addToStart");
let addToEnd = document.getElementById("addToEnd");
let removeFirst = document.getElementById("removeFirst");
let removeLast = document.getElementById("removeLast");
let reverseList = document.getElementById("reverseList");


function displayGuestList(guestList, count, containerDiv){
    let createP = document.createElement("p");
    createP.id = `p_block${count}`;
    let createGuest = document.createTextNode(guestList[count]);
    let createSpace = document.createTextNode("\u00A0");
    createP.appendChild(createGuest);
    createP.appendChild(createSpace);
    containerDiv.appendChild(createP);
}

    addToStart.addEventListener("click", ()=>{
        guestName = document.getElementById("guestName").value;
        if(guestName != ""){
            let containerDiv = document.getElementById("myContainer");
            if(containerDiv){
                containerDiv.innerHTML = null;
            }
            else{
                containerDiv = document.createElement("div");
                containerDiv.id = "myContainer";
                parentElement.appendChild(containerDiv);
            }
            guestList.unshift(guestName); 
            for(let count =0; count<guestList.length; count= count+1){
                displayGuestList(guestList, count, containerDiv);
            }
    }
    }),
    addToEnd.addEventListener("click", ()=>{
        guestName = document.getElementById("guestName").value;
        if(guestName != ""){
            let containerDiv = document.getElementById("myContainer");
            let createP = document.createElement("p");
            if(containerDiv){
                containerDiv.innerHTML = null;
            }
            else{
                containerDiv = document.createElement("div");
                containerDiv.id = "myContainer";
                parentElement.appendChild(containerDiv);
            }
            guestList.push(guestName); 

            for(let count =0; count<guestList.length; count= count+1){
                displayGuestList(guestList, count, containerDiv);
            }
    }
    }),
    removeFirst.addEventListener("click", ()=>{
        console.log("you clicked removeFirst");
        let containerDiv = document.getElementById("myContainer");
        if(containerDiv.childElementCount>0){
            guestList.splice(0,1);
            containerDiv.innerHTML = null;
            for(let count =0; count<guestList.length; count= count+1){
                displayGuestList(guestList, count, containerDiv);
            }
        }
    }),
    removeLast.addEventListener("click", ()=>{
        console.log("you clicked removeLast");
        let containerDiv = document.getElementById("myContainer");
        if(containerDiv.childElementCount>0){
            guestList.splice(-1,1);
            containerDiv.innerHTML = null;
            for(let count =0; count<guestList.length; count= count+1){
                displayGuestList(guestList, count, containerDiv);
            }
        }
    }),
    reverseList.addEventListener("click", ()=>{
        console.log("you clicked reverse list");
        let containerDiv = document.getElementById("myContainer");
        if(containerDiv.childElementCount>0){
            guestList.reverse();
            containerDiv.innerHTML= null;
            for(let count =0; count<guestList.length; count= count+1){
                displayGuestList(guestList, count, containerDiv);
            }
        }
    })
