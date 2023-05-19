import {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch, useSelector } from 'react-redux';
import { addNote } from "../../../redux/notes";



function NewNote(props) {
  const dispatch = useDispatch();
  const {themeStyles} = useSelector(state => state.theme);

  const [noteData, setNoteData] = useState({
    title:"", 
    content:"", 
    tags:"", 
    dateModified:"", 
    user:""
  });



  function submitNote () {
    dispatch(addNote(noteData));
    props.onCloseAfterAdd();
  }
  

  

  function handleTextChange(event){
    let {name, value} = event.target;

    setNoteData(function(prevValues){
      return {...prevValues, [name]: value};
    })
  }

  return (


    <Dialog open={props.open}

            onClose={ ()=>
                {props.onClose()}
            }

            // sx={themeStyles.newNote}
      
    >

        <div id="newNoteDialog" style={themeStyles.newNote}>
        
          <DialogTitle>Add Note</DialogTitle>
            <DialogContent>
    
              <TextField
                name="title"
                onChange = {handleTextChange}
                autoFocus
                margin="dense"
                id="name"
                label='Title'
                placeholder='Title'
                // label="Title"
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
                onChange = {handleTextChange}
                margin="dense"
                id="name"
                placeholder='Content'
                label='Content'
                // label="Content"
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
                onChange = {handleTextChange}
                margin="dense"
                id="name"
                label='Tags (Separated with comma)'
                placeholder='Tags (Separated with comma)'
                // label="Tags (Separated with comma)"
                fullWidth
                variant="standard"
                sx={{input:themeStyles.newNote.inputColor,
                }}
                InputProps={{ disableUnderline: true }}
              />
            </DialogContent>
          <DialogActions>
            <Button onClick={()=>{props.onClose()}}>
              Cancel</Button>
            <Button onClick={submitNote} variant="contained">Add Note</Button>
          </DialogActions>
      </div>
    </Dialog>
  );
}

export default NewNote;