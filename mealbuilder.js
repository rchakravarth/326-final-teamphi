'use strict';

// const macros = {'fats':0, 'carbs':0, 'protein': 0};

// const prices = {'Protein': 0, 'Chicken': 3, 'Pork': 2, 'Beef': 4, 'Vegetable': 0, 'Broccoli': 1, 'Lettuce': 0.50, 'Spinach': 1.25, 'Carbs': 0, 'Apple': 1.00, 'Corn': 1.00, 'Pasta': 2.00, 'Add-ons': 0, 'Ketchup': 0.50, 'BBQ Sauce': 0.50, 'Mayo': 0.50, 'Condiments': 0, 'Pudding': 1.50, 'Corn Bread': 1.25, 'Soup': 1.75};

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

document.getElementById('protein').addEventListener('click', () => {
    const protein = document.getElementById('protein').value;
    const protein_price = foodData["protein"][protein].price;
    document.getElementById('Prot').innerHTML = protein + ': $' + protein_price;
});

document.getElementById('carbs').addEventListener('click', () => {
    const carb = document.getElementById('carbs').value;
    const carb_price = foodData["carbs"][carb].price;
    document.getElementById('Carb').innerHTML = carb + ': $' + carb_price;
});

document.getElementById('vegetables').addEventListener('click', () => {
    const veg = document.getElementById('vegetables').value;
    const veg_price = foodData["vegetables"][veg].price;
    document.getElementById('Veg').innerHTML = veg + ': $' + veg_price;
});

document.getElementById('condiments').addEventListener('click', () => {
    const cond = document.getElementById('condiments').value;
    const cond_price = foodData["condiments"][cond].price;
    document.getElementById('Cond').innerHTML = cond + ': $' + cond_price;
});

document.getElementById('addons').addEventListener('click', () => {
    const addons = document.getElementById('addons').value;
    const addons_price = foodData["addons"][addons].price;
    document.getElementById('ao').innerHTML = addons + ': $' + addons_price;
});

document.getElementById('addons').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const total = foodData["protein"][prot].price + foodData["addons"][ao].price + foodData["vegetables"][veg].price + 
    foodData["carbs"][carb].price + foodData["condiments"][cond].price;
    document.getElementById('total').innerHTML = '$' + total;
});

document.getElementById('condiments').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const total = foodData["protein"][prot].price + foodData["addons"][ao].price + foodData["vegetables"][veg].price + 
    foodData["carbs"][carb].price + foodData["condiments"][cond].price;
    document.getElementById('total').innerHTML = '$' + total;
});

document.getElementById('vegetables').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const total = foodData["protein"][prot].price + foodData["addons"][ao].price + foodData["vegetables"][veg].price + 
    foodData["carbs"][carb].price + foodData["condiments"][cond].price;
    document.getElementById('total').innerHTML = '$' + total;
});

document.getElementById('carbs').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const total = foodData["protein"][prot].price + foodData["addons"][ao].price + foodData["vegetables"][veg].price + 
    foodData["carbs"][carb].price + foodData["condiments"][cond].price;
    document.getElementById('total').innerHTML = '$' + total;
});

document.getElementById('protein').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const total = foodData["protein"][prot].price + foodData["addons"][ao].price + foodData["vegetables"][veg].price + 
    foodData["carbs"][carb].price + foodData["condiments"][cond].price;
    document.getElementById('total').innerHTML = '$' + total;
});

// document.getElementById("save").addEventListener('click', () =>{
    
// })

document.getElementById("show-macros").addEventListener('click',()=>{
    const
})