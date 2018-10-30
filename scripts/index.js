// Summary variables
const budgetHeader = document.querySelector('[data-budget-header]');
const total = document.querySelector('[data-balance]');
const totalIncome = document.querySelector('[data-income]');
const totalExpense = document.querySelector('[data-expense]');
const expensePercent = document.querySelector('[data-percent]');

// Form variables
const addForm = document.querySelector('[data-form]');
const select = document.querySelector('[data-select]');
const submitButton = document.querySelector('[data-submit]');

// Balance sheet variables
const incomeDiv = document.querySelector('[data-add-income]');
const expenseDiv = document.querySelector('[data-add-expense]');

// Get user input
// Determine if positive or negative
// Add to either total income or expenses
// create div in balance sheet for item


// ================================================================
// GETTING USER INPUT
// ================================================================


function handleSubmit(event) {
    event.preventDefault();
    let description = event.target.elements.description.value;
    let amount = event.target.elements.amount.value;
    let isIncome = select.value === '+';
    if (isIncome) {
        incomeDiv.appendChild(makeDivs(description, amount));
    }
    else {
        expenseDiv.appendChild(makeDivs(description, amount));
    }
}

addForm.addEventListener('submit', handleSubmit);

function makeDivs(description, amount) {
    let newItem = document.createElement('div');
    let itemDesc = document.createElement('p');
    let itemAmt = document.createElement('p');
    itemDesc.textContent = description;
    itemAmt.textContent = amount;
    newItem.appendChild(itemDesc);
    newItem.appendChild(itemAmt);
    newItem.classList.add('added');
    return newItem;
}

