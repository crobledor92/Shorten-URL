export const isValidUrl = async (urlString: string) => {
    try {
        if(!validateProtocol(urlString)) { return false }

        const isValid = await checkUrlValidity(urlString)
        if (!isValid) { return false}

        return true
    } catch(error) {
        return false
    }
}

const validateProtocol = (urlString: string) => {
    const url = new URL(urlString)
    return url.protocol === 'http:' || url.protocol === 'https:'
}

const checkUrlValidity = async (urlString: string) => {
    const res = await fetch(urlString)
    if (!res.ok) {
        return false
    } else {
        return true
    }
}