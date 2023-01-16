import React, { useState, ChangeEvent } from 'react';

type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
};

function FormObject() {
  const [form, setForm] = useState<FormProps>({
    firstName: 'React',
    lastName: 'TypeScript',
    email: 'react-typescript@huy.com',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    attribute: 'firstName' | 'lastName' | 'email',
  ): void => {
    setForm((form) => ({
      ...form,
      [attribute]: e.target.value,
    }));
  };

  return (
    <>
      <label>
        First Name: <input value={form.firstName} onChange={(e) => handleChange(e, 'firstName')} />
      </label>
      <br />
      <label>
        Last Name: <input value={form.lastName} onChange={(e) => handleChange(e, 'lastName')} />
      </label>
      <br />
      <label>
        Email Name: <input value={form.email} onChange={(e) => handleChange(e, 'email')} />
      </label>
      <br />
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}

export default FormObject;
