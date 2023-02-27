// Index.js
// The Index page. Containing the information to be displayed w/ the Index route.
import Post from "../components/Post"
import {useLoaderData} from "react-router-dom"


const Index = (props) => {
    const acts = useLoaderData()
    return acts.map((post) => <Post post={post} key={post.id} />)
}

export default Index