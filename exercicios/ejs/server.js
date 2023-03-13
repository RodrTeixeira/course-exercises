const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
        title: "E",
        message: "specialmente fácil"
        },
        {
            title: "J",
            message: "ogos podem ser construídos"
        },
        {
            title: "S",
            message: "implicidade do código"
        }
        
    ];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando...");