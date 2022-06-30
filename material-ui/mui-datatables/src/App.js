import './App.css';
import MUIDataTable from "mui-datatables";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from '@material-ui/core';


function YourCustomRowComponent(props) {
  const { name, company, city, state, dataIndex } = props;

  return (
    <TableRow key={dataIndex}>
      <TableCell><Link href={`http://localhost:3000/tenants/id=${name}`}>{name}</Link></TableCell>
      <TableCell align="right">{company}</TableCell>
      <TableCell align="right">{city}</TableCell>
      <TableCell align="right"><Link href={`http://localhost:3000/state/id=${state}`}>{state}</Link></TableCell>
    </TableRow>
  );
}


function App() {


const columns = [
 {
  name: "name",
  label: "Name"
 },
 {
  name: "company",
  label: "Company"
 },
 {
  name: "city",
  label: "City"
 },
 {
  name: "state",
  label: "State"
 },
];


const options = {
  selectableRows: "none",
  customRowRender: (data, dataIndex, rowIndex) => {
   const [name, company, city, state] = data;

   return (
     <YourCustomRowComponent key={dataIndex}
       dataIndex={dataIndex}
       name={name}
       company={company}
       city={city}
       state={state}
     />
   );
 }
 }

const data = [
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

  return (
    <div className="App">
      

<MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
    </div>
  );
}

export default App;
