import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const LeftNav = () => {
    const  [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://dragon-news-server-moriamakterswarna.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
            {
                categories.map(category =><p key={category.id}>
                   <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </p>)
            }
            </div>

        </div>
    );
};

export default LeftNav;