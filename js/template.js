/**
 * 컬럼 템플릿
 */
export const generateColumnTemplate = (title) => {
  const newColumn = document.createElement('div');
  newColumn.setAttribute('class', 'todo-column');
  newColumn.setAttribute('data-column', title);

  const columnTemplate = `
    <section class="column-title">
      <div class="title-name">${title}</div>
      <div class="title-btn">
        <!-- 더하기 버튼 -->
        <i class="fa-solid fa-plus add-card"></i>
        <!-- 엑스 버튼 -->
        <i class="fa-solid fa-xmark delete-column"></i>
      </div>
    </section>
  `;

  newColumn.innerHTML = columnTemplate;

  return newColumn;
};

/**
 * 카드 템플릿
 */
export const generateCardTemplate = (date) => {
  const newCard = document.createElement('section');
  newCard.setAttribute('class', 'todo-card');
  newCard.setAttribute('draggable', 'true');

  const cardTemplate = `
    <div class="card-title">
      <div class="card-title-name">
        <input class="input-title" />
      </div>
      <i class="fa-solid fa-xmark delete-card"></i>
    </div>
    <div class="card-content">
      <input class="input-content" />
    </div>
    <div class="card-date">${date}</div>
  `;

  newCard.innerHTML = cardTemplate;

  return newCard;
};

/**
 * 모달 템플릿
 */
export const generateConfirmModal = (confirmText, cancelText) => {
  const newModal = document.createElement('div');
  newModal.setAttribute('class', 'modal');

  const modalTemplate = `
    <div class="modal-popup">
      <h3>삭제하시겠습니까?</h3>
      <div class="button-wrapper">
        <button class="confirm">${confirmText}</button>
        <button class="cancel">${cancelText}</button>
    </div>
  `;

  newModal.innerHTML = modalTemplate;

  return newModal;
};

/**
 * input 모달 템플릿
 */
export const generateInputModal = (confirmText, cancelText) => {
  const newModal = document.createElement('div');
  newModal.setAttribute('class', 'modal');

  const modalTemplate = `
    <div class="modal-popup">
    <h3>제목을 입력하시오</h3>
      <input class='input-content'/>
      <div class="button-wrapper">
        <button class="confirm">${confirmText}</button>
        <button class="cancel">${cancelText}</button>
    </div>
  `;

  newModal.innerHTML = modalTemplate;

  return newModal;
};
