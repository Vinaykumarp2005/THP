import { useEffect,useState } from "react"
function Posts() {
    let [posts,setPosts]=useState([]);
    let [err,setErr]=useState(null);
    useEffect(()=>{
        //make api request
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(postLists=>setPosts(postLists))
        .catch((e)=>{setErr(e)})
    },[]);
    // console.log(posts);
    // console.log(err.message)
  return (
    <div>
      <h1 className="display-2 text-Success">Posts</h1>
      
        {/* // if error occured */}
       { err!==null && <p>{err.message}</p>}
         {/* if no error but length of array is zero */}
         {
          err===null && posts.length===0 && (
            <div className="spinner-border text-primary">  </div>
          )
         }
         
         {/* no error and list is non emoty  */}
         {
          err===null && posts.length!==0 && (
            <table className="table">
            <thead>
            <tr>
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
                {
                    posts.map(postobj=><tr key={postobj.id}>
                        <td>{postobj.userId}</td>
                        <td>{postobj.id}</td>
                        <td>{postobj.title}</td>
                                   
                    </tr>
    
                    )
                }
    
            </tbody>
        </table>)
          }
         

         {/* err.message?.length!==0 ? <p className='text-danger display-3'>{err.message}</p>:null */}
      
        {/* // {err===null && posts.length===0 && <div className="spinner-border text-primary">  </div> } */}
      
      
      
      
      
    {
      //  err.message?.length===0 <div className="spinner-border text-primary" >hi</div>:
  
   
}
    </div>
  )
}

export default Posts
