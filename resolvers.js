/* Example TodoList resolved value;
 * Type TodoList
 *     {
 *       name: "TodoListName",
 *       todos: [{ name: "todo name", isDone: true }],
 *       isDone: true,
 *     }
 *
 */

const resolvers = {
  Query: {
    todoLists: () => [
      {
        name: "TodoListName",
        todos: [{ name: "todo name", isDone: true }],
        isDone: true,
      },
    ],
  },
  Mutation: {
    createTodoList: () => "TodoList",
    readTodoList: () => " TodoList",
    updateTodoList: () => " TodoList",
    deleteTodoList: () => " TodoList",
  },
};

module.exports = resolvers;
