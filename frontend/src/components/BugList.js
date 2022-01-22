import {useState, useEffect} from 'react';
import {get, remove} from '../Calls';
import {Button, Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { bugRoute } from '../ApiRoutes';
import { useNavigate } from 'react-router-dom';


export default function BugList(){

    const [rows, setRows] = useState([]);
    const [needUpdate, setNeedUpdate] =useState(false);
    const navigate = useNavigate();

    useEffect(async()=>{
        let data=await get (bugRoute);
        setRows(data);
    },[needUpdate]);

    const deleteBug = async(id, index) =>{
        await remove(bugRoute,id);

        rows.splice(index,1);
        setRows(rows);
        setNeedUpdate(!needUpdate);
    }

    return(
        <div>
        <div>
            <Button
            variant='contained'
            color="primary"
            startIcon={<AddIcon/>}
            onClick={()=>{navigate("BugEdit")}}
            >
              Add  
            </Button>

        </div>
        <br/>

        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>ID Bug</TableCell>
                        <TableCell align='right'>Tip Bug</TableCell>
                        <TableCell align='right'>Prioritate</TableCell>
                        <TableCell align='right'>Echipa</TableCell>
                        <TableCell align='right'>Data</TableCell>
                        <TableCell align='right'>Actiuni</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index)=>(
                        <TableRow key={row.IdBug}>
                            <TableCell component="th" scope='row'>
                                {row.IdBug}
                            </TableCell>
                            <TableCell align='right'>{row.TipBug}</TableCell>
                            <TableCell align='right'>{row.Prioritate}</TableCell>
                            <TableCell align='right'>{row.Echipa}</TableCell>
                            <TableCell align='right'>{row.Data}</TableCell>
                            <TableCell align='right'>
                                <IconButton onClick={()=>navigate(`BugEdit/${row.IdBug}`)}>
                                    <EditIcon color='primary'/>
                                </IconButton>
                                <IconButton onClick={()=>deleteBug(row.IdBug,index)}> 
                                    <DeleteIcon color='secondary'/>

                                </IconButton>
                                </TableCell>
                        </TableRow>
                    ))}


                </TableBody>
            </Table>


        </TableContainer>
        </div>
        
    )



}
