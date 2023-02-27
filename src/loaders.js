// Loaders.js
// To hold the functionality of what data needs to be loaded into our views.

// indexLoader function, in order to retrieve all of the AoKs
export const indexLoader = async () => {
    const response = await fetch(URL + "/actsofkindness/")
    const actsofkindness = await response.json()
    return actsofkindness
}

// showLoader function, retrieves a single AoK
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/actsofkindness/${params.id}/`)
    const actofkindness = await response.json()
    return actofkindness
}

