import {FC} from "react";
import {Box, Input, Stack, styled, TextField, Typography} from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AddIcon from '@mui/icons-material/Add';
import {CommonButton} from "../Common/CommonButton";

const CustomInput = styled(Input)(({theme}) => ({
    padding: '10px 16px',
    borderRadius: '28px',
    border: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
    fontSize: '16px',
    '&::before': {
        borderBottom: 'none'
    },
    '&:hover:not(.Mui-disabled)::before': {
        borderBottom: 'none',
    },
    '&::after': {
        borderBottom: 0
    },
}));

export const AddTaskForm: FC = () => {
    return <Box
        sx={{
            boxShadow: 3,
            bgcolor: 'background.paper',
            p: 2.5,
            borderRadius: 2,
        }}
    >
        <Stack spacing={2}>
            <Typography variant={'subtitle1'}
                        sx={{
                            display: 'flex',
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                <InsertDriveFileOutlinedIcon sx={{color: 'text.disabled', marginRight: '8px'}} fontSize='16'/>
                <b>Add a new Task</b>
            </Typography>
            <CustomInput
                placeholder="Title"
            />
            <TextField
                multiline
                rows={5}
                placeholder="Description"
            />
            <CommonButton variant="outlined" size="medium" startIcon={<AddIcon/>}
                          sx={{
                              width: '97px',
                              margin: '24px 0 0 auto !important',
                              padding: '10px 20px'
                          }}>
                Add
            </CommonButton>
        </Stack>
    </Box>
}
