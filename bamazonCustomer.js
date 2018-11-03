var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    inventory();
    shoppingInput();
  });


  function shoppingInput() {

    
    // prompt for info about the item
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the ID of the product you would like to buy?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "amount",
          type: "input",
          message: "How many units of the product would you like to buy?",
            validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
      ])

      .then(function(answer) {
        var itemBought = answer.id;
        var amountBought = answer.quantity;
        connection.query(
          "SELECT * FROM products WHERE ?",
          {
            id: itemBought,

          },
          
          console.log("purchase successful!")
        );
      });

  }

  function inventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item Id: " + res[i].id + " || Name: " + res[i].product + " || Department: " + res[i].dept + " || Price: " + res[i].price + " || Available: " + res[i].quantity);
        };
    });

};