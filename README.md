# Calorie Tracker

A simple lightweight react native app that helps with keeping track of your caloric intake. Data is saved to your local device. Useful for when you want to quickly log your meals and snacks without needing to track for multiple days. 

## Initial State
The app will start with a clean slate without any data. The equation will be show the variables all set to 0. The calorie panel will display 3 buttons ("set limit", "consumed", and "burned", respectively) without any additional data.

<picture>
    <img alt="Inital app state" src="images\IMG_6351.png" width="300">
</picture>

## Setting a Limit
Pressing the "set limit" button will enable you to set a new value for your maximum caloric intake. You should notice the change take effect in the equation.

<picture>
    <img alt="Set limit modal" src="images\IMG_6352.png" width="300">
</picture>

## Adding Consumed Calories
Pressing the "consumed" button will open up a modal that allows you to add consumed calories. Consumed calories are subtracted from your limit.

<picture>
    <img alt="Add calories consumed modal" src="images\IMG_6353.png" width="300">
</picture>
<picture>
    <img alt="A new element is added below the 'consumed' button after adding calories" src="images\IMG_6354.png" width="300">
</picture>

## Adding Burned Calories
Pressing the "consumed" button will open up a modal that allows you to add consumed calories. Burned calories are added to your limit.

<picture>
    <img alt="Add calories burned modal" src="images\IMG_6355.png" width="300">
</picture>
<picture>
    <img alt="A new element is added below the 'burned' button after adding calories" src="images\IMG_6356.png" width="300">
</picture>

## Removing Calories
Swipe from right to left on a calorie element and press the 'remove' button to remove it.

<picture>
    <img alt="Swipe from right to left on a calorie element and press the 'remove' button to remove it" src="images\IMG_6357.png" width="300">
</picture>

## Changing Calorie Type
When clicking "consumed" or "burned", a modal will automatically select the corresponding "type". If you wish to change it, select the other type from the dropdown menu.

<picture>
    <img alt="Type's dropdown menu" src="images\IMG_6358.png" width="300">
</picture>
