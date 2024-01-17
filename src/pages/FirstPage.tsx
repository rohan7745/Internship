import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

const FirstPage: React.FC = () => {
  const Navigate = useNavigate();

  const handleFormSubmit = (data: { name: string; phone: string; email: string }) => {
    localStorage.setItem('userDetails', JSON.stringify(data));
    Navigate('/second-page');
  };

  return (
    <div>
      <h1>First Page</h1>
      <UserForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FirstPage;
