import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';



const UserForm: React.FC<{ onSubmit: (data: { name: string; phone: string; email: string }) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
  };

  return (
    <div className="user-from">
    <form onSubmit={handleSubmit}>
      <TextField className='name' label="Name" type="text" value={name} onChange={(e:any) => setName(e.target.value)} required />
      <br />
      <TextField className='name' label="Phone" type="tel" value={phone} onChange={(e:any) => setPhone(e.target.value)} required />
     <br />
      <TextField className='name' label="Email" type="email" value={email} onChange={(e:any) => setEmail(e.target.value)} required />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default UserForm;
