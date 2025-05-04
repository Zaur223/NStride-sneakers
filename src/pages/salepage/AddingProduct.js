import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/SalePageStyle/AddingProduct.module.scss';

const AddingProduct = (props) => {

    const [formData, setFormData] = useState({
        imgURL: '',
        type: '',
        title: '',
        subtitle: '',
        price: '',
      });
    
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/sneakers', formData);
          alert('Product added successfully!');
        } catch (error) {
          console.error(error);
          alert('Error adding product.');
        }
    };

    const ownerFormStyle = props.isBtnActive ? `${styles['sneakers_form_active']}` : ``
    return (
        <div className={`${styles['sneakers_form']} ${ownerFormStyle}`}>
                <h2>Add a new product</h2>
                <form onSubmit={handleSubmit}>
                <input className={styles['sneakers_input']} name="imgURL" onChange={handleChange} type="text" placeholder="(e.g. images/foto1.jpg)" required />
                    <input className={styles['sneakers_input']} onChange={handleChange} name="type" type="text" placeholder='type' required />
                    <input className={styles['sneakers_input']} onChange={handleChange} name="title" type='text' placeholder='title' required />
                    <input className={styles['sneakers_input']} onChange={handleChange} name="subtitle" type="text" placeholder='subtitle'/>
                    <input className={styles['sneakers_input']} onChange={handleChange} name="price" type="number" placeholder='price' required />
                    <button type='submit' className={styles['sneakers_btn']}>Add Product</button>
                </form>
         </div>
    )
}

export default AddingProduct;