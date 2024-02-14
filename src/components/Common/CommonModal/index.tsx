import { FC } from 'react';
import { Modal, Box } from '@mui/material';

type Props = {
    open: boolean;
    onClose: () => void;
    customWidth?: string;
    customHeight?: string;

};

export const CustomModal: FC<Props> = ({ open, onClose, customWidth, customHeight, children }: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    borderRadius: '16px',
                    boxShadow: 24,
                    p: 4,
                    width: customWidth || '40vw',
                    height: customHeight || '50vh',
                    overflowY: 'auto',
                }}
            >
                {children}
            </Box>
        </Modal>
    );
};
