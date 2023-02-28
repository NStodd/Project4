// Show.js
// The Show page, containing the appropriate data and accessed when using the Show Route.

import { useLoaderData, Link, Form } from "react-router-dom"

const Show = (props) => {
const post = useLoaderData()

    // Styling
    const div = {
        textAlign: "center",
        border: "3px solid aqua",
        width: "65%",
        margin: "30px auto"
    }

    return (
        <div style={div}>
            <h2>{post.actor} for {post.recipient}</h2>
            <h1>{post.act}</h1>
            <div style={{ textAlign: "center"}}>
                <Form action ={`/update/${post.id}`} method="post">
                    <p>Who performed the kindness?
                        <input type="text" name="actor" placeholder="who performed the kindness?" defaultValue={post.actor}/>
                    </p>
                    <p>What was the kindness?
                        <input type="text" name="act" placeholder="what was the kindness?" defaultValue={post.act}/>
                    </p>
                    <p>Who was the kindness for?    
                        <input type="text" name="recipient" placeholder="who was kindness for?" defaultValue={post.recipient}/>
                    </p>
                    <button>Update This Kindness</button>
                </Form>
                <Form action={`/delete/${post.id}/`} method="post">
                    <button>Delete This Kindness</button>
                </Form>
            </div>
            <Link to ="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show

