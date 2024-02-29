const token = 'Bearer 9bcd1983-9357-48cc-8a15-b7864cddfd4c'
const endpoint = 'http://localhost:5173'

export const server_calls = {
  get_dogs: async () => {
    const response = await fetch(`${endpoint}/api/dogs`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  get_dog: async (breed_id: number) => {
    const response = await fetch(`${endpoint}/api/dogs/${breed_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  create_dog: async (data:any = {}) => {
    const response = await fetch(`${endpoint}/api/dogs`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to create new data on the server')
    }

    return await response.json()
  },

  update_dog: async (breed_id: number, data:any = {}) => {
    const response = await fetch(`${endpoint}/api/dogs/${breed_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to update data on the server')
    }

    return await response.json()
  },

  delete_dog: async (breed_id:number) => {
    const response = await fetch(`${endpoint}/api/dogs/${breed_id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete data from the server')
    }

    return;
  },

  get_users: async () => {
    const response = await fetch(`${endpoint}/api/users`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  get_user: async (id:string) => {
    const response = await fetch(`${endpoint}/api/users${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  create_user: async (data:any = {}) => {
    const response = await fetch(`${endpoint}/api/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to create new data on the server')
    }

    return await response.json()
  },

  update_user: async (id: string, data:any = {}) => {
    const response = await fetch(`${endpoint}/api/users/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to update data on the server')
    }

    return await response.json()
  },

  delete_user: async (id:string) => {
    const response = await fetch(`${endpoint}/api/users/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete data from the server')
    }

    return;
  },

  get_notes: async () => {
    const response = await fetch(`${endpoint}/api/notes`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  get_note: async (breedNotes_Id=string) => {
    const response = await fetch(`${endpoint}/api/notes${breedNotes_Id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
    }

    return await response.json()
  },

  create_note: async (data:any = {}) => {
    const response = await fetch(`${endpoint}/api/notes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to create new data on the server')
    }

    return await response.json()
  },

  update_note: async (breedNotes_Id: string, data:any = {}) => {
    const response = await fetch(`${endpoint}/api/notes/${breedNotes_Id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to update data on the server')
    }

    return await response.json()
  },

  delete_note: async (breedNotes_Id:string) => {
    const response = await fetch(`${endpoint}/api/notes/${breedNotes_Id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete data from the server')
    }

    return;
  },

  get_dict: async (dict_breed_name:string) => {
    const response = await fetch(`${endpoint}/api/dogdict/${dict_breed_name}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
    })

    if (!response.ok) {
      throw new Error('Failed to get data from the server')
    }

    return await response.json();
  },
};