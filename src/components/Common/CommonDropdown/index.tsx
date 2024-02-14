import {FC, useEffect, useState} from "react";
import {Button, List, ListItem, Paper, Popover, styled} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DropdownText = styled('span')({
    marginRight: '8px',
    textTransform: 'none'
});

const DropdownArrow = styled(ExpandMoreIcon)({
    marginLeft: 'auto',
});

type Props = {
    buttonText: string;
    options: string[];
    onChange: (status: string) => void;
};

export const CommonDropdown: FC<Props> = ({buttonText, options, onChange}: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [buttonWidth, setButtonWidth] = useState<number | null>(null);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setButtonWidth(event.currentTarget.clientWidth);
    };

    const handleClose = (selectedOption?: string) => {
        setAnchorEl(null);
        setButtonWidth(null);
        if(selectedOption && onChange) {
            setSelectedOption(selectedOption)
            onChange(selectedOption);
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'dropdown-popover' : undefined;

    const handleOutsideClick = (event: MouseEvent) => {
        if (anchorEl && !anchorEl.contains(event.target as Node)) {
            handleClose();
        }
    };

    useEffect(() => {
        if(!Object.keys(options).length) {
            window.addEventListener('mousedown', handleOutsideClick);
            return () => {
                window.removeEventListener('mousedown', handleOutsideClick);
            };
        }
    }, [anchorEl, selectedOption]);

    return (
        <>
            <Button
                aria-describedby={id}
                onClick={handleClick}
                fullWidth
                variant="outlined"
                sx={{borderRadius: '28px', backgroundColor: 'grey.50', border: '1px solid #D7D9DC', padding: '10px 16px'}}
            >
                <DropdownText>{!selectedOption ? buttonText : selectedOption}</DropdownText>
                <DropdownArrow />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Paper sx={{ width: buttonWidth, borderRadius: '16px', boxShadow: 'none' }}>
                    <List>
                        {options && options.length ? options.map((option: string, index: number) => (
                            <ListItem button key={index} onClick={() => handleClose(option)}>
                                {option}
                            </ListItem>
                        )) : <ListItem onClick={() => handleClose}>No Options available</ListItem>}
                    </List>
                </Paper>

            </Popover>
        </>
    );
}
