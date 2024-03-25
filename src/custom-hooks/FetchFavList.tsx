import { useState, useEffect } from 'react';
import { server_calls } from '../api/server';

const useGetFavList = () => {
  const [ favList, setFavList ] = useState<[]>([])

  async function handleListFetch() {
    const result<([])> = server_calls.get_notes;
    setFavList(result)
  }

  useEffect( () => {
    handleListFetch();
  }, [])
  return { favList, getFavList: handleListFetch}
}

export default useGetFavList
