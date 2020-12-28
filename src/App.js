import './App.css';
import Header from './Header';
import Post from './Post';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';


function App() {

  const [posts, setPost] = useState([

    {
      username: "Vikram Singh",
      caption: "Wow Vikram It was amazing Pic",
      imageUrl: "https://buffer.com/library/content/images/2020/05/Frame-10.png",

    },
    {
      username: "Sunny Kumar",
      caption: "Nice One dear ! 🚀 ",
      imageUrl: "https://1.img-dpreview.com/files/p/articles/2716149123/instagram.png",

    }

  ]);

  //-------useEffect runs specific conditions of code
  useEffect({

    db.collection('posts').onSnapshot(snapshot)


  }, []);


  return (
    <div className="app">
      <Header />
      {/*Posts  */}
      {/* posts */}
      {posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
}

export default App;
