function page(content){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
        <link rel="stylesheet" href="../styles/index.css">
        <title>Budgetter</title>
    </head>
    <body>
        <header data-header>
            <h1 data-header-text>Budgetter</h1>
            <p data-display-switch class="button">Tip Calculator</p>
        </header>
        ${content}

        <script src="../scripts/index.js"></script>
    </body>
    
    
    </html>
    `
}

module.exports = page;