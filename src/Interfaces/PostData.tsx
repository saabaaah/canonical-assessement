export interface PostAuthor{
    id:number, 
    link: string,
    name: string,
    url: string,
}

export interface PostTitle{
    rendered: string
}


export interface WPTerm{
    id:number,
    name:string,
    link:string,
    taxonomy:string,
}

interface PostData {
    id: number,
    date: string,
    link: string,
    features_media: string,
    title: PostTitle,
    authors: number[],
    groups: number[],
    categories: number[],
}

export default PostData;