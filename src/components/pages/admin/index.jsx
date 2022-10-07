import React, { useCallback, useEffect, useState } from 'react';

const credentials = {
  password: '123',
};

const Admin = () => {
  // const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = e => {
    setPhoto(e.target.files[0]);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const hanldeDateChange = e => {
    setDate(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('photo', photo);

    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
  }

  const checkPassword = useCallback(() => {
    const password = window.prompt('Enter a password');
    if (password === credentials.password) {
      setIsLoggedIn(true);
    } else {
      checkPassword();
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      checkPassword();
    }
  }, [isLoggedIn, checkPassword]);

  if (!isLoggedIn) return null;

  return (
    <div>
      Welcome Admin!

      <form onSubmit={onSubmit} className="admin-form">
        <div className="input-wrapper">
          <p>Name: </p>
          <input type="text" name="name" value={name} onChange={handleNameChange}/>
        </div>

        <div className="input-wrapper">
          <p>Description: </p>
          <textarea name="description" value={description} onChange={handleDescriptionChange}/>
        </div>

        <div className="input-wrapper">
          <p>Date: </p>
          <input type="date" name="date" value={date} onChange={hanldeDateChange}/>
        </div>

        <div className="input-wrapper">
          <input type="file" name="photo" onChange={handlePhotoChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;