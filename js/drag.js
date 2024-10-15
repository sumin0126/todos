import { moveCardToLocalStorage, deleteCardFromLocalStorage } from './storage.js';

let draggedCard = null; // 드래그한 카드를 저장할 전역 변수
let lastTarget = null; // 마지막으로 드래그가 진입한 컬럼을 저장

// 드래그 시작 시 호출되는 함수
export const dragStart = (e) => {
  draggedCard = e.target; // 드래그한 카드 요소를 전역 변수에 저장
  lastTarget = null; // 초기화
};

// 드래그된 카드가 컬럼 위에 있을 때 호출되는 함수
export const dragEnter = (e) => {
  e.preventDefault();
  const targetColumn = e.target.closest('.todo-column');
  if (targetColumn && targetColumn !== lastTarget) {
    targetColumn.style.backgroundColor = '#f0f0f0'; // 드롭 가능한 영역 강조
    lastTarget = targetColumn; // 마지막 컬럼 업데이트
  }
};

// 드래그된 카드가 컬럼을 떠날 때 호출되는 함수
export const dragLeave = (e) => {
  const targetColumn = e.target.closest('.todo-column');
  if (targetColumn && e.relatedTarget && !targetColumn.contains(e.relatedTarget)) {
    targetColumn.style.backgroundColor = '#ffffff'; // 컬럼의 배경색 원래대로
    lastTarget = null; // 초기화
  }
};

// 드래그 중인 카드가 드롭 가능하도록 설정
export const dragOver = (e) => {
  e.preventDefault(); // 드롭 가능하게 설정
};

// 드래그된 카드를 새로운 컬럼에 추가하고, 원래 컬럼에서 제거
export const dropCard = (e) => {
  e.preventDefault();

  const prevCol = draggedCard.closest('.todo-column');
  const prevInd = [...prevCol.querySelectorAll('.todo-card')].findIndex((card) => card === draggedCard);

  const title = draggedCard.querySelector('.card-title-name').textContent.trim() || '';
  const content = draggedCard.querySelector('.card-content').textContent.trim() || '';
  const date = draggedCard.querySelector('.card-date').textContent;

  const targetColumn = e.target.closest('.todo-column');
  if (targetColumn) {
    targetColumn.style.backgroundColor = '#ffffff'; // 강조된 영역 해제
    if (draggedCard) {
      targetColumn.appendChild(draggedCard); // 새로운 컬럼으로 카드 이동
      draggedCard = null; // 드래그한 카드 참조 초기화
      lastTarget = null; // 초기화
    }
  }

  moveCardToLocalStorage(targetColumn.dataset.column, title, content, date);
  deleteCardFromLocalStorage(prevCol.dataset.column, prevInd);
};
