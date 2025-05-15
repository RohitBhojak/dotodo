const projectUtil = (function () {
  const addTodo = function (project, todo) {
    project.list.push(todo);
  };

  const removeTodo = function (project, todo) {
    project.list.splice(project.list.indexOf(todo), 1);
  };

  return {
    addTodo,
    removeTodo,
  };
})();

export default projectUtil;
