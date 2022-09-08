import React from 'react';
import Button from './Button';

import styles from './Modal.module.css';

const Modal = (props) => {
  let classModal = styles.modal;
  let classBannerText = styles.bannerText;
  let classErrorText = styles.modalErrorText;
  if (props.isVisible) {
    classModal = `${styles.modal} ${styles.visible}`;
    classBannerText = `${styles.bannerText} ${styles.visible}`;
    classErrorText = `${styles.modalErrorText} ${styles.visible}`;
  }

  const removeModal = () => {
    props.modalSetting(false);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={classModal} onClick={removeModal}></div>
      <div className={classBannerText}>
        <p>Invalid input</p>
      </div>
      <div className={classErrorText}>
        <p>{props.errorText}</p>{' '}
        <Button type='text' onClick={removeModal}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default Modal;
