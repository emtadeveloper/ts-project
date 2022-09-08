import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { AddOrEditUser } from '../AddOrEditUser/AddOrEditUser';
import { useConsumeContext } from '../../context/UserContext';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Modal() {
    //
    const {isOpenModal,handleClickClose,mode,loading} = useConsumeContext()

  return (
    <div>
      <Dialog
        open={isOpenModal}
        onClose={handleClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {mode === "edit" && loading ? "loading" :  <AddOrEditUser/>  }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickClose}>
            Cancel
          </Button>
          <Button onClick={handleClickClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}