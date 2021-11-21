import React, {useState, useEffect} from 'react';
import axios from 'axios';    //서버와의 통신을 위함
import './App.css';
import Post from "../src/components/Post";
import Pagination from "../src/components/Pagination";

function App() {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지
  const [postPerPage] = useState(15); //페이지당 포스트 개수

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //현재 페이지 가져오기
  const indexOfLastPost = currentPage * postPerPage; //10번 포스트
  const indexOfFirstPost = indexOfLastPost - postPerPage;  //0번 포스트
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);  //0에서 10번까지 포스트
  
  const paginate = pageNum => setCurrentPage(pageNum);
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pagination</h2>
      </header>
      <div className="container">
        <Post posts={currentPosts}/>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={post.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
