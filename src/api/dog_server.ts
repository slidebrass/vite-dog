import { chooseBreed_Id, chooseImage_Count } from "../redux/slices/DogRootSlice"

export const api_key = 'live_sM7CeCWZm4IZGKFZ0MnVD7MF3ijTrjzaSQrIGtEZGbbpTGei1L8SYYPbgwA935t7'

export const dog_server_calls = {
  
  get: async (chooseBreed_Id: string, chooseImage_Count: number) => {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${chooseImage_Count}?breed_ids=${chooseBreed_Id}&?api_key=${api_key}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${api_key}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },
}

// Need to send data somewhere.

// export const dog_info_server_calls = {
//   get: async () => {
//     const info_response = await fetch(`https://api.thedogapi.com/v1/`)
//   }
// }