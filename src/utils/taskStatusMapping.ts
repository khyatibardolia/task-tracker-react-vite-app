export const statusMapping = {
    ToDo: {
        bgColor: 'rgba(51, 204, 170, 0.20)',
        color: '#008060',
        validTransitions: ['InProgress'],
    },
    InProgress: {
        bgColor: 'rgba(105, 113, 255, 0.16)',
        color: 'secondary.main',
        validTransitions: ['Blocked', 'InQA'],
    },
    InQA: {
        bgColor: 'warning.light',
        color: 'warning.dark',
        validTransitions: ['Done', 'ToDo'],
    },
    Blocked: {
        bgColor: 'error.light',
        color: 'error.dark',
        validTransitions: ['ToDo'],
    },
    Done: {
        bgColor: 'success.light',
        color: 'success.dark',
        validTransitions: ['Deployed'],
    },
    Deployed: {
        bgColor: 'secondary.light',
        color: 'secondary.dark',
        validTransitions: [],
    },
};
