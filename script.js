window.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('dragable')){
        dragElement(e.target.closest('.dragable'), e.clientY, e.clientX);
    }
});
console.log(JSON.parse(localStorage.getItem('1')));
var obj = {
    top: null,
    left: null,
    id: null
}
function dragElement(element, heightPos, widthPos){
    document.addEventListener('mousemove', startDragElement);
    document.addEventListener('mouseup', stopDragElement);
    let elementTopPos = heightPos - element.offsetTop;
    let elementLeftPos = widthPos - element.offsetLeft;
    function startDragElement(e){
        element.style.top = (e.clientY - elementTopPos) + 'px';
        element.style.left = (e.clientX - elementLeftPos) + 'px';
        obj = {
            top: (e.clientY - elementTopPos),
            left: (e.clientX - elementLeftPos),
            id: e.target.textContent
        }
    };
    function stopDragElement(){
        document.removeEventListener('mousemove', startDragElement);
        window.localStorage.setItem(obj.id, JSON.stringify(obj));
    };
}


