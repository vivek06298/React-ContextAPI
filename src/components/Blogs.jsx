import React, { useContext } from 'react'
import { Spinner } from './Spinner';
import { Appcontext } from "../context/Appcontext"

export const Blogs = () => {

  const {loading,posts} = useContext(Appcontext);

  return (
    <div>
      {

        loading ? (<Spinner />) : 
        (
          posts.length === 0 ? 
          (
            <div>
              <p> No posts found </p>
            </div>
          ) : 
          (
            posts.map( (post) => (
              <div key={post.id}>
                <p className='font-bold text-xl'>{post.title}</p>
                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map( (tag, index) => {
                    return <span key={index}>{`#${tag}`}</span>
                  })}
                </div>
              </div>
            ))
          )
        )

      }
    </div>
  )
}
