import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()


import {Fetch,append} from "../components/FetchAppend.js"

let data = await Fetch("https://www.themealdb.com/api/json/v1/1/random.php")
console.log(data.meals[0])
let newData = []
newData.push(data.meals[0])
let container = document.querySelector("#display")
append(newData,container)