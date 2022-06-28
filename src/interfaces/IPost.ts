export interface IPostFetch{
    posts: {
        data: [
            {
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
                legend_file?: string,
                createdAt: string
            }
        ],
        related: [
            {
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
                legend_file?: string,
                createdAt: string
            }
        ],
        moreVisited: [
            {
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
                legend_file?: string,
                createdAt: string
            }
        ],
        order1: {},
        order2: {},
        order3: {},
        order4: {},
        order5: {},
    }
    banners: {
        vertical: {
            title: string,
            type: string,
            url: string,
            userId: number,
            createdAt: string
        },
        horizontal: {
            title: string,
            type: string,
            url: string,
            userId: number,
            createdAt: string
        }
    }
}