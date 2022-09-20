let id;
import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
let seachItem = document.querySelector("#searched")
seachItem.addEventListener("input",getData)
import {Fetch,append} from "../components/FetchAppend.js"
let container = document.querySelector("#display")
async function getData()
{
    let searched = document.querySelector("#searched").value
    // if (searched == null) container.style.display = "none"
    // else container.style.display="block"
    let mydata = await Fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`)
    console.log(mydata.meals)
    append(mydata.meals,container)

}

