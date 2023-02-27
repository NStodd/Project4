// Post.js
// The Post component, a single instance of an AoK on the Index View.
import { Link } from "react-router-dom"


const Post = ({ post }) => {
    // Styling (taken from Todos for the moment)
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    }
    return (
        <div style={div}>
            <Link to={`/actsofkindness/${post.id}`}>
                <h1>{post.act}</h1>
            </Link>
            <h2>From {post.actor}</h2>
            <h2>To {post.recipient}</h2>
        </div>
    )
}

export default Post