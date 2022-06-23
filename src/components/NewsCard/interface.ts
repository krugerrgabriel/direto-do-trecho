export interface INewsCard{
    item: {
        id: Number,
        title: String,
        category: String,
        fineLine: String,
        content: String,
        companies: String,
        tags: String,
        type_file: String,
        priority: String,
        views: Number,
        userId: Number,
        userName: String,
        createdAt: String
    },
    type?: String,
    other?: String,
}