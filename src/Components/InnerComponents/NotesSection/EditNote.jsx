import {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch, useSelector } from 'react-redux';
import { editNote } from '../../../redux/notes';


function NewNote(props) {
  const dispatch = useDispatch();
  const {themeStyles} = useSelector(state => state.theme);


  const [noteData, setNoteData] = useState({
    title:props.title, 
    content:props.content, 
    tags:props.tags, 
    dateModified:"", 
    user:""
});

  function submitNote () {
    dispatch(editNote(props.id, noteData))
    props.onClose();

  }
  

  

  function handleTextChange(event){
    let {name, value} = event.target;

    setNoteData(function(prevValues){
      return {...prevValues, [name]: value};
    })
  }

  return (


    <Dialog open= {props.open}

            onClose={ ()=>
                props.onClose() 
            }
    >

        <div id="newNoteDialog" style={themeStyles.newNote}>
        
          <DialogTitle>Edit Note</DialogTitle>
            <DialogContent>
    
              <TextField
                name="title"
                value = {noteData.title}
                onChange = {handleTextChange}
                margin="dense"
                id="name"
                placeholder="Title"
                label="Title"
                fullWidth
                variant="standard"
                required
                sx={{
                  input:{
                    ...themeStyles.newNote.inputColor, 
                    height:"3rem", 
                    fontSize:"2rem",
                    marginBottom:"0.5rem"
                  }}}
                  InputProps={{ disableUnderline: true }}
              />

              <TextField
                name="content"
                value = {noteData.content}
                onChange = {handleTextChange}
                margin="dense"
                id="name"
                placeholder="Content"
                label="Content"
                fullWidth
                variant="standard"
                multiline
                minRows={2}
                sx={{textarea:themeStyles.newNote.inputColor,
                }}
                InputProps={{ disableUnderline: true }}
              />

              <TextField
                name="tags"
                value = {noteData.tags}
                onChange = {handleTextChange}
                margin="dense"
                id="name"
                placeholder="Tags (Separated with comma)"
                label="Tags (Separated with comma)"
                fullWidth
                variant="standard"
                sx={{input:themeStyles.newNote.inputColor,
                }}
                InputProps={{ disableUnderline: true }}
              />

            </DialogContent>
          <DialogActions>
            <Button onClick={()=>{
              props.onClose() }}>
              Cancel</Button>
            <Button onClick={submitNote} variant="contained">Edit</Button>
            {/* <Button onClick={()=>props.onClose()} variant="contained">Edit</Button> */}
          </DialogActions>
      </div>
    </Dialog>
  );
}

export default NewNote;