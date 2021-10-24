interface PostAuthor{
    id:number, 
    link: string,
    name: string,
    url: string,
}

interface PostTitle{
    rendered: string
}

interface PostGroup{
    id:number,
    name:string,
    link:string,
}

interface PostCategory{
    id:number,
    name:string,
    link:string,
}

interface PostData {
    id: number,
    date: string,
    link: string,
    features_media: string,
    title: PostTitle,
    authors: PostAuthor[],
    groups: PostGroup[],
    categories: PostCategory[]
}

export default PostData;