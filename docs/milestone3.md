Team Phi

Rishab Chakravarthy, rchakravarth

Zach Reynolds, ztreyenolds

Kenny Duong, kennyvduong

**Part 1:**

Our database system that we are using is simply going to be a static JSON file that holds the data for the types of food that a user can pick from. 
This database contains the calorie breakdown, showing the grams of fat, carbs and protein per serving. There will also be a feature where the user will be able to 
save their meal to a file and access it later but we ran into some issues implementing it unfortunately. This will be resolved before final deployment.

The format of this JSON object is as follows:
{
  "protein":
        {
            "chicken tenderloin":{"calories":110,"protein": 25, "fat":0.5, "carb":0, "price": 1.75},
            "chicken breast":{"calories":126,"protein": 25, "fat":2.9, "carb":0, "price": 1.00},
        ...
        }
   ,...
}

The format of the meal object is as follows:

{
  "meal": {"protein": string, "carb":string, "vegetable":string, "condiment": string, "addons":string 
}

Functions for this database would be create() which would pull values from the textfields where the user selected each part of their meal and save it to the database
Read() would retrieve the file, update would add a new meal to the file, and delete would delete a file. The save to profile button would allow the user to save the meal to their profile.

**Division of Labor: **

Rishab Chakravarthy: Created the food_database json file to reference from. Also made changes to meal_builder.html as well as mealbuilder.js to account for the database.

Zach Reynolds and Kenny Duong: Worked on logic for the server.js file.

Zach Reynolds: Worked on the backend code for the mealbuilder.js file. Server logic including login functionality and minicrypt
  
