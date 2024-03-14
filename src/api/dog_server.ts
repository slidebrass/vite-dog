
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

    let data = await response.json()
    return await dog_server_calls.get_image_data(data.reference_image_id)
  },

  get_image_id: async() => {
    const response_name = await fetch(`https://api.thedogapi.com/v1/breeds`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response_name.ok) {
      throw new Error('Failed to fetch data from the server')
    }



    return await response_name.json()
  },

  get_image_data: async (reference_image_id: string) => {
    const response_image = await fetch(`https://api.thedogapi.com/v1/images/${reference_image_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response_image.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response_image.json()
  }
}
