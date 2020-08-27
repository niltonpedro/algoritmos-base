class TodoList {

  constructor(){
    this.todos = [];
  }

  addTodo(){
    this.todos.push("comprar pão");

    console.log(this.todos);

  }
}

const ListaTodos = new TodoList();

document.getElementById('adicionar').onclick = function() {
  ListaTodos.addTodo();
}
