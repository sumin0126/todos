import { createNewCard } from './card.js';
import { createNewColumn, openDeleteColumnModal } from './column.js';
import { closeModal, openInputModal } from './modal.js';
import { dragStart, dragEnter, dragLeave, dragOver, dropCard } from './drag.js';

const addBtns = document.querySelectorAll('.add-card');
addBtns.forEach((btn) => btn.addEventListener('click', createNewCard));

const deleteBtns = document.querySelectorAll('.delete-column');
deleteBtns.forEach((btn) => btn.addEventListener('click', openDeleteColumnModal));

const columns = document.querySelectorAll('.todo-column');
columns.forEach((column) => {
  column.addEventListener('dragstart', dragStart); // 드래그 시작할 때
  column.addEventListener('dragenter', dragEnter); // 카드가 컬럼에 들어올 때
  column.addEventListener('dragleave', dragLeave); // 카드가 컬럼을 떠날 때
  column.addEventListener('dragover', dragOver); // 카드가 컬럼 위에 있을 때
  column.addEventListener('drop', dropCard); // 카드가 컬럼에 드롭될 때
});

const handleConfirmClick = () => {
  const inputValue = document.querySelector('.modal-popup').querySelector('.input-content').value;

  createNewColumn(inputValue);
};

document.querySelector('.add-column').addEventListener('click', () => openInputModal(handleConfirmClick, closeModal, '등록', '취소'));
