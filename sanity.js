// import React from "react"
import sanityClient from "@sanity/client"
import  imageUrlBuilder  from "@sanity/image-url"



const client = sanityClient({
    projectId:"tgpc3rvs",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21"
})
const builder  =imageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)
export function urlFor(source) {
    return builder.image(source)
  }
export default client



// import {sanityClient} from "@sanity/client"

// import imageUrlBuilder from "@sanity/image-url/"

// const client = sanityClient({
//     projectId:"tgpc3rvs",
//     dataset: "production",
//     useCdn:true,
//     apiVersion:"v2021-10-21"
// })


// const builder = imageUrlBuilder(client)
// export const urlFor =(source)=> builder.image(source) 

// export default client