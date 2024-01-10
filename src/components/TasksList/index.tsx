import {FC} from "react";
import {Box, styled, Typography} from "@mui/material";
import EmptyTasksIcon from "../SvgIcon/EmptyTasksIcon";
import {TaskCard} from "../TaskCard";

type Props = {
    tasks: {
        title: string,
        createdDateAndTime: string,
        status: string,
        description: string,
    }
}

const EmptyText = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    marginTop: '15px',
    textAlign: 'center',
    color: `${theme.palette.grey[600]}`
}));

export const TasksList: FC = ({tasks}: Props) => {
    return <Box
        sx={{
            marginTop: '48px',
        }}
    >
        <Typography variant={'h6'} sx={{marginBottom: '16px', fontWeight: '600'}}>Tasks</Typography>
        {
            tasks && tasks.length > 0 ?
                <>
                    {
                        tasks.map((task, index) => <Box key={index} sx={{
                            boxShadow: 2,
                            bgcolor: 'background.paper',
                            borderRadius: 4,
                            padding: '16px 24px',
                            marginBottom: '16px'
                        }}><TaskCard task={task} />
                        </Box>)
                    }
                </>
                :
                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        height: '218px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                    <EmptyTasksIcon sx={{width: '100px', height: '74px'}}/>
                    <EmptyText variant={'subtitle2'}>
                        You have nothing to do.<br/>
                        Go get some sleep!</EmptyText>
                </Box>
        }
    </Box>
}