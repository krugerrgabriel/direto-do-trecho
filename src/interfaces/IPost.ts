export interface IPostFetch{
    posts: {
        data: [
            {
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
            }
        ],
        related: [
            {
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
            }
        ],
        moreVisited: [
            {
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
            }
        ]
    }
}