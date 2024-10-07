import { createNewCard } from './card.js';
import { generateColumnTemplate } from './template.js';
import { openConfirmModal, closeModal } from './modal.js';
import { dragStart, dragEnter, dragLeave, dragOver, dropCard } from './drag.js';
import { deleteColumnFromLocalStorage, addNewColumnToLocalStorage } from './storage.js';

/**
 *  컬럼 생성 함수
 */
export const createNewColumn = (title) => {
  const columnTemplate = generateColumnTemplate(title);
  const target = document.querySelector('.todo-content');

  target.appendChild(columnTemplate);
  columnTemplate.querySelector('.add-card').addEventListener('click', createNewCard);
  columnTemplate.querySelector('.delete-column').addEventListener('click', openDeleteColumnModal);

  addColumnDragEvents(columnTemplate);
  addNewColumnToLocalStorage(title);
};

export const addColumnDragEvents = (column) => {
  column.addEventListener('dragstart', dragStart); // 드래그 시작할 때
  column.addEventListener('dragenter', dragEnter); // 카드가 컬럼에 들어올 때
  column.addEventListener('dragleave', dragLeave); // 카드가 컬럼을 떠날 때
  column.addEventListener('dragover', dragOver); // 카드가 컬럼 위에 있을 때
  column.addEventListener('drop', dropCard); // 카드가 컬럼에 드롭될 때
};

export const openDeleteColumnModal = (e) => {
  openConfirmModal(() => deleteColumn(e), closeModal, '삭제', '취소');
};

/**
 *  컬럼 삭제 함수
 */
export const deleteColumn = (e) => {
  const targetColumn = e.target.closest('.todo-column');
  const columnName = targetColumn.dataset.column;

  targetColumn.remove();
  deleteColumnFromLocalStorage(columnName);
};
