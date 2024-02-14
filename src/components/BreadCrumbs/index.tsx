import {FC} from "react";
import {Box, Breadcrumbs, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useLocation} from "react-router-dom";

export const BreadCrumbs: FC = () => {
    const location = useLocation();

    const breadcrumbs = [
        <Typography key="1" color="text.primary">
            Task Management
        </Typography>,
        <Typography key="2" color="inherit">
            {location.pathname?.includes('/edit') ? 'Edit' : 'Home'}
        </Typography>,
    ];

    return <Box pt={3} pb={2}><Breadcrumbs
        separator={<NavigateNextIcon color="primary"/>}
        aria-label="breadcrumb"
    >
        {breadcrumbs}
    </Breadcrumbs></Box>
}