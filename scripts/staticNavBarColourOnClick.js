const watchOSPage = document.getElementsByID("watchOSPage");
const macOSPage = document.getElementById("macOSPage");
const tvOSPage = document.getElementById("tvOSPage");
const iOSPage =  document.getElementsByID("iOSPage");




function changeWatchOSColourOnClick(){
    watchOSPage.classlist.add("activeTab");
    macOSPage.classList.remove("activeTab");
    tvOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");
}

function changeMacOSColourOnClick(){
    macOSPage.classList.add("activeTab");
    watchOSPage.classList.remove("activeTab");
    tvOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");

}

function changetvOSColourOnClick(){
    tvOSPage.classList.add("activeTab");
    watchOSPage.classList.remove("activeTab");
    iOSPage.classList.remove("activeTab");
    macOSPage.classList.remove("activeTab");
}

function changeiOSColourOnClick(){
   iOSPage.classList.add("activeTab");
   watchOSPage.classList.remove("activeTab");
   macOSPage.classList.remove("activeTab");
   tvOSPage.classList.remove("activeTab");
}
