export interface IBanner{
    wDivider?: Boolean,
    banners: {
        title: string,
        type: string,
        url: string,
        userId: number,
        createdAt: string
    }
}