// since the data doesnt matter at the moment
// we can just store it in a json object in memory

export type WordDataObject = {
    words: string[]
}

export function getEmptyDataObject(): WordDataObject {
    return {words: []}
}
