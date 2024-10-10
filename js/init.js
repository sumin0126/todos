import { createNewCard, loadCardsFromLocalStorage } from './card.js';
import { createNewColumn, openDeleteColumnModal, addColumnDragEvents } from './column.js';
import { closeModal, openInputModal } from './modal.js';
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
  addNewColumnToLocalStorage,
  deleteColumnFromLocalStorage,
  addNewCardToLocalStorage,
  deleteCardFromLocalStorage,
} from './storage.js';

/* 새카드 생성해주는 이벤트 */
const addBtns = document.querySelectorAll('.add-card');
addBtns.forEach((btn) => btn.addEventListener('click', createNewCard));

/* 컬럼창을 삭제해주는 이벤트 */
const deleteBtns = document.querySelectorAll('.delete-column');
deleteBtns.forEach((btn) => btn.addEventListener('click', openDeleteColumnModal));

const columns = document.querySelectorAll('.todo-column');
columns.forEach((column) => {
  addColumnDragEvents(column);
});

const handleConfirmClick = () => {
  const inputValue = document.querySelector('.modal-popup').querySelector('.input-content').value;

  createNewColumn(inputValue);
};

document
  .querySelector('.add-column')
  .addEventListener('click', () => openInputModal(handleConfirmClick, closeModal, '등록', '취소'));

/**
 * 네비게이션바 이벤트
 */
const navBar = document.querySelector('.nav-bar');
const navBarBg = document.querySelector('.navbar-bg');

const handleNavBarOpenClick = () => {
  navBar.classList.add('active');
  navBarBg.classList.add('active');
};

const handleNavBarCloseClick = () => {
  navBar.classList.remove('active');
  navBarBg.classList.remove('active');
};

document.querySelector('.fa-bars').addEventListener('click', () => handleNavBarOpenClick());

document.querySelector('.close-navbar').addEventListener('click', () => handleNavBarCloseClick());

document.querySelector('.navbar-bg').addEventListener('click', () => handleNavBarCloseClick());

console.log(getTodosFromLocalStorage());
loadCardsFromLocalStorage();
