import {Button, styled} from "@mui/material";
import {FC, ReactElement} from "react";

type Props = {
    label: string,
    color?: string,
    disabled?: boolean,
    variant?: string,
    size?: string,
    sx?: object,
    startIcon?: ReactElement,
    onClick: () => void,
    bgColor?: string,
    textColor?: string,

}

export const CommonButton: FC = ({label, color, disabled, variant, size, sx, startIcon, onClick, bgColor, textColor}: Props) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: !bgColor ? theme.palette.primary.dark : theme.palette[bgColor],
        color: !textColor ? theme.palette.primary.contrastText : theme.palette[textColor],
        borderRadius: '32px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: !bgColor ? theme.palette.primary.dark : theme.palette[bgColor],
            color: !textColor ? theme.palette.primary.contrastText : theme.palette[textColor],
        }
    }));

    return <CustomButton
        color={color}
        variant={variant}
        disabled={disabled}
        size={size}
        sx={sx}
        startIcon={startIcon}
        onClick={onClick}
    >
        {label}
    </CustomButton>
}