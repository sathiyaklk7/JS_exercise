var nav=1;
window.onclick = menu;
function menu() {
    if(nav==1){
    document.getElementsByTagName('UL')[0].style.left="0px";
    nav=0;
}
else if(nav==0){
    document.getElementsByTagName('UL')[0].style.left="-200px"
    nav=1;
}
}
