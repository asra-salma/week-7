window.onload = makeAjaxRequest;

function makeAjaxRequest(){
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }
    else{
        if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    //making request
    if(xhr){
        xhr.open("GET", "countries.json",true)
        xhr.send()
        xhr.onreadystatechange = showContents
    }
    else{
        document.getElementById("updatemessage").innerHTML = "Could not perform stated request"
    }
}
//function to show content
function showContents(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            let data = JSON.parse(xhr.responseText)
            let txt = ""
            for(let i =0; i<data.countries.length; i++){
                //adding new row to table
                txt += "<tr><td>" + data.countries[i].name + "</td></tr>"
            }
            document.getElementById('countrylist').innerHTML = txt
        }
        else{
            document.getElementById('updatemessage').innerHTML= "An error occured: " + xhr.status
        }
    }
}