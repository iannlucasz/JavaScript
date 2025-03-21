

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart' , dragStart)
    item.addEventListener('dragend' , dragEnd)
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

document.querySelectorAll('.neutralArea').forEach(neutralArea => {
    neutralArea.addEventListener('dragover', dragOverNeutral);
    neutralArea.addEventListener('dragleave', dragLeaveNeutral);
    neutralArea.addEventListener('drop', dropNeutral);
});


// Functions Item

function dragStart(e) {
    e.currentTarget.classList.add('dragging')
    
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

// Functions Area

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function drop(e) {
    e.currentTarget.classList.remove('hover')
  
    
    if(e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)
       
        
    }
}

// Functions NeutralArea

function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover')
}

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
   
   
}



