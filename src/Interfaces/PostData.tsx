interface PostAuthor{
    id:number, 
    link: string,
    name: string,
    url: string,
}

interface PostTitle{
    rendered: string
}
interface PostData {
    id: number,
    date: string,
    link: string,
    title: PostTitle,
}

export default PostData;