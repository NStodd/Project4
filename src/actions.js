// actions.js
// For defining our action functions.

import { redirect } from "react-router-dom";

// Deployed API
const URL = "https://acts-of-kindness.onrender.com"

// createAction, for creating a new AoK
export const createAction = async ({request}) => {
    // form data
    const formData = await request.formData()

    // construct new AoK object
    const newAoK = {
        actor: formData.get("actor"),
        recipient: formData.get("recipient"),
        act: formData.get("act")
    }

    // send to backend
    await fetch(URL + "/actsofkindness/", {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAoK)
    })

    // redirect
    return redirect("/")
}

// updateAction, for updating an existing AoK
export const updateAction = async ({request, params}) => {
    console.log("you are in updateAction")
    // form data
    const formData = await request.formData()

    // AoK ID
    const id = params.id

    // construct updated AoK object
    const updatedAoK = {
        actor: formData.get("actor"),
        recipient: formData.get("recipient"),
        act: formData.get("act")
    }

    // send to backend
    await fetch(URL + `/actsofkindness/${id}` , {
        method:"put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAoK)
    })

    // redirect
    return redirect(`/actsofkindness/${id}`)
}

// deleteAction, for deleting an existing AoK
export const deleteAction = async({params}) => {
    // get id
    const id = params.id

    // send request
    await fetch(URL + `/actsofkindness/${id}`, {
        method: "delete",
    })

    // redirect
    return redirect(`/`)
}