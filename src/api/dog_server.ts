import { chooseBreed_Id, chooseImage_Count } from "../redux/slices/DogRootSlice"

export const api_key = 'live_sM7CeCWZm4IZGKFZ0MnVD7MF3ijTrjzaSQrIGtEZGbbpTGei1L8SYYPbgwA935t7'

export const dog_server_calls = {
  
  get: async (dict_breed_id: number) => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/${dict_breed_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'x-api-key': `${api_key}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },
}
