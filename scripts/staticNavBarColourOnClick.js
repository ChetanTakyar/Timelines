const watchOSPage = document.getElementsByID("watchOSPage");
const macOSPage = document.getElementById("macOSPage");
const tvOSPage = document.getElementById("tvOSPage");
const iOSPage =  document.getElementsByID("iOSPage");
const iPadOSPage = document.getElementById("iPadOSPage");


function changeWatchOSColourOnClick(){

    watchOSPage.classList.add("activeTab");
    macOSPage.classList.remove("activeTab");
    tvOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");
    iPadOSPage.classList.remove("activeTab");

}

function changeMacOSColourOnClick(){

    macOSPage.classList.add("activeTab");
    watchOSPage.classList.remove("activeTab");
    tvOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");
    iPadOSPage.classList.remove("activeTab");

}

function changetvOSColourOnClick(){

    tvOSPage.classList.add("activeTab");
    watchOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");
    macOSPage.classList.remove("activeTab");
    iPadOSPage.classList.remove("activeTab");

}

function changeiOSColourOnClick(){

   iOSPage.classList.add("activeTab");
   watchOSPage.classList.remove("activeTab");
   macOSPage.classList.remove("activeTab");
   tvOSPage.classList.remove("activeTab");
   iPadOSPage.classList.remove("activeTab");
}
function changeiPadOSColourOnClick(){
    
    iPadOSPage.classList.add("activeTab")
    iOSPage.classList.remove("activeTab");
    watchOSPage.classList.remove("activeTab");
    macOSPage.classList.remove("activeTab");
    tvOSPage.classList.remove("activeTab");
 }
