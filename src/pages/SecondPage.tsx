import React from 'react';
import PostTable from '../components/PostTable';
import DepartmentList from '../components/DepartmentList';
import { Container, Typography } from '@mui/material';

const SecondPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Second Page</Typography>
      <PostTable />
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
