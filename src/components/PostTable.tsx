import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchPosts, Post } from '../api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const PostTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns}  checkboxSelection />
    </div>
  );
};

export default PostTable;
