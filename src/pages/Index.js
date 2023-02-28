// Index.js
// The Index page. Containing the information to be displayed w/ the Index route.
import Post from "../components/Post"
import {Form, useLoaderData} from "react-router-dom"


const Index = (props) => {
    const acts = useLoaderData()
    return <>
        <div style={{textAlign: "center"}}>
            <h2>Log an Act of Kindness</h2>
            <Form action="/create" method="post">
                <input type="text" name="actor" placeholder="Who performed the kindness"/>
                <input type="text" name="recipient" placeholder="Who was it to"/>
                <input type="text" name="act" placeholder="What was the kindness"/>
                <button>Create Kindness</button>
            </Form>
        </div>
        {acts.map((post) => <Post post={post} key={post.id} />)}
    </>
}

export default Index