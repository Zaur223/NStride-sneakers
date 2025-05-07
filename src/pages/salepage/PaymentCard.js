import React, { useState } from 'react';
import styles from '../../styles/SalePageStyle/PaymentCard.module.scss';

const PaymentCard = function(props) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onIsOrderActive(true)
  };

  return (
    <div className={styles.card}>
      <div className={styles['card_preview']}>
        <div className={styles['card_number']}>{formData.cardNumber || '#### #### #### ####'}</div>
        <div className={styles['card_info']}>
          <div>{formData.name || 'Name'}</div>
          <div>{formData.expiry || 'MM/YY'}</div>
        </div>
      </div>

      <form className={styles['card_form']} onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card numbers"
          maxLength="19"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength="5"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          maxLength="3"
          onChange={handleChange}
          required
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentCard;
