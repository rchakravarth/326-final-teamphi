'use strict';

const url = "https://raw.githubusercontent.com/rchakravarth/326-final-teamphi/main/food_database.json";

// Function that retrieves food data from static JSON file.
async function getData(url) {
    const response = await fetch(url);
    let obj;
    if(response.ok){
        obj = await response.json();
    }else{
        console.log("error");
    }
    return obj;
}

// 
const foodData = await getData(url);

let protein_price = 0, carb_price = 0, veg_price = 0, cond_price = 0, addons_price = 0;
document.getElementById('protein').addEventListener('change', () => {
    const protein = document.getElementById('protein').value;
    protein_price = foodData["protein"][protein].price;
    document.getElementById('Prot').innerHTML = protein + ': $' + protein_price;
});

document.getElementById('carbs').addEventListener('change', () => {
    const carb = document.getElementById('carbs').value;
    carb_price = foodData["carbs"][carb].price;
    document.getElementById('Carb').innerHTML = carb + ': $' + carb_price;
});

document.getElementById('vegetables').addEventListener('change', () => {
    const veg = document.getElementById('vegetables').value;
    veg_price = foodData["vegetables"][veg].price;
    document.getElementById('Veg').innerHTML = veg + ': $' + veg_price;
});

document.getElementById('condiments').addEventListener('change', () => {
    const cond = document.getElementById('condiments').value;
    cond_price = foodData["condiments"][cond].price;
    document.getElementById('Cond').innerHTML = cond + ': $' + cond_price;
});

document.getElementById('addons').addEventListener('change', () => {
    const addons = document.getElementById('addons').value;
    addons_price = foodData["addons"][addons].price;
    document.getElementById('ao').innerHTML = addons + ': $' + addons_price;
});

document.getElementById('addons').addEventListener('change', () => {
    const total = protein_price + carb_price + veg_price + 
    cond_price + addons_price;
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
});

document.getElementById('condiments').addEventListener('change', () => {
    const total = protein_price + carb_price + veg_price + 
    cond_price + addons_price;
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
});

document.getElementById('vegetables').addEventListener('change', () => {
    const total = protein_price + carb_price + veg_price + 
    cond_price + addons_price;
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
});

document.getElementById('carbs').addEventListener('change', () => {
    const total = protein_price + carb_price + veg_price + 
    cond_price + addons_price;
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
});

document.getElementById('protein').addEventListener('change', () => {
    const total = protein_price + carb_price + veg_price + 
    cond_price + addons_price;
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
});

// document.getElementById("save").addEventListener('click', () =>{
//     meals.proteins.push(document.getElementById('protein').value);
//     meals.carbs.push(document.getElementById('carbs').value);
//     meals.vegetables.push(document.getElementById('vegetables').value);
//     meals.condiments.push(document.getElementById('condiments').value);
//     meals.add_ons.push(document.getElementById('addons').value);
// })

document.getElementById("show-macros").addEventListener('click',()=>{
    const addon = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carbohydrates = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    
    const totalCarbs = foodData["addons"][addon].carb + foodData["vegetables"][veg].carb + 
    foodData["condiments"][cond].carb + foodData["carbs"][carbohydrates].carb + foodData["protein"][prot].carb;

    const totalFats = foodData["addons"][addon].fat + foodData["vegetables"][veg].fat + 
    foodData["condiments"][cond].fat + foodData["carbs"][carbohydrates].fat + foodData["protein"][prot].fat;

    const totalProtein = foodData["addons"][addon].protein + foodData["vegetables"][veg].protein + 
    foodData["condiments"][cond].protein + foodData["carbs"][carbohydrates].protein + foodData["protein"][prot].protein;

    const totalCalories = foodData["addons"][addon].calories + foodData["vegetables"][veg].calories + 
    foodData["condiments"][cond].calories + foodData["carbs"][carbohydrates].calories + foodData["protein"][prot].calories;

    document.getElementById("total_protein").innerHTML = totalProtein + 'g protein';
    document.getElementById("total_carb").innerHTML = totalCarbs + 'g carbs';
    document.getElementById("total_fat").innerHTML = totalFats + 'g fats';
    document.getElementById("total_calories").innerHTML = totalCalories + ' calories';
})