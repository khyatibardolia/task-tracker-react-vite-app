import {FC} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "@pages/AddTaskPage";
import {EditTaskPage} from "@pages/EditTaskPage";

export const AppRoutes: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:taskId" element={<EditTaskPage />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
};
