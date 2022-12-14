import React, { useState, useEffect } from 'react';

export default function HotCoffee() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://api.sampleapis.com/coffee/hot')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

 return (
    <div className="posts-container">
    {posts
    .filter(post => post.description !== "test" && post.description !== "test2" && post.description !== "Coffee2002" && post.description !== "Coffee2003")
    .map((post) => {
       return (
          <div className="post-card" key={post.id}>
            <div className='cafeTitle'>
               <h2 className="post-title">{post.title}</h2>
             </div>
             <div className='cafeImage'>
               <img src={post.image} alt={post.title}/>
             </div>
             <div className='cafeComposition'>
               <p className="post-body">{post.description}</p>
               <h3>Ingrédients</h3>
               {post.ingredients.map((ingredients,index) =>{
                  return(
                     <ul className='recetteCafe' key={index}>
                        <li className='ingredientCafe' >
                              -{ingredients}
                        </li>
                     </ul>
                  )})}
               </div>
          </div>
       );
    })}
 </div>
 );
}
