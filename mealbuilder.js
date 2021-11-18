'use strict';

const macros = {'fats':0, 'carbs':0, 'protein': 0};

const prices = {'Protein': 0, 'Chicken': 3, 'Pork': 2, 'Beef': 4, 'Vegetable': 0, 'Broccoli': 1, 'Lettuce': 0.50, 'Spinach': 1.25, 'Carbs': 0, 'Apple': 1.00, 'Corn': 1.00, 'Pasta': 2.00, 'Add-ons': 0, 'Ketchup': 0.50, 'BBQ Sauce': 0.50, 'Mayo': 0.50, 'Condiments': 0, 'Pudding': 1.50, 'Corn Bread': 1.25, 'Soup': 1.75};

document.getElementById('protein').addEventListener('click', () => {
    const prot = document.getElementById('protein').value;
    const price = prices[prot];
    document.getElementById('Prot').innerHTML = prot + ': $' + price;
});
document.getElementById('carbs').addEventListener('click', () => {
    const carb = document.getElementById('carbs').value;
    const price = prices[carb];
    document.getElementById('Carb').innerHTML = carb + ': $' + price;
});
document.getElementById('vegetables').addEventListener('click', () => {
    const veg = document.getElementById('vegetables').value;
    const price = prices[veg];
    document.getElementById('Veg').innerHTML = veg + ': $' + price;
});
document.getElementById('condiments').addEventListener('click', () => {
    const cond = document.getElementById('condiments').value;
    const price = prices[cond];
    document.getElementById('Cond').innerHTML = cond + ': $' + price;
});
document.getElementById('addons').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const price = prices[ao];
    document.getElementById('ao').innerHTML = ao + ': $' + price;
});

document.getElementById('addons').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const price = prices[ao] + prices[cond] + prices[veg] + prices[carb] + prices[prot];
    document.getElementById('total').innerHTML = '$' + price;
});
document.getElementById('condiments').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const price = prices[ao] + prices[cond] + prices[veg] + prices[carb] + prices[prot];
    document.getElementById('total').innerHTML = '$' + price;
});
document.getElementById('vegetables').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const price = prices[ao] + prices[cond] + prices[veg] + prices[carb] + prices[prot];
    document.getElementById('total').innerHTML = '$' + price;
});
document.getElementById('carbs').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const price = prices[ao] + prices[cond] + prices[veg] + prices[carb] + prices[prot];
    document.getElementById('total').innerHTML = '$' + price;
});
document.getElementById('protein').addEventListener('click', () => {
    const ao = document.getElementById('addons').value;
    const veg = document.getElementById('vegetables').value;
    const cond = document.getElementById('condiments').value;
    const carb = document.getElementById('carbs').value;
    const prot = document.getElementById('protein').value;
    const price = prices[ao] + prices[cond] + prices[veg] + prices[carb] + prices[prot];
    document.getElementById('total').innerHTML = 'Total: $' + price;
});