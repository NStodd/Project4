// Loaders.js
// To hold the functionality of what data needs to be loaded into our views.

import url from "./url"

//const url = "https://acts-of-kindness.onrender.com"

// indexLoader function, in order to retrieve all of the AoKs
export const indexLoader = async () => {
    const response = await fetch(url + "/actsofkindness/")
    const actsofkindness = await response.json()
    return actsofkindness
}

// showLoader function, retrieves a single AoK
export const showLoader = async ({params}) => {
    const response = await fetch(url + `/actsofkindness/${params.id}/`)
    const actofkindness = await response.json()
    return actofkindness
}
