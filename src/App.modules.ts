export interface FetchedJSONDataStructure {
    id?: number
    title?: string 
    image?: any
    group?: any
    url?: string
}

export interface ImageDataStructure {
  file?: any 
  upload_preset?: any
}
  //create the interface for what the useState data will be bwfore the fetch call is made []
export interface FetchResponse {
    results: FetchedJSONDataStructure[] | undefined
}