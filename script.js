window.addEventListener("DOMContentLoaded", function() {
    const colorNameRGB = document.querySelector(".color-rgb-h")
    const colors = document.querySelectorAll(".color")
    const pointsInformation = document.querySelector(".points")

    let points = 0
    let falseColor = []
    let randomNumber
    let positionCorrectColor
    let counterFalseColors = 0
    
    
    function generateColor() {
        
        for (let j = 0; j < 6; j ++) {
            
            for (let i = 0; i < 3; i ++) {
                randomNumber = Math.floor(Math.random() * 256)
                falseColor.push(randomNumber)
            }
            
            colors[counterFalseColors].style.backgroundColor = `rgb(${falseColor[0]}, ${falseColor[1]}, ${falseColor[2]})`
            
            counterFalseColors ++
            
            while (falseColor.length >= 1) {
                falseColor.pop()
            }
            
            if (counterFalseColors == 6) counterFalseColors = 0 
            
        }
        
        positionCorrectColor = Math.floor(Math.random() * 6)
        colorNameRGB.textContent = `${colors[positionCorrectColor].style.backgroundColor}`
    }
    
   generateColor()
    
    function checkRGBcolor() {
        
        if (this.textContent == positionCorrectColor) {
           points ++
           pointsInformation.innerHTML = `Points: ${points}` 
           generateColor()
        } else {
            points = 0
            pointsInformation.innerHTML = `Points: ${points}`
        } 
    }
    
    colors.forEach(color => color.addEventListener("click", checkRGBcolor))
})

