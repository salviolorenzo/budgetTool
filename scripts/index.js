const header = document.querySelector('[data-header]');
const headerText = document.querySelector('[data-header-text]');
const footer = document.querySelector('[data-footer]');
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
let totalIncomeAmt = parseFloat(totalIncome.textContent);
let totalExpenseAmt = parseFloat(totalExpense.textContent);


const triggerElement = document.querySelector('[data-display-switch]');
const budgetObject = document.getElementsByClassName('budget');
const calculatorObject = document.getElementsByClassName('calculator');
let budgetArray = [];
let tipArray = [];
// ================================================================
// GETTING USER INPUT
// ================================================================
for (item of budgetObject) {
  budgetArray.push(item);
}
for (item of calculatorObject) {
  tipArray.push(item);
}


triggerElement.addEventListener('click', function () {
  for (item of budgetArray) {
    item.classList.toggle('hidden');
  }
  for (item of tipArray) {
    item.classList.toggle('hidden');
  }

  header.classList.toggle('darkMode');
  footer.classList.toggle('darkMode');

  if (headerText.textContent === 'Budgetter') {
    headerText.textContent = 'Tip Calculator';
    triggerElement.textContent = 'Budgetter';
  }
  else if (headerText.textContent === 'Tip Calculator') {
    headerText.textContent = 'Budgetter';
    triggerElement.textContent = 'Tip Calculator';
  }
})




function handleSubmit(event) {
  event.preventDefault();
  let description = event.target.elements.description.value;
  let amount = parseFloat(event.target.elements.amount.value);
  let isIncome = select.value === '+';
  if (description !== '' && amount !== '') {
    if (isIncome) {
      incomeDiv.appendChild(makeDivs(description, amount));
      totalIncomeAmt += amount;
    }
    else {
      expenseDiv.appendChild(makeDivs(description, amount));
      totalExpenseAmt += amount;
    }
    totalIncome.textContent = totalIncomeAmt;
    totalExpense.textContent = totalExpenseAmt;
    expensePercent.textContent = `${drawPercent(totalIncomeAmt, totalExpenseAmt).toFixed(2)}%`;
    total.textContent = drawTotal(totalIncomeAmt, totalExpenseAmt);
    description.value = '';
    amount.value = '';
  }
  else {
    alert('Fill out entirely');
  }
}

addForm.addEventListener('submit', handleSubmit);

function divX() {
  let
}

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

function drawTotal(income, expense) {
  let totalAmt = income - expense;
  if (totalAmt > 0) {
    return `+ $${totalAmt.toFixed(2)}`;
  }
  else {
    return `- $${Math.abs(totalAmt).toFixed(2)}`;
  }
}

function drawPercent(income, expense) {
  let percent = (expense / income) * 100;
  return percent;
}

const tipCalc = document.querySelector('[data-tip-form]');
const calcSection = document.querySelector('[data-calc]');

function tipSubmit(event) {
  event.preventDefault();
  if (calcSection.hasChildNodes()) {
    calcSection.removeChild(calcSection.firstChild)
  }
  let billAmount = parseFloat(event.target.elements.billAmount.value);
  let quality = event.target.elements.selector.value;
  let tipPercent;

  if (quality === "Amazing") {
    tipPercent = 0.35;
  }
  else if (quality === "Great") {
    tipPercent = 0.25;
  }
  else if (quality === "Good") {
    tipPercent = 0.20;
  }
  else if (quality === "Fine") {
    tipPercent = 0.15;
  }
  else if (quality === "Eh") {
    tipPercent = 0.10;
  }

  let tipAmount = billAmount * tipPercent;
  let total = billAmount + tipAmount;

  let tipBox = document.createElement('p');
  let totalBox = document.createElement('p');

  let final = document.createElement('div');

  tipBox.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
  totalBox.textContent = `Total: $${total.toFixed(2)}`;
  final.appendChild(tipBox);
  final.appendChild(totalBox);
  calcSection.appendChild(final);
}

tipCalc.addEventListener('submit', tipSubmit);