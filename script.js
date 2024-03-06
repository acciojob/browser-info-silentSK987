//your JS code here. If required.
const browserInfo = document.querySelector("#browser-info");
addEventListener("DOMContentLoaded",()=>{
browserInfo.innerHTML = `You are using ${navigator.appName} version ${navigator.appVersion}`	
})