import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
const Blog = (props) => {
  const navigate = useNavigate();
  const {_id, tittle,image,description } = props.book;;
  const handler = async () => {
    await axios
      .delete(`http://localhost:3002/blogs/${_id}`)
      .then((res) => res.data)
      .then(() => navigate("/home"))
      .then(() => navigate("/blogs"));
  };
 

  return (
    <div className="container">
        
    <div className="card">
      <h3>{tittle}</h3>
      <img src={image} alt={tittle}  />
      <p>{description}</p>
    </div>
    {handler}
    </div>
  );
};

export default Blog;