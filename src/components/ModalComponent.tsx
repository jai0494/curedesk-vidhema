// src/components/ModalComponent.tsx
import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import { InlineWidget } from 'react-calendly';

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  title: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ open, handleClose }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
    borderRadius: 2,
    overflowY: 'auto',
    maxHeight: '90vh', // Handle vertical overflow
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {/* Calendly Inline Widget */}
        <InlineWidget
          url="https://calendly.com/thecuredesk/30min?month=2024-09"
          styles={{ height: '600px' }} // Adjust the height as per your needs
        />
        <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
