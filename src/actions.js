// actions.js
// For defining our action functions.

import { redirect } from "react-router-dom";

// Deployed API
const URL = "https://acts-of-kindness.onrender.com/"

// createAction, for creating a new AoK
export const createAction = async ({request}) => {
    // form data

    // construct new AoK object

    // send to backend

    // redirect
    return redirect(
}

// updateAction, for updating an existing AoK
export const updateAction = async ({request, params}) => {
    // form data

    // construct updated AoK object

    // send to backend

    // redirect
    return redirect()
}

// deleteAction, for deleting an existing AoK
export const deleteAction = async({params}) => {
    // get id

    // send request

    // redirect
    return redirect()
} 