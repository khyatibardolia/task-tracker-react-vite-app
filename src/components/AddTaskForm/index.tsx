import {ChangeEvent, FC, useContext, useState} from "react";
import {Box, Input, Stack, styled, TextField, Typography} from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AddIcon from '@mui/icons-material/Add';
import {CommonButton} from "../Common/CommonButton";
import {TaskContext} from "../../context/TaskContext";
import { format } from 'date-fns';
import {TasksData} from "../../types/types";

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
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const handleAddTask = () => {
        if (title.trim() === '' && description.trim() === '') {
            alert('Please enter title and description for the task.');
            return;
        }

        if (title.trim() === '') {
            alert('Please enter a title for the task.');
            return;
        }

        if (description.trim() === '') {
            alert('Please enter description for the task.');
            return;
        }

        const newTask: TasksData = {
            title,
            description,
            status: 'ToDo',
            createdDateAndTime: format(new Date(), "MMM d, yyyy - h:mm a"),
        };

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        console.log('existingTasks', existingTasks)
        addTask(existingTasks);

        // Clear input fields after adding the task
        setTitle('');
        setDescription('');
    }

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
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleTitleChange(e)}
            />
            <TextField
                multiline
                rows={5}
                placeholder="Description"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleDescriptionChange(e)}
            />
            <CommonButton variant="outlined" size="medium"
                          startIcon={<AddIcon/>}
                          sx={{
                              width: '97px',
                              margin: '24px 0 0 auto !important',
                              padding: '10px 20px'
                          }}
                          onClick={handleAddTask}
            >
                Add
            </CommonButton>
        </Stack>
    </Box>
}
