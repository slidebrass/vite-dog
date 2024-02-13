import { chooseBreed_Name, chooseImage_Count } from "../redux/slices/DogRootSlice"

export const api_key = 'live_sM7CeCWZm4IZGKFZ0MnVD7MF3ijTrjzaSQrIGtEZGbbpTGei1L8SYYPbgwA935t7'

export const dog_server_calls = {
  
  get: async (breed_name: string, image_count: number) => {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${image_count}&breed_ids=${breed_name}&?api_key=${api_key}`,
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

// export const dog_info_server_calls = {
//   get: async () => {
//     const info_response = await fetch(`https://api.thedogapi.com/v1/`)
//   }
// }