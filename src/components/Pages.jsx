import React, { useEffect, useState } from 'react';
import db from '../firebase';
import {
    collection,
    getDocs,
    orderBy,
    query,
    onSnapshot,
  } from "firebase/firestore";

const Pages = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const postData = collection(db, "sorette_id");
      const q = query(postData, orderBy("timestamp", "desc"));
      getDocs(q).then((snapShot) => {
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
  
      /* リアルタイムで取得 */
      onSnapshot(q, (querySnapshot) => {
        // console.log(querySnapshot.docs);
        setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      });
    }, []);
  
    return (
      <div className="App">
        <div>
          {posts.map((post) => (
            <div key={post.title}>
              <h1 className="title">{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Pages