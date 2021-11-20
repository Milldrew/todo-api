const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    todoLists: [TodoList]
  }
  type Mutation {
    createTodoList: TodoList
    readTodoList: TodoList
    updateTodoList: TodoList
    deleteTodoList: TodoList
  }

  type TodoList {
    name: String!
    todos: [Todo]
    isDone: Boolean
  }

  type Todo {
    name: String
    isDone: Boolean
  }
`;

module.exports = typeDefs;
