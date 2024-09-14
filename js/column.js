import { createNewCard } from './card.js';
import { generateColumnTemplate } from './template.js';
import { openConfirmModal, closeModal } from './modal.js';

/**
 *  컬럼 생성 함수
 */
export const createNewColumn = (title) => {
  const columnTemplate = generateColumnTemplate(title);
  const target = document.querySelector('.todo-content');

  target.appendChild(columnTemplate);
  columnTemplate.querySelector('.add-card').addEventListener('click', createNewCard);
  columnTemplate.querySelector('.delete-column').addEventListener('click', openDeleteColumnModal);
};

export const openDeleteColumnModal = (e) => {
  openConfirmModal(() => deleteColumn(e), closeModal, '삭제', '취소');
};

/**
 *  컬럼 삭제 함수
 */
export const deleteColumn = (e) => {
  const targetColumn = e.target.closest('.todo-column');

  targetColumn.remove();
};
