import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';
export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack !== null) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  function validateName() {
    return name.trim().length !== 0 && true;
  }
  function validateRating() {
    return rating.length !== 0 && true;
  }
  function getNameError() {
    return <p className={styles.error}>Snack name is required</p>;
  }
  function getRatingError() {
    return <p className={styles.error}>Please select a rating</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateName() && validateRating()) {
      if (isEditing) {
        updateSnack(editingSnack.id, name, rating);
      } else {
        addSnack(name, rating);
        setTouched({ name: false, rating: false });
        setName('');
        setRating('');
      }
    } else {
      setTouched({ name: true, rating: true });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, name: true }));
          }}
        />
        {name.trim().length === 0 && touched.name && getNameError()}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, rating: true }));
          }}
        />
        {rating.length === 0 && touched.rating && getRatingError()}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
