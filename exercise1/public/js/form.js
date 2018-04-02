const { Pool } = require('pg');
//connection link
var connectionString = "postgres://localhost:5432/abdullah";
//init pool
const pool = new Pool({
    connectionString: connectionString
})


// submit button event
$("#submitStudent").click(function () {
    console.log("test passed")

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var emailAddress = $('#emailAddress').val();

    pool.query("INSERT INTO student(first,last,email) VALUES ($1,$2,$3)"),
        [{
            first: firstName,
            last: lastName,
            email: emailAddress
        }]

    pool.end();
});