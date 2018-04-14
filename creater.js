// export const addTodo = (txt) => ({
//     type:'ADD_TODO',
//     txt
// })

// 生成器

const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = type;
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

const addTodo = makeActionCreator(ADD_TODO, "todo");
const editTodo = makeActionCreator(EDIT_TODO, "id", "todo");
