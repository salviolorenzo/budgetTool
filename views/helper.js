function summary(){
    return `
    <section class="summary budget">
        <h3 class="balanceHeader" data-budget-header>Total available:</h3>
        <h1 class="total-balance" data-balance></h1>
        <div class="income-total">
            <p>INCOME</p>
            <p class="numbers" data-income>0.00</p>
        </div>
        <div class="expenses-total">
            <p>EXPENSES</p>
            <p class="numbers" data-expense>0.00</p>
            <p class="percentage" data-percent></p>
        </div>
    </section>
    `;
}

function budget(){
    return `
    <section class="inputs budget">
        <form action="" data-form>
            <select name="plusminus" id="" data-select>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <input type="text" name="description" id="" placeholder="Add description">
            <input type="float" name="amount" id="" placeholder="value">
            <input type="submit" name="submit" id="" value="Add" data-submit>
        </form>
    </section>
    <section class="balance-sheet budget">
        <div class="income" data-add-income>
            <h3>INCOMES</h3>
        </div>
        <div class="expenses" data-add-expense>
            <h3>EXPENSES</h3>
        </div>
    </section>
    `;
}

function calculator(){
    `  
    <section class="calculator hidden">
        <form action="" class="form" data-tip-form>
            <label for="">
                Bill Amount:
            </label>

            <input type="float" name="billAmount" placeholder="100.00">

            <label for="">
                Quality of Service:
            </label>

            <select name="selector" id="">
                <option value=""></option>
                <option value="Amazing">Amazing</option>
                <option value="Great">Great</option>
                <option value="Good">Good</option>
                <option value="Fine">Fine</option>
                <option value="Eh">Eh</option>
            </select>

            <input type="submit" name="tip-submit" id="" value="Calculate">
        </form>
        <div class="total-display" data-calc></div>
    </section>`;
}

function footer(){
    return `
    <footer data-footer>
        <p>Built by Lorenzo Salvio</p>
        <ul class="contact" id="contact-me">
            <li><a href="mailto:salviolorenzo@gmail.com"><i class="fas fa-envelope-square"></i></a>
            <li><a href="https://www.linkedin.com/in/lorenzo-salvio-173210120/"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/salviolorenzo"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/the.actual.boi/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/lorenzo.salvio.9"><i class="fab fa-facebook"></i></a></li>
        </ul>
    </footer>
    `;
}

module.exports = {
    summary,
    budget,
    calculator,
    footer
}