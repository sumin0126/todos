import { createNewCard } from './card.js';
import { createNewColumn, openDeleteColumnModal } from './column.js';
import { closeModal, openInputModal } from './modal.js';
import { dragStart, dragEnter, dragLeave, dragOver, dropCard } from './drag.js';

/* 새카드 생성해주는 이벤트 */
const addBtns = document.querySelectorAll('.add-card');
addBtns.forEach((btn) => btn.addEventListener('click', createNewCard));

/* 컬럼창을 삭제해주는 이벤트 */
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

document
  .querySelector('.add-column')
  .addEventListener('click', () => openInputModal(handleConfirmClick, closeModal, '등록', '취소'));

/**
 * 네비게이션바 이벤트
 */
const navBar = document.querySelector('.nav-bar');
const navBarBg = document.querySelector('.navbar-bg');

document.querySelector('.fa-bars').addEventListener('click', () => {
  navBar.classList.add('active');
  navBarBg.classList.add('active');
});

document.querySelector('.close-navbar').addEventListener('click', () => {
  navBar.classList.remove('active');
  navBarBg.classList.remove('active');
});

document.querySelector('.navbar-bg').addEventListener('click', () => {
  navBar.classList.remove('active');
  navBarBg.classList.remove('active');
});
