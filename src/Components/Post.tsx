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
            <div className="col-4 col-small-12 col-medium-4 col-12 u-equal-height m-post">
                <div className="p-card">
{/* 
                <p>Link : {postData.link} </p>
                <p>group : {(group !== undefined) ? group.name: "Unknown" } </p>
                <p>authors : { (author !== undefined) ? author.name: "Unknown" } </p>
                <p>date : {formatedDate} </p>
                <p>categories : {(category !== undefined) ? category.name: "Unknown" } </p>
                 */}
                    <header>
                        <h5 className="p-muted-heading">
                            {(group !== undefined) ? group.name: "Unknown Group" }
                        </h5>
                    </header>
                    
                    <div className="p-card__content m-border-top-dotted">
                            <img className="p-card__image" src={postData.featured_media}/>

                            <h4><a href={ postData.link }>{ postData.title.rendered }</a></h4>
                            <p>By  
                            <a href={ (author !== undefined) ? author.link: "Unknown" }> 
                                &nbsp;{ (author !== undefined) ? author.name: "Unknown" }&nbsp;
                            </a>
                            on {formatedDate}</p>
                    </div>
                    <footer className="p-card__footer m-border-top-dotted">
                        {(category !== undefined) ? category.name.slice(0, category.name.length-1): "Unknown" }
                    </footer>
            </div>
            
        </div>
    )
}

export default Post
