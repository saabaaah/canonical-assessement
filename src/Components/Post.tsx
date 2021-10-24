import { useEffect, useState } from 'react'
import { PostAuthor, WPTerm } from '../Interfaces/PostData';

function Post(props:any) {

    let {postData} = props;

    // detailed category, group and data fields
    const [category, setCategory] = useState<WPTerm>()
    const [group, setGroup] = useState<WPTerm>()
    const [author, setAuthor] = useState<PostAuthor>()
    const [formatedDate, setFormatedDate] = useState('');


    // extract data 
    const setData = () =>{
        // --> get the WP terms passed on the data
        let allWPTerms:WPTerm[] = [];
        postData._embedded["wp:term"].map((element:any[]) => allWPTerms = [...allWPTerms, ...element])
        // order by id to get lowest ids first
        allWPTerms.sort((a,b) => (a.id < b.id)? -1 : 1);

        // extract category, group & author data
        setCategory(allWPTerms.filter((e:WPTerm) => e.taxonomy === "category")[0])
        setGroup(allWPTerms.filter((e:WPTerm) => e.taxonomy === "group")[0])
        setAuthor(postData._embedded["author"][0])

        // format the date
        const tmpDate = Date.parse(postData.date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tmpDate);
        let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(tmpDate);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(tmpDate);
        setFormatedDate(`${da} ${mo} ${ye}`);
    }

    useEffect(()=>{
        setData();
    })
    return (
        <div>
            <p>Link : {postData.link} </p>
            <p>group : {(group !== undefined) ? group.name: "Unknown" } </p>
            <p>featured_media : {postData.featured_media} </p>
            <p>title : {postData.title.rendered} </p>
            <p>authors : { (author !== undefined) ? author.name: "Unknown" } </p>
            <p>date : {formatedDate} </p>
            <p>categories : {(category !== undefined) ? category.name: "Unknown" } </p>

            <hr/>
        </div>
    )
}
export default Post
