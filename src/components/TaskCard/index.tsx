import React, {FC, useState} from "react";
import {Box, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {CustomMenuItem} from "../Common/CommonMenuItem";

type Props = {
    title: string,
    description,
    createdDateAndTime: string,
    status: string
}

const iconStyles = {sx: {color: 'grey.400', paddingRight: 1}};

const menuItems = [
    {
        label: 'Task History',
        icon: <EventOutlinedIcon {...iconStyles} />,
        color: 'grey.400',
    },
    {
        label: 'Edit Task',
        icon: <ModeEditOutlineOutlinedIcon {...iconStyles} />,
        color: 'grey.400',
    },
    {
        label: <Box sx={{color: 'error.dark'}}>Delete Task</Box>,
        icon: <DeleteOutlinedIcon {...iconStyles} />,
        color: 'error.dark',
    },
];

export const TaskCard: FC = ({task}: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
                <Typography variant={'body1'} component='div'>{task.title}</Typography>
                <Typography variant={'body2'} component='div' sx={{
                    color: 'grey.500',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AccessTimeIcon sx={{fontSize: 16, marginRight: '4px'}}/>
                    Created: {task.createdDateAndTime}</Typography>
            </Box>
            <Box>
                <IconButton
                    aria-controls="dotted-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        style: {
                            width: '20ch',
                            borderRadius: '16px',
                            padding: 0,
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <CustomMenuItem
                            key={index}
                            onClose={handleClose}
                            label={item.label}
                            icon={item.icon}
                            color={item.color}
                        />
                    ))}
                </Menu>
            </Box>
        </Box>
        <Box>
            <Typography variant={'subtitle1'} component='div'
                        sx={{
                            color: 'grey.600',
                            fontSize: '14px',
                            paddingTop: '8px'
                        }}>{task.description}
            </Typography>
        </Box>
    </Box>
}
