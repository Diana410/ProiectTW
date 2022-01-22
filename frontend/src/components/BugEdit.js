import {useState, useEffect} from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {Grid, TextField, Button} from '@material-ui/core';
import {post, put, get} from '../Calls';
import { bugRoute } from '../ApiRoutes';
import { useNavigate, useParams } from 'react-router-dom';

export default function BugEdit(){
    const [bug, setBug]=useState
    ({
        TipBug:"",
        Prioritate:"",
        Echipa:"",
        Data:""
    })

    const navigate = useNavigate();
    const params = useParams();
    const id=params.id;

    useEffect(async () =>{
        if(!id)
            return;
        let data=await get(bugRoute,id);
        setBug(data);

    },[])

    const onChangeBug=e=>{

        e.preventDefault();
        e.stopPropagation();

        setBug({...bug,[e.target.name]: e.target.value})
    }

    const saveBug=async()=>{
        if(!id)
            await post(bugRoute,bug);
        else
            await put(bugRoute,id, bug);

        navigate("/");
    }

    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={8} sm={8}>
                    <TextField
                    autoFocus
                    margin='dense'
                    id='TipBug'
                    name='TipBug'
                    label='Tip Bug'
                    fullWidth
                    value={bug.TipBug}
                    onChange={e=>onChangeBug(e)}
                    />
                </Grid>

                <Grid item xs={4} sm={4}>
                    <TextField
                    autoFocus
                    margin='dense'
                    id='Prioritate'
                    name='Prioritate'
                    label='Prioritate'
                    fullWidth
                    value={bug.Prioritate}
                    onChange={e=>onChangeBug(e)}
                    />
                </Grid>

                <Grid item xs={6} sm={4}>
                    <TextField
                    autoFocus
                    margin='dense'
                    id='Echipa'
                    name='Echipa'
                    label='Echipa'
                    fullWidth
                    value={bug.Echipa}
                    onChange={e=>onChangeBug(e)}
                    />
                </Grid>

                <Grid item xs={8} sm={8}>
                    <TextField
                    autoFocus
                    margin='dense'
                    id='Data'
                    name='Data'
                    label='Data'
                    fullWidth
                    value={bug.Data}
                    onChange={e=>onChangeBug(e)}
                    />
                </Grid>

            </Grid>

            <Button color="primary" variant='outlined' startIcon={<CancelIcon/>}
            onClick={()=>{navigate("/BugList")}}>
                Exit
            </Button>

            <Button color="primary" variant='outlined' startIcon={<SaveIcon/>}
            onClick={saveBug()}>
                Save
            </Button>

        </div>
    )


}
