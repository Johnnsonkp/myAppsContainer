interface FetchedJSONDataStructure {
    id?: number
    title?: string 
    image?: string
}
  //create the interface for what the useState data will be bwfore the fetch call is made []
export interface FetchResponse {
    results: FetchedJSONDataStructure[]
}