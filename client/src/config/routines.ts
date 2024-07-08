export type Routine = {
    name: string;
    description: string;
    steps: {
        title: string;
        description?: string;
        length: number;
    }[]
}
const routines: Routine[] = [
    {
        name: 'Morning',
        description: 'Start your day with this routine',
        steps: [
            {
                title: 'Brush Teeth',
                length: 5 // in minutes
            },
            {
                title: 'Hydrate',
                description: 'Drink a glass of water with lemon juice',
                length: 5
            },
            {
                title: 'Go outside',
                description: 'Go get some sunlight',
                length: 10
            },
            {
                title: 'Schdeule',
                description: 'Plan what you will do today, write 3 goals',
                length: 5
            },
            {
                title: 'Pack up',
                length: 5
            },
        ]
    },
    {
        name: 'Bedtime',
        description: 'Start your day with this routine',
        steps: [
            {
                title: 'Brush Teeth',
                length: 5 // in minutes
            },
        ]
    },
    {
        name: 'Relax',
        description: 'Start your day with this routine',
        steps: [
            {
                title: 'Brush Teeth',
                length: 5 // in minutes
            },
        ]
    }
];

export default routines;