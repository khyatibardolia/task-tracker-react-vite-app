import Chip from '@mui/material/Chip';
import { FC } from "react";
import {statusMapping} from "../../utils/taskStatusMapping";

type Props = {
    status: string
}

type StatusInfo = {
    color: string;
    bgColor: string;
}

export const TaskStatus: FC<Props> = ({ status }: Props) => {
    const statusInfo: StatusInfo = statusMapping[status] || { color: 'grey.900', bgColor: 'grey.200' };
    const { color, bgColor } = statusInfo;

    return (
        <Chip
            label={status}
            sx={{
                backgroundColor: bgColor,
                color,
                padding: '0 10px',
                fontSize: '12px'
            }}
        />
    );
};

export default TaskStatus;
