

const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  res.writeHead(200, {

    "Content-Type": "text/html; charset=utf-8"

  });

  res.end(`

    <!DOCTYPE html>

    <html lang="en">

    <head>

      <meta name="viewport"

            content="width=device-width, initial-scale=1">

      <meta name="theme-color" content="#080f20">

      <title>DealNova</title>

      <style>

        body {

          margin: 0;

          background: #080f20;

          color: white;

          font-family: Arial, sans-serif;

          text-align: center;

          padding: 50px 20px;

        }

        h1 { color: #62e6f0; }

        .card {

          background: #16243c;

          border-radius: 18px;

          padding: 25px;

          margin-top: 30px;

        }

      </style>

    </head>

    <body>

      <h1>DealNova</h1>

      <p>Discover more. Spend less.</p>

      <div class="card">

        <h2>Welcome to DealNova</h2>

        <p>Your global deals platform is starting!</p>

        <p>More features coming soon.</p>

      </div>

    </body>

    </html>

  `);

});

server.listen(PORT, "0.0.0.0", () => {

  console.log("DealNova running on port " + PORT);

});
