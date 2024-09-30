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

/**
 *  새로운 카드 정보를 todos 로컬스토리지에 저장하는 함수
 */
export const addNewCardToLocalStorage = (columnName, date) => {
  const todos = getTodosFromLocalStorage();
  const newTodos = todos;

  const card = {
    title: '',
    content: '',
    date: date,
  };

  newTodos[columnName].push(card);
  setTodosToLocalStorage(newTodos);
};

/**
 *  카드 정보를 todos 로컬스토리지에서 삭제하는 함수
 */
export const deleteCardFromLocalStorage = (columnName, cardIndex) => {
  // todos 객체 가져오기
  // 내가 지울 카드가 어느 컬럼에 있는지 알기
  // 내가 지울 카드가 컬럼 값인 배열중에 몇 번째 인덱스에 있는지 알기
  // 지운 새로운 todos 객체를 새로 저장
  const todos = getTodosFromLocalStorage();
  todos[columnName].splice(cardIndex, 1);

  setTodosToLocalStorage(todos);
};

export const updateCardToLocalStorage = (columnName, cardIndex, cardData) => {
  // todos 객체 가져오기
  // 업데이트할 카드 정보 가져오기
  // 카드 업데이트 하기
  // 새로운 todos 객체를 새로 저장
  const todos = getTodosFromLocalStorage();
  todos[columnName][cardIndex] = { ...todos[columnName][cardIndex], ...cardData };

  setTodosToLocalStorage(todos);
};
