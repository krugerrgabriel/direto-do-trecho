export interface INewsCard{
    item: {
        id: Number,
        slug: string,
        title: string,
        category: string,
        fineLine: string,
        content: string,
        companies: string,
        tags: string,
        type_file: string,
        priority: string,
        views: Number,
        userId: Number,
        userName: string,
        createdAt: string
    },
    type?: string,
    other?: string,
    color?: string,
}