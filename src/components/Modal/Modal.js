import createCart from '../Cart/Cart';

const LoadModal = () => {
  let modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  modal.setAttribute('id', 'modal');

  modal.addEventListener('click', () => CloseModal());

  let modalContent = document.createElement('div');
  modalContent.setAttribute('id', 'modal-content');

  modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  modal.append(modalContent);
  let body = document.querySelector('body');
  body.append(modal);

  //create cart
  createCart();
};

export const CloseModal = () => {
  let modal = document.querySelector('#modal');
  modal.style.display = 'none';
  window.isModalOpen = false;
};

export const OpenModal = (event) => {
  let modal = document.querySelector('#modal');
  modal.style.display = 'block';
  window.isModalOpen = true;
  event.stopPropagation();
};

export default LoadModal;
