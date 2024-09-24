/**
 *  todos 정보를 로컬스토리지에서 받아오는 함수
 */
export const getTodosFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || {};
  return todos;
};

/**
 *  새로운 todos 정보를 로컬스토리지에 저장하는 함수
 */
export const setTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

/**
 *  새로운 컬럼 정보를 todos 로컬스토리지에 저장하는 함수
 */
export const addNewColumnToLocalStorage = (columnName) => {
  const todos = getTodosFromLocalStorage();
  const newTodos = todos;

  if (!todos[columnName]) {
    newTodos[columnName] = [];
    setTodosToLocalStorage(newTodos);
  }
};

/**
 *  컬럼 정보를 todos 로컬스토리지에서 삭제하는 함수
 */
export const deleteColumnFromLocalStorage = (columnName) => {
  const todos = getTodosFromLocalStorage();
  const newTodos = todos;

  delete newTodos[columnName];
  setTodosToLocalStorage(newTodos);
};
