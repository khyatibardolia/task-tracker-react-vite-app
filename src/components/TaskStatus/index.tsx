import Chip from '@mui/material/Chip'
import { FC } from 'react'
import { statusMapping } from '../../utils/taskStatusMapping'

export const TaskStatus: FC = ({ status }) => {
    const statusInfo = statusMapping[status] || {
        color: 'grey.900',
        bgColor: 'grey.200',
    }
    const { color, bgColor } = statusInfo

    return (
        <Chip
            label={status}
            sx={{
                backgroundColor: bgColor,
                color,
                padding: '0 10px',
                fontSize: '12px',
            }}
        />
    )
}

export default TaskStatus
