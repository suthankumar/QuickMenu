# QuickMenu
Restaurant Menu Application
====================================
![alt text](https://github.com/suthankumar/QuickMenu/blob/master/order.png?raw=true)
## Getting Started - 

First, run the development server:

```bash
npm install
npm start

run on http://localhost:8080/
```

## Page Introduction - 3 Pages
- **Homepage** - intial page 
- **Homepage/Order Page** - It is place where the user can order for meal. one from the main course and other meal from different courses(starter, dessert).
- **Homepage/Manage Menu page** - the restaurant can make a changes to the menu(they can change the price or the name of the meal and also they can add new meal)

## My task
Implemented all the Rules that you have mention including:
- Each person must have at least two courses, one of which must be a main.
- Each diner cannot have more than one of the same course.
- There is only one piece of cheesecake left.
- Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal.



**What i have changed to orginial data**
- Made chanage to the orginial `menu-data.json` data,  I have added "stock" key to each meal of the course and defined the intial stock level(for Cheese cake I placed one)

**What would i have done if I had more time**
- Designed the modal to show the alert for the user instead of  using the default javascript alert
- More test case to check some function.
- Should have implemented JSon server DB, so that I have the backend DB to communicate. Instead of losing all the data every time you refresh or start the application



