import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Department {
  id: string;
  name: string;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: string;
  name: string;
}

const DepartmentList: React.FC = () => {
  const [departments] = useState<Department[]>([
    {
      id: '1',
      name: 'Agricalture & Fishing (5)',
      subDepartments: [
        { id: '1-1', name: 'Agricalture' },
        { id: '1-2', name: 'Crops' },
        { id: '1-3', name: 'Farming Animals & Livestock'  },
        { id: '1-4', name: 'Fishery & Aquacalture' },
        { id: '1-5', name: 'Ranching' },
      ],
    },
    {
      id: '2',
      name: 'Business Services (6)',
      subDepartments: [
        { id: '2-1', name: 'Accounting & Accounting Services' },
        { id: '2-2', name: 'Auction' },
        { id: '2-3', name: 'Business Service General' },
        { id: '2-4', name: 'Call Centers & Business Centers' },
        { id: '2-5', name: 'Career' },
        { id: '2-6', name: 'Career Planning' },
      ],
    },
  ]);

  const [expanded, setExpanded] = useState<string[]>([]);

  const handleToggle = (departmentId: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(departmentId)
        ? prevExpanded.filter((id) => id !== departmentId)
        : [...prevExpanded, departmentId]
    );
  };

  return (
    <List>
      {departments.map((department) => (
        <React.Fragment key={department.id}>
          <ListItem button onClick={() => handleToggle(department.id)}>
          <Checkbox />
            <ListItemText primary={department.name} />
            {expanded.includes(department.id) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expanded.includes(department.id)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDepartment) => (
                <ListItem key={subDepartment.id} button sx={{ pl: 4 }}>
                   <Checkbox />
                  <ListItemText primary={subDepartment.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
