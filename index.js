let searchInput = document.getElementById("search");
let clearTimeOut = null;
searchInput.addEventListener("input", function(){
    clearInterval(clearTimeOut);
    clearTimeOut =  setTimeout(function(){
       searchMeal(searchInput.value);

    },2000)

})
 async function searchMeal(quary){
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}`);
        let data = await res.json();
        displayRecipeData(data.meals); 
    } catch (error) {
        console.log(error);
    }
  
}
function displayRecipeData(data){
    let container = document.getElementById("container");
    container.innerHTML= "";
  data.forEach(element => {
    let receipeName = document.createElement("h2");
    receipeName.className = "name";
    receipeName.textContent = element.strMeal;
    let receipThumb = document.createElement("img");
    receipThumb.setAttribute("class","image");
    receipThumb.src = element.strMealThumb;
    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("class","divContainer");
    itemDiv.append(receipThumb,receipeName);
    container.append(itemDiv);

});
}