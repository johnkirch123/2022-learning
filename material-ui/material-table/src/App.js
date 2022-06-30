import { useState } from 'react';

import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { Link } from '@material-ui/core';

const App = () => {
     
  const defaultMaterialTheme = createTheme();
  const [ tableData, setTableData ] = useState([]);

  const empList = [
    { id: 1, name: 'Bob', email: 'bobguy@gmail.com', phone: 19702545564},
    { id: 2, name: 'Jill', email: 'jillianchef@gmail.com', phone: 19702544364},
    { id: 3, name: 'Sarah', email: 'smwaldrop@gmail.com', phone: 19702542654},
    { id: 4, name: 'Jim', email: 'jimmyCman@gmail.com', phone: 19702547994}
  ]

  const columns = [
    { title: 'Name', field: 'name', render: rowData => <Link to={`http://localhost:3000/id=${rowData.id}`}>{rowData.name}</Link> },
    { title: 'Email', field: 'email' },
    { title: 'Phone Number', field: 'phone' },
    { title: 'Age', field: 'age' },
    { title: 'Gender', field: 'gender' },
    { title: 'City', field: 'city' },
  ]

    return(
        <div style={{ width: '100%', height: '100%' }}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                    columns={columns}
                    data={empList}
                    title="Properties"
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
