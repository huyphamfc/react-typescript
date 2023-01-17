import React, { useState, ChangeEvent } from 'react';

type FormProps = {
  name: string;
  artwork: {
    title: string;
    city: string;
    image: string;
  };
};

function FormNestedObject() {
  const [person, setPerson] = useState<FormProps>({
    name: 'Facebook',
    artwork: {
      title: 'ReactJS',
      city: 'Library',
      image: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
    },
  });

  const {
    name,
    artwork: { title, city, image },
  } = person;

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      name: e.target.value,
      artwork: { title, city, image },
    });
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      name,
      artwork: {
        title: e.target.value,
        city,
        image,
      },
    });
  };

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      name,
      artwork: {
        title,
        city: e.target.value,
        image,
      },
    });
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      name,
      artwork: {
        title,
        city,
        image: e.target.value,
      },
    });
  };

  return (
    <>
      <label>
        Name: <input value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Title: <input value={title} onChange={handleChangeTitle} />
      </label>
      <br />
      <label>
        City: <input value={city} onChange={handleChangeCity} />
      </label>
      <br />
      <label>
        Image: <input value={image} onChange={handleChangeImage} />
      </label>
      <br />
      <p>
        {title} by {name} (located in {city})
      </p>
      <img src={image} alt={title} style={{ width: '200px' }} />
    </>
  );
}

export default FormNestedObject;
