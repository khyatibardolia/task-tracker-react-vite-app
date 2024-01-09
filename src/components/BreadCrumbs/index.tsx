import {FC} from "react";
import {Box, Breadcrumbs, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
    page: string;
}

export const BreadCrumbs: FC = ({page = 'Home'}: Props) => {
    const breadcrumbs = [
        <Typography key="1" color="text.primary">
            Task Management
        </Typography>,
        <Typography key="2" color="inherit">
            {page}
        </Typography>,
    ];

    return <Box pt={3} pb={2}><Breadcrumbs
        separator={<NavigateNextIcon color="primary"/>}
        aria-label="breadcrumb"
    >
        {breadcrumbs}
    </Breadcrumbs></Box>
}