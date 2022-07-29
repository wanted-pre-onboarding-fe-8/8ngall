import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteDialog({ open, onClose, onConfirm }: DeleteDialogProps) {
  const noticeText = '수업을 삭제 하시겠습니까?';

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{noticeText}</DialogTitle>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>
          취소
        </Button>
        <Button variant='outlined' onClick={onConfirm}>
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
