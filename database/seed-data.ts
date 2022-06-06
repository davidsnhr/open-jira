


interface SeedData {
    entries: SeedEntry [];
}


interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'PENDIENTE: Description',
            status: 'pending',
            createdAt: Date.now()

        },
        {
            description: 'IN PROGRESS: Description 2',
            status: 'in-progress',
            createdAt: Date.now() - 100000,

        },
        {
            description: 'FINISHED: Description 3',
            status: 'finished',
            createdAt: Date.now() - 1000

        }
    ]
}