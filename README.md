This project is a shopping list application that allows users to add items to a list, mark items as purchased, and clear the list. The application uses JavaScript for DOM manipulation and event handling.

Features in the project are:
Add items to the shopping list.
Mark items as purchased.
Clear all items from the shopping list.

 
 Languages used:
-HTML
-CSS
-JavaScript
How to use it 
Fork and clone the repository or download the project files.
Open the index.html file in your web browser.
HTML 
The HTML  includes:

An input field for adding items.
A button to add items to the list.
A container to display the list of items.
A button to mark items as purchased.
A button to clear the list.

HTML CODE ;
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .input-group {
            margin-bottom: 20px;
        }
        .button {
            margin-top: 10px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 5px;
            background-color: #f9f9f9;
            margin-bottom: 5px;
            cursor: pointer;
        }
        li.purchased {
            text-decoration: line-through;
            background-color: #d4edda;
        }
    </style>
</head>
<body>
    <h1>Shopping List</h1>
    <div class="input-group">
        <input type="text" id="item-input" placeholder="Add an item">
        <button id="add-button" class="button">Add</button>
    </div>
    <ul id="shopping-list">
        <!-- List items will be dynamically inserted here -->
    </ul>
    <button id="clear-button" class="button">Clear List</button>

    <script src="index.js"></script>
</body>
</html>


The JS 
-Maintaining an array to store the shopping list items.
-Adding new items to the list.
-Marking items as purchased.
-Clearing the list.

JS CODE 
document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    let items = [];

    addButton.addEventListener('click', () => {
        const itemName = itemInput.value.trim();
        if (itemName) {
            items.push(itemName);
            addItemToDOM(itemName);
            itemInput.value = '';
        }
    });

    shoppingList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('purchased');
        }
    });

    clearButton.addEventListener('click', () => {
        items = [];
        shoppingList.innerHTML = '';
    });

    function addItemToDOM(itemName) {
        const li = document.createElement('li');
        li.textContent = itemName;
        shoppingList.appendChild(li);
    }
});

