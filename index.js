document.addEventListener('DOMContentLoaded', () => {
    // an array to store shopping list items 
    const shoppingList = []; 
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const clearButton = document.getElementById('clear-button');
    const shoppingListContainer = document.getElementById('shopping-list');

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            shoppingList.push(itemText);
            // updates DOM 
            renderList();
            itemInput.value = '';
            itemInput.focus();
        }
    }

    function markItemPurchased(event) {
        const itemElement = event.target;
        const index = itemElement.dataset.index;
        itemElement.classList.toggle('purchased');
    }

    function clearList() {
        shoppingList.length = 0;
        renderList();
    }

    function renderList() {
        shoppingListContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.textContent = item;
            listItem.dataset.index = index;
            listItem.addEventListener('click', markItemPurchased);
            shoppingListContainer.appendChild(listItem);
        });
    }

    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
