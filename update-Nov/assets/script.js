$(document).ready(function(){

    let universityList = $("university-list");
    universityList.on("click", li, getID);

    function getID(){
        console.log("this =", this);
    }







})