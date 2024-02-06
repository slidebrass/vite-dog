const token = 'live_sM7CeCWZm4IZGKFZ0MnVD7MF3ijTrjzaSQrIGtEZGbbpTGei1L8SYYPbgwA935t7'

export const server_calls = {
  get: async () => {
    const response = await fetch(`http://localhost:5173/api/dogs`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  create:async (data:any = {}) => {
    const response = await fetch(`http://localhost:5173/api/dogs`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to create new data on the server')
    }

    return await response.json()
  },

  update: async (id: string, data:any = {}) => {
    const response = await fetch(`http://localhost:5173/api/dogs/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to update data on the server')
    }

    return await response.json()
  },

  delete: async (id:string) => {
    const response = await fetch(`http://localhost:5173/api/dogs/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${token}`
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete data from the server')
    }

    return;
  },
}

