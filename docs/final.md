Team Phi

Project name: food4umass (Heroku link: https://food4umass.herokuapp.com/)

Semester: Fall 2021

Project overview:

The app that we built is a simple meal plan builder that implements two features: the first is a budget 
estimator based on one serving size, with 5 different categories of food to pick from. Additionally,
there is an option for the user to show the macronutrient profile with the individual grams of carbs,
fats, and protein in a meal as well as the total calories. Lastly, there is a "save meal" button that will
save the current meal to the user's profile. This app separates itself from some of the other meal planning 
applications that are out there as it includes a budget based on the serving size to give an estimated cost
per meal.
--------------------------------------------------------------------------------------------------------------------------
User Interface:
![image](https://user-images.githubusercontent.com/60271599/145690911-13d89709-1038-44cd-80ce-ec2a278189e0.png)

Above is the log-in screen. Before users are able to log in, they need to register for an account on the page below.

![image](https://user-images.githubusercontent.com/60271599/145690946-bca85c76-5b9b-4196-8765-3b1e41207827.png)

Once the user has either registered or signed in with an existing account, they will see the main page where our 
user interactivity will happen on. The user can select different foods per category and it will tally up the cost of 
everything the user selects. They also have the option to show macronutrient profile in grams as well as total calories of
their selections. The plan was also to save the meals 
![image](https://user-images.githubusercontent.com/60271599/145691030-4e5c645b-5a7a-46af-8cad-c3b1b50864d8.png)
![image](https://user-images.githubusercontent.com/60271599/145691040-aa9511e3-4132-4f2d-93d3-5419e4d53d1f.png)
![image](https://user-images.githubusercontent.com/60271599/145691224-488b2ff7-9905-4c75-87e0-ef2b67cc501a.png)

Group members (Name, github alias): 

Rishab Chakravarthy, rchakravarth

Zach Reynolds, ztreyenolds

Kenny Duong, kennyvduong

--------------------------------------------------------------------------------------------------------------

APIs:

/login --> will let user log in using their credentials

/register --> create user profile

/ --> page to create the meals from the given options

Currently not working:

/mealbuilder: Supposed to save the current meal to SQL database (CRUD operations)

------------------------------------------------------------------------------------------------------------------

Database: 

Here is the format of the meal object that we pull from the SQL database

{"protein": string, "carb":string, "vegetable":string, "condiment": string, "addons":string }

In the SQL table the format is as follows:

Meal table

| Attribute    | Data Type | Description              |
|--------------|-----------|--------------------------|
| meal_id      | String    | id of meal               |
| protein      | String    | Type of protein          |
| carbs        | String    | Type of carbs            |
| vegetables   | String    | Type of vegetable        |
| condiments   | String    | Type of condiment        |
| addons       | String    | Type of addons           |

Functions for this database would be create() which would pull values from the textfields where the user selected each part of their meal and save it to the database Read() would retrieve the file, update would add a new meal to the file, and delete would delete a file. The save to profile button would allow the user to save the meal to their profile.

The routing is as follows:

/register (lets user create an account) --> /login (user logs in) ---> mealbuilder (create meal for the user to save)

Authentication happens when the user logs in so they should not be able to see the mealbuilder page until they have logged in.

**Division of Labor**

Rishab Chakravarthy: Created the wireframes for the sign-in and mealbuilder pages as well as helped build the actual UI
of the mealbuilder page. Helped build the accompanying mealbuilder.js file for the mealbuilder html page. Creating the mock endpoint data + worked on database logic. Created the documents for each milestone as well as the final report.

Kenny Duong: Created the html pages for the sign-in and register. Assisted in creating the html for the page that creates the meal.  Worked on developing the back-end coding for server.js, focusing on authenification and redirecting the pages. Recorded the video demo.

Zach Reynolds: Worked on building the preliminary UI for index.html and the some of the logic for mealbuilder.js. Worked on the backend code for the mealbuilder.js file. Server logic including login functionality and minicrypt.

**Conclusion**

This project was definitely a challenging task. Most of us really only had experience coding on front-end only websites that did
not rely on servers to relay information. This made implementing the back-end requirements by far the most difficult task. For the 
most part, the requirements seemed mostly concrete but a lot of it seemed ambiguous which was not necessarily a bad thing. There was a bit of miscommunication regarding the method of data storage as one of our group members asked if we were allowed to use a 
JSON file for our database like in the homeworks and were initially told it was fine but Erin, the TA that we had asked, said that 
it was not allowed and that we had to use SQL/MongoDB. Additionally, the redirecting of the web pages was another challenge that we faced but were able to resolve by the end. 

**Rubric**

Final Rubric

Login/User Authentication    ___ / 30 pts
 - Authentication
 - Successfully create a user through sign up
 - Successfully login a user
 - Only able to view the details of the inner pages if you are a user.
 - We acknowledge that the page will start to load the html if you are not logged in; however, no details will be displayed.
 - Routing
 - Linting/ code style

Meal Builder                    ___ / 35 pts
 - Successfully select items for a meal
 - Successfully gives a total cost for your meal
 - Successfully calculates macros for the meal
 - Successfully save meal to profile

CRUD                          ___ / 10 pts

Create: 2.5 pt

 - Users
 - Meals

Read: 2.5 pt

 - View personal meal
 - View meal items
 - View macros

Update: 2.5 pt
 - Edit saved meal

Delete: 2.5 pt
 - Delete the saved meal


Heroku Deployment         ___ / 10 pts
Final Video 	+ Report                 ___ / 15 points

Total: ___ / 100 points


