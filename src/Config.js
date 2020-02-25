export const ApiKey = 'BLI12Yro6TpSibVr'
export const Url = 'https://flipaty.com/api'

export const checkLocalStorage = (item) => {
    let check = localStorage.getItem(item)
    if(check) return check
    return false
}