let countersElem = document.querySelectorAll('.num')
let benefitsContainer = document.querySelector('.benefits')

window.addEventListener('scroll' , (event) => {
    
    if(window.scrollY >= benefitsContainer.offsetTop){

        countersElem.forEach(function(counter){
            setCount(counter)
        })
        
    }      
})

function setCount(el){

    let numCount = el.dataset.count

    setInterval(function(){

        if(numCount !== el.innerText){
            el.innerText ++
        }
        
    }, 20)
}