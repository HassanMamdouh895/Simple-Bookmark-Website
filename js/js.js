// variablies 
var box = [];
var Popup = document.getElementById("popup");
var siteNameRegex = /^(^[a-zA-Z\s0-9]{3,})$/;
var urlSiteRegex = /([.][a-z]{2,})$/;
var bookMarkData
// End variablies

// localStorage conditional 
if (localStorage.getItem("data") != null) {
    box = JSON.parse(localStorage.getItem("data"));
    display();
};



// Start inputs all function
function submit() {

    bookMarkData =
    {
        Sitename: document.getElementById("idSiteName").value,
        urlSite: document.getElementById("idUrl").value,
    }

    //    var x= document.getElementById("idSiteName").value
    //     var y =document.getElementById("idUrl").value

    if (bookMarkData.Sitename === "" | bookMarkData.urlSite === ""|document.getElementById("idSiteName").classList.contains("is-invalid")|document.getElementById("idUrl").classList.contains("is-invalid")) {
        Popup.classList.replace("visually-hidden", "visible")
        display()
    }
    else {
        box.push(bookMarkData)
        display()
        clear()
    }

    localStorage.setItem("data", JSON.stringify(box))


    





};

function display() {
    console.log(bookMarkData)
    var dataBox = " "
    for (var i = 0; i < box.length; i++) {

        dataBox += `
        <tr>
        <td>  ${i + 1} </td>
        <td>  ${box[i].Sitename}</td>
        <td><a class="text-decoration-none text-white" href="https://${box[i].urlSite}" target="_blank"><button class="btn btn-primary"><i class="fa-regular fa-eye me-1"></i> Visit</button></a> </td>
         <td><button onclick="Delete(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can me-2"></i> Delete</button></td>
        </tr>
        
        `



    }
    document.getElementById("Idtbody").innerHTML = dataBox
};
function clear() {

    Sitename: document.getElementById("idSiteName").value = '';
    urlSite: document.getElementById("idUrl").value = '';
    document.getElementById("idSiteName").classList.remove("is-invalid")
    document.getElementById("idSiteName").classList.remove("is-valid")
    document.getElementById("idUrl").classList.remove("is-valid")
    document.getElementById("idUrl").classList.remove("is-invalid")

};
function Delete(i) {
    box.splice(i, 1)
    // console.log(box.splice(i,i))
    localStorage.setItem("data", JSON.stringify(box))
    display()




};
// End inputs all function

//Start validation inputs
function siteName(siteValue) {
    if (siteNameRegex.test(siteValue)) {
        document.getElementById("idSiteName").classList.add("is-valid")
        document.getElementById("idSiteName").classList.remove("is-invalid")

    }
    else {
        document.getElementById("idSiteName").classList.add("is-invalid")
        document.getElementById("idSiteName").classList.remove("is-valid")
    }

};
function siteUrl(urlValue) {
    if (urlSiteRegex.test(urlValue)) {
        document.getElementById("idUrl").classList.add("is-valid")
        document.getElementById("idUrl").classList.remove("is-invalid")

    }
    else {
        document.getElementById("idUrl").classList.add("is-invalid")
        document.getElementById("idUrl").classList.remove("is-valid")
        
    }

};
//End validation inputs

function closePopup() {

    Popup.classList.replace("visible", "visually-hidden")

};





