import { generateCardTemplate } from './template.js';
import { openConfirmModal, closeModal } from './modal.js';
import { deleteCardFromLocalStorage, updateCardToLocalStorage } from './storage.js';

const ENTER_KEY_CODE = 13;

/**
 *  카드 생성 함수
 */
export const createNewCard = (e) => {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Seoul' };
  const koreanDate = date.toLocaleDateString('ko-KR', options);

  const cardTemplate = generateCardTemplate(koreanDate);
  const targetColumn = e.target.closest('.todo-column');

  targetColumn.appendChild(cardTemplate);
  addCardEvents(cardTemplate);
};

/**
 * 카드 이벤트 등록 함수
 */
export const addCardEvents = (card) => {
  card.querySelector('.delete-card').addEventListener('click', openDeleteCardModal);
  card.querySelector('.input-title').addEventListener('keypress', handlePressInput);
  card.querySelector('.input-content').addEventListener('keypress', handlePressInput);
  card.querySelector('.card-title-name').addEventListener('dblclick', handleDoubleClick);
  card.querySelector('.card-content').addEventListener('dblclick', handleDoubleClick);
};

/**
 * 카드 삭제 함수
 */
const openDeleteCardModal = (e) => {
  openConfirmModal(() => deleteCard(e), closeModal, '삭제', '취소');
};

export const deleteCard = (e) => {
  const cardTarget = e.target.closest('.todo-card');
  const columnName = cardTarget.closest('.todo-column').dataset.column;
  const cardIndex = [...cardTarget.closest('.todo-column').querySelectorAll('.todo-card')].indexOf(cardTarget);
  cardTarget.remove();

  deleteCardFromLocalStorage(columnName, cardIndex);
};

/**
 * 카드 input 등록 이벤트
 */
const handlePressInput = (e) => {
  if (e.keyCode === ENTER_KEY_CODE) {
    const targetClass = e.target.className;
    const targetValue = e.target.value;
    const columnName = e.target.closest('.todo-column').dataset.column;
    const cardIndex = [...e.target.closest('.todo-column').querySelectorAll('.todo-card')].indexOf(
      e.target.closest('.todo-card')
    );

    if (targetClass === 'input-title') {
      e.target.closest('.card-title-name').textContent = targetValue;
      const newTitle = { title: targetValue };
      updateCardToLocalStorage(columnName, cardIndex, newTitle);
    } else if (targetClass === 'input-content') {
      e.target.closest('.card-content').textContent = targetValue;
      const newContent = { content: targetValue };
      updateCardToLocalStorage(columnName, cardIndex, newContent);
    }
  }
};

/**
 * 카드 수정
 */
const handleDoubleClick = (e) => {
  const targetElement = e.target;
  const targetClass = targetElement.className;
  let currentText = targetElement.textContent;

  // 현재 텍스트를 input 필드로 변환
  const inputField = document.createElement('input');
  inputField.value = currentText;
  inputField.className = targetClass.includes('title') ? 'input-title' : 'input-content';

  // 기존 요소를 input 필드로 교체
  targetElement.innerHTML = '';
  targetElement.appendChild(inputField);
  inputField.focus();

  // 엔터 키 입력 시 다시 텍스트로 변경
  inputField.addEventListener('keypress', handlePressInput);
};
