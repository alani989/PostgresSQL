var Sequelize = require('sequelize');

const conn = new Sequelize('postgres://localhost:5432/restaurant');

var RestaurantTable = conn.define('restaurant', {
    name: Sequelize.STRING,
    distance: Sequelize.INTEGER,
    stars: Sequelize.INTEGER,
    category: Sequelize.STRING,
    favorite: Sequelize.STRING,
    takeout: Sequelize.BOOLEAN,
    last_visit: Sequelize.DATEONLY,
},
{
    freezeTableName: true
}
)

// create a record
conn.sync().then(function () {
    RestaurantTable.create({
        name: "New2",
        distance: 53,
        stars: 43,
        category: "Asian2",
        favorite: "Noodles2",
        takeout: "false",
        last_visit: '2018-03-03'
    })
})

// find a record
// conn.sync().then(function () {
//     RestaurantTable.findAll().then(function(data){
//         console.log(data[0]);
//     })
// })