/**
 * Given an API returning a list of todos, we want to fetch the list,
 * create a separate block for each user, and display their todos in the
 * appropriate block.
 *
 * Use this endpoint URL to get the todos:
 * https://dummyjson.com/todos?limit=10&skip=80.
 *
 * It will return the following structure with total of 10 todos:
 * {
 *  "todos": [
 *    {
 *      "id": 1,
 *      "todo": "Do something nice for someone I care about",
 *      "completed": true,
 *      "userId": 26
 *    }
 *  ]
 * }
 */

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded!');

    let eleRoot = document.getElementById("root");
    let strUrlGetUserTodos = 'https://dummyjson.com/todos?limit=10&skip=80';
    fetch(strUrlGetUserTodos)
        .then(response => response.json())
        .then(result => {
            console.log("result: ", result);
            let arrTodos = result.todos;
            let strGeneratedHtml = '';
            for (let index = 0; index < arrTodos.length; index++) {
                strGeneratedHtml += "<div class='todo'><strong>User # " + arrTodos[index].id + "</strong><br/> <span>" + arrTodos[index].todo + "</span></div>";
            }
            eleRoot.innerHTML = strGeneratedHtml;
        });
});