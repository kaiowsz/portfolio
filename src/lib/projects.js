import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: "fc2zbkym",
    dataset: "production",
    apiVersion: "2023-01-18",
    useCdn: true,
    token: "skbK3AcU5Dhea8ydNU0mtuNJ1oBfJ0HipRkKqnTnXLEXlfmuTlpDblTe92hZDkkSbdD6yfD72gFthE0QJGr2qmzUjM4cAn3PgSPmEujFNYdiDnsLobwg5ECkkFAAg3CkEZNUNv6R6HvL6jsMw8IdFoG4KhETQtmJFGq9fnp1hWkFbOJlb8QF"
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}