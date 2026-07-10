const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const APP_VERSION = "1.0.0";

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Deployment Platform</title>
    <style>
        body{
            font-family:Arial,Helvetica,sans-serif;
            background:#0f172a;
            color:white;
            text-align:center;
            padding-top:80px;
        }
        .card{
            width:700px;
            margin:auto;
            background:#1e293b;
            padding:40px;
            border-radius:12px;
            box-shadow:0 0 20px rgba(0,0,0,.4);
        }
        h1{
            color:#38bdf8;
        }
        .version{
            color:#22c55e;
            font-size:22px;
            margin-top:20px;
        }
    </style>
</head>
<body>

<div class="card">

<h1>🚀 DevOps Deployment Platform</h1>

<h2>Application is Running Successfully</h2>

<p>This application will soon be deployed automatically using:</p>

<p>
GitHub → Jenkins → Docker → AWS EC2 → Nginx
</p>

<div class="version">
Current Version : ${APP_VERSION}
</div>

</div>

</body>
</html>
`);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        version: APP_VERSION,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
