import {Box, MenuItem} from "@mui/material";
import {FC, ReactElement} from "react";

type Props = {
    onClose: () => void,
    label: string,
    icon: ReactElement,
    color: string,
    onClick: () => void
}

export const CustomMenuItem: FC = ({onClose, label, icon, color, onClick}: Props) => (
    <MenuItem onClick={() => {
        onClose();
        onClick && onClick();
    }} sx={{padding: '10px'}}>
        {icon && <Box sx={{color, display: 'flex'}}>{icon}</Box>}
        {label}
    </MenuItem>
);