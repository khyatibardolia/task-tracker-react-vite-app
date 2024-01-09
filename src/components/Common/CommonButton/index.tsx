import {Button, styled} from "@mui/material";
import {FC, ReactElement} from "react";

type Props = {
    children: ReactElement,
    color?: string,
    disabled?: boolean,
    variant?: string,
    size?: string,
    sx?: object,
    startIcon?: ReactElement

}

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderRadius: '32px',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    }
}));

export const CommonButton: FC = ({children, color, disabled, variant, size, sx, startIcon}: Props) => {
    return <CustomButton
        color={color}
        variant={variant}
        disabled={disabled}
        size={size}
        sx={sx}
        startIcon={startIcon}
    >
        {children}
    </CustomButton>
}