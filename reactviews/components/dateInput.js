import React from 'react';
import { TextField } from 'material-ui';

const DateInput = ({ dateString, handleChange }) => {
  /* We want to create our own onChange function so we can do things like convert
   * to Date when the user is done typing and we can also format the string.
   * Here we are using ES6 destructuring to get the property target from the event argument
   */
  const onChange = ({ target }) => {
    const { value } = target;
    // First we want to format the string and add - after each set of numbers to get 1995-08-21
    if (value.length === 4) value += '-'; // i.e if it is 1995 its length is 4 so add a - at the end
    if (value.length === 7) value += '-'; // i.e if it is 1995-08 its length is 7 so add a - at the end

    handleChange('dateString', value);

    /* Now we have to check if the user finished writing the date and we know
     * he will be done when our value's length is equal to 10.
     */
    if (value.length === 10) {
      /* To parse the date since we have it in YYYY-MM-DD we just have to initialize a new date
       * and pass in our date string
       */
       const date = new Date(value);

       // And now we set that date to the parent's state using handleChange
       handleChange('birthDate', date);
    }
  }

  return (
    <TextField
      hintText="YYYY-MM-DD"
      value={dateString}
      onChange={onChange}
      maxLength="10"
    />
  );
}

export default DateInput;
