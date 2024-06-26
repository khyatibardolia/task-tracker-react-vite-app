import {ChangeEvent, FC, useContext, useEffect, useState} from "react";
import {Box, Input, Stack, styled, TextField, Typography} from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import {CommonButton} from "@components/Common/CommonButton";
import {TaskContext} from "@context/TaskContext";
import {format} from 'date-fns';
import {HistoryData, TasksData} from "@types/types";
import {generateUniqueId} from "@utils/generateUniqueId";
import {CommonDropdown} from "@components/Common/CommonDropdown";
import {statusMapping} from "@utils/taskStatusMapping";
import {useNavigate} from "react-router-dom";

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

type Props = {
    isEdit?: boolean;
    existingTask?: TasksData;
};

export const AddEditTaskForm: FC<Props> = ({isEdit = false, existingTask}: Props) => {
    const {addEditTask, tasks, saveTaskHistory} = useContext(TaskContext);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit && existingTask && Object.keys(existingTask)?.length) {
            setTitle(existingTask?.title || '');
            setDescription(existingTask?.description || '');
            setSelectedStatus(existingTask?.status || '');
        }
    }, [isEdit, existingTask]);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const handleStatusChange = (status: string) => {
        setSelectedStatus(status);
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
            id: generateUniqueId(),
            title,
            description,
            status: 'Todo',
            createdDateAndTime: format(new Date(), "MMM d, yyyy - h:mm a"),
        };

        const storedTasks = localStorage.getItem('tasks');
        const existingTasks: TasksData[] = storedTasks ? JSON.parse(storedTasks) : [];

        existingTasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        addEditTask(existingTasks);

        // Clear input fields after adding the task
        setTitle('');
        setDescription('');
    }

    const saveChanges = () => {
        if (existingTask && Object.keys(existingTask).length) {
            const updatedTask = {
                ...existingTask,
                title,
                description,
                status: selectedStatus,
            };

            const updatedTasks: TasksData[] = tasks.map((task) =>
                task.id === existingTask.id ? updatedTask : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            addEditTask(updatedTasks);
            getTaskHistoryLog(existingTask, updatedTask);
            navigate('/');
        }
    }

    const getTaskHistoryLog = (existingTask: TasksData, updatedTask: TasksData) => {
        // Updating history only if status changes
        if (existingTask.status !== updatedTask.status) {
            const historyLog: HistoryData = {
                id: updatedTask.id,
                statusChangeText: `The task was marked as "${updatedTask.status}"`,
                updatedDateAndTime: `${format(new Date(), "MMM d, yyyy - h:mm a")}`
            }

            const taskId = existingTask.id;
            saveTaskHistory(taskId, historyLog);
        }
    }

    const cancelChanges = () => {
        setTitle(existingTask?.title || '');
        setDescription(existingTask?.description || '');
        setSelectedStatus(existingTask?.status || '');
        navigate('/');
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
                {!isEdit ?
                    <>
                        <InsertDriveFileOutlinedIcon
                            sx={{
                                color: 'text.disabled',
                                marginRight: '8px'
                            }}
                            fontSize='small'/>
                        <b>Add a new Task</b>
                    </>
                    :
                    <>
                        <EditOutlinedIcon sx={{color: 'text.disabled', marginRight: '8px'}}
                                          fontSize='small'/>
                        <b>Edit Task</b>
                    </>
                }
            </Typography>
            <CustomInput
                placeholder="Title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleTitleChange(e)}
            />
            <TextField
                multiline
                rows={!isEdit ? 5 : 12}
                placeholder="Description"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleDescriptionChange(e)}
            />
            {!isEdit && <CommonButton variant="outlined" size="medium"
                                      startIcon={<AddIcon/>}
                                      sx={{
                                          width: '97px',
                                          margin: '24px 0 0 auto !important',
                                          padding: '10px 20px',
                                      }}
                                      onClick={handleAddTask}
                                      label="Add"
            />}
            {isEdit && existingTask && Object.keys(existingTask).length &&
                <CommonDropdown buttonText={existingTask?.status || ''}
                                options={existingTask?.status ? statusMapping[existingTask?.status]?.validTransitions : []}
                                onChange={handleStatusChange}
                />}

            {isEdit && <Stack spacing={2} direction="row">
                <CommonButton variant="outlined" startIcon={<CheckIcon/>} sx={{width: '50%'}} onClick={saveChanges}
                              label="Save Changes"/>
                <CommonButton variant="outlined" bgColor='background.paper' textColor='primary.dark'
                              onClick={cancelChanges}
                              sx={{width: '50%'}}
                              label="Cancel"
                />
            </Stack>}
        </Stack>
    </Box>
}
