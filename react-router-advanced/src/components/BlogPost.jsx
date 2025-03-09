import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { Id } =useParams();
    return<h2>View Blog Post ID: {Id} </h2>;
};

export default BlogPost;