let Fetch = async (url) => {
    let res = await fetch(url)
    let data = await res.json()
    // console.log(data.meals[0]) 
    return data
}
let append = (data, container) => {
let c = 0
    container.innerHTML = ""
    if(data==undefined)return false
    data.forEach(element => {
        let mainDiv = document.createElement("div")
        mainDiv.setAttribute("id", "Dish")
        let left = document.createElement("div")
        left.setAttribute("class","left")
        let right = document.createElement("div")
        right.setAttribute("class","right")
        let poster = document.createElement("img")
        let name = document.createElement("h1")
        let origin = document.createElement("h2")
        let category = document.createElement("h2")
        let ins = document.createElement("h2")
        ins.innerText="Instruction :"
        let instruction = document.createElement("p")
        instruction.innerText=` ${element.strInstructions}`
        poster.src = element.strMealThumb
        name.innerText=`Name : ${element.strMeal}`
        origin.innerText = `Origin : ${element.strArea}`
        category.innerText = `Category : ${element.strCategory}`
        left.append(poster)
        right.append(name, origin, category,ins, instruction)
        if (c % 2 == 0)mainDiv.append(left, right)
        else mainDiv.append(right, left)
        c++
        container.append(mainDiv)
    });
}
// export {Fetch}
export {Fetch , append}