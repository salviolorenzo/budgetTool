function header(isLoggedIn = false) {
  return `
    <header data-header>
        <h1 data-header-text>Budgetter</h1>
        ${isLoggedIn ? calcLink() : none()}
        ${isLoggedIn ? logoutButton() : none()}
    </header>
    `;
}

function calcLink() {
  return `
        <p data-display-switch class="button">Tip Calculator</p>
    `;
}

function none() {
  return ``;
}

function logoutButton() {
  return `
        <form action="/logout" method="POST">
            <input type="submit" value="Logout">
        </form>
    `;
}

function login() {
  return `
        <section class="loginReg">
            <form action='/login' method="POST">
                <label>
                    Email:<br>
                </label>
                <input type="email" name="email" required>
                <label>
                    Password:<br>
                    <input type="password" name="password" required>
                </label>
                <input type="submit" value="Log in">
            </form>
    `;
}

function register() {
  return `
        <form action="/register" method="POST">
            <label>
                Name: <br>
            </label>
            <input type="text" name="user_name" placeholder="John Smith" required>
            <label>
                Email: <br>
            </label>
            <input type="email" name="email" placeholder="john@email.com" required>
            <label>
                Password: <br>
            </label>
            <input type="password" name="password" placeholder="p455w0rd!" required>
            <input type="submit" value="register">
        </form>
    </section>
    `;
}

function summary(amount, income, expense, percent) {
  return `
    <section class="summary budget">
        <h3 class="balanceHeader" data-budget-header>Total available:</h3>
        <h1 class="total-balance" data-balance>$${amount}</h1>
        <div class="income-total">
            <p>INCOME</p>
            <p class="numbers" data-income>${income}</p>
        </div>
        <div class="expenses-total">
            <p>EXPENSES</p>
            <p class="numbers" data-expense>${expense}</p>
            <p class="percentage" data-percent>${percent}</p>
        </div>
    </section>
    `;
}

function budget() {
  return `
    <section class="inputs budget">
        <form action="/addData" method="POST" data-form>
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

function calculator() {
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

function footer() {
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
  header,
  login,
  register,
  summary,
  budget,
  calculator,
  footer
};
