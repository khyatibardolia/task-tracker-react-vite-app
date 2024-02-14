export const statusMapping = {
    Todo: {
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
        color: 'primary.contrastText',
        validTransitions: ['Done', 'ToDo'],
    },
    Blocked: {
        bgColor: 'error.light',
        color: 'primary.contrastText',
        validTransitions: ['Todo'],
    },
    Done: {
        bgColor: 'success.light',
        color: 'primary.contrastText',
        validTransitions: ['Deployed'],
    },
    Deployed: {
        bgColor: 'secondary.light',
        color: 'primary.contrastText',
        validTransitions: [],
    },
};
