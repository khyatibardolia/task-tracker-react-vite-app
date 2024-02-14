import {FC, useContext} from "react";
import {TaskContext} from "../../context/TaskContext";
import {CustomModal} from "../Common/CommonModal";
import {Box, Divider, Typography} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
    open: boolean;
    onClose: () => void;
    taskId: string;
};

export const TaskHistory: FC<Props> = ({ open, onClose, taskId }: Props) => {
    const {taskHistory} = useContext(TaskContext);
    const historyData = taskHistory[taskId] || [];

    return <CustomModal open={open} onClose={onClose}>
        <Typography variant="h5" id="modal-title" sx={{paddingBottom: 2}}>
            <b>Task History</b>
        </Typography>

        {historyData && historyData.length ? historyData.map((taskHistory, index) => <Box>
            <Box sx={{padding: '16px 0 24px 0'}}>
                <Typography variant="body1" id="modal-title" sx={{fontSize: '16px', fontWeight: 600}}>
                    {taskHistory.statusChangeText}
                </Typography>
                <Typography variant={'body2'} component='div' sx={{
                    color: 'grey.500',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <AccessTimeIcon sx={{fontSize: 16, marginRight: '4px'}}/>
                    Created: {taskHistory.updatedDateAndTime}</Typography>
            </Box>
            <Divider />
        </Box>): <>No history tracked</>}

    </CustomModal>
}