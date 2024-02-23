import {Box, MenuItem} from "@mui/material";
import {FC, ReactElement, ReactNode} from "react";

type Props = {
    onClose: () => void,
    label: string | ReactNode,
    icon: ReactElement,
    color: string,
}

export const CustomMenuItem: FC<Props> = ({onClose, label, icon, color}: Props) => (
    <MenuItem onClick={() => {
        onClose();
    }} sx={{padding: '10px'}}>
        {icon && <Box sx={{color, display: 'flex'}}>{icon}</Box>}
        {label}
    </MenuItem>
);