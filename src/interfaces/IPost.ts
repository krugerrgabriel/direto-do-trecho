export interface IPostFetch{
    posts: {
        data: [
            {
                id: Number,
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
                legend_file?: string,
                createdAt: string
            }
        ],
        related: [
            {
                id: Number,
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
                legend_file?: string,
                createdAt: string
            }
        ],
        moreVisited: [
            {
                id: Number,
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
                legend_file?: string,
                createdAt: string
            }
        ]
    }
}