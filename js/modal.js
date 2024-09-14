import { generateConfirmModal, generateInputModal } from './template.js';

export const openConfirmModal = (onClickConfirm, onClickCancel, confirmText = '확인', cancelText = '취소') => {
  const confirmModal = generateConfirmModal(confirmText, cancelText);
  document.body.appendChild(confirmModal);

  confirmModal.querySelector('.confirm').addEventListener('click', () => {
    onClickConfirm();
    closeModal();
  });
  confirmModal.querySelector('.cancel').addEventListener('click', onClickCancel);
};

export const closeModal = () => {
  document.querySelector('.modal').remove();
};

export const openInputModal = (onClickConfirm, onClickCancel, confirmText = '확인', cancelText = '취소') => {
  const inputModal = generateInputModal(confirmText, cancelText);
  document.body.appendChild(inputModal);

  inputModal.querySelector('.confirm').addEventListener('click', () => {
    onClickConfirm();
    closeModal();
  });
  inputModal.querySelector('.cancel').addEventListener('click', onClickCancel);
};
