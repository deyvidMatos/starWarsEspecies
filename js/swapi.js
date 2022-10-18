export const fetchSpecies = async (Species) =>{
    const APIResponse = await fetch(`https://swapi.dev/api/species/${Species}`)
    
    const data = await APIResponse.json()
    return data
}
