var circle = {
  size: 60,
  color: "cyan"

}

var rectangle = {
  size: 40,
  color: "blue"
}

var parallelogram = {
  width: 70,
  height: 40,
  color: "red"
}


var erste = document.querySelector(".board")
var circle1 = document.createElement("div")
var rectangle1 = document.createElement("div")
var parallelogram1 = document.createElement("div")
var space = document.createElement("div")
var egg = document.createElement("div")
var moon = document.createElement("div")

erste.appendChild(circle1)
erste.appendChild(rectangle1)
erste.appendChild(parallelogram1)
erste.appendChild(space)
erste.appendChild(egg)
erste.appendChild(moon)

circle1.classList.add("circle")
rectangle1.classList.add("rectangle")
parallelogram1.classList.add("parallelogram")
space.classList.add("space-invader")
egg.classList.add("egg")
moon.classList.add("moon")

circle1.style.width = circle.size + "px"
circle1.style.height = circle.size + "px"
circle1.style.backgroundColor = circle.color


rectangle1.style.width = rectangle.size + "px"
rectangle1.style.height = rectangle.size + "px"
rectangle1.style.backgroundColor = rectangle.color

parallelogram1.style.width = parallelogram.width + "px"
parallelogram1.style.height = parallelogram.height + "px"
parallelogram1.style.backgroundColor = parallelogram.color


setInterval(function () {
  moon.classList.toggle("moon1")
}, 1000);

setInterval(function() {

  space.classList.toggle("space1")
  
}, 1000);





