"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); // importing axios from axios
var url = 'https://jsonplaceholder.typicode.com/todos/1'; //fetch url
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
