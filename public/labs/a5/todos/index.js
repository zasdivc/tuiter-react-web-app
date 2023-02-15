import TodoList from "./TodoList.js";

// 2.24 Creating a TODO List
// alert('Hello World!');
// $('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example</h1>
//    </div>
// `);

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);