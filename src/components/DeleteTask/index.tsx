import {FC, useContext} from "react";
import {CustomModal} from "../Common/CommonModal";
import {Box, Stack, Typography} from "@mui/material";
import DeleteIcon from "../SvgIcon/DeleteIcon";
import {CommonButton} from "../Common/CommonButton";
import {TaskContext} from "../../context/TaskContext";

type Props = {
    open: boolean;
    onClose: () => void;
    taskId: string;
};

export const DeleteTask: FC<Props> = ({open, onClose, taskId}: Props) => {
    const {deleteTask} = useContext(TaskContext);

    const handleDeleteTask = () => {
        deleteTask(taskId);
        onClose();
    }

    return <CustomModal open={open} onClose={onClose} customWidth='40vw' customHeight='30vh'>
        <Stack spacing={6}
               sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
            <DeleteIcon sx={{width: '56px', height: '56px'}}/>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h5" id="modal-title">
                    <b>Delete Task?</b>
                </Typography>
                <Typography variant="body1" id="modal-title">
                    You have made changes, are you sure about deleting “Task”?
                </Typography>
            </Box>
            <Stack spacing={2} direction="row" sx={{width: '100%'}}>
                <CommonButton variant="outlined" bgColor='background.paper' textColor='primary.dark' sx={{width: '50%'}}
                              onClick={onClose}>
                    Cancel
                </CommonButton>
                <CommonButton variant="contained" bgColor='error.dark' color="error" textColor='primary.contrastText'
                              onClick={handleDeleteTask}
                              sx={{width: '50%'}}>
                    Delete
                </CommonButton>
            </Stack>
        </Stack>
    </CustomModal>
}