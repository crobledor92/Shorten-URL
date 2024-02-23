export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
    const response = await fetch(endpoint)

    if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    const data = await response.json()

    return data
}