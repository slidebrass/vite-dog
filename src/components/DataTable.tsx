import { useState } from 'react';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Breed Name', width: 90 },
    { field: 'breed_group', headerName: 'Breed Group', width: 90 }
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { dogFavData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }

    return (
        <>
            <Modal 
                id={selectionModel}
                open = {open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div>
                    <button className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                            onClick={() => handleOpen()}
                    >
                        Create New Favorite
                    </button>
                </div>
                <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">Update Favorite</button>
                <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">Delete Favorite</button>
            </div>
            <div className={ open ? "hidden" : 'container mx-10 my-5 flex flex-col'}
                style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Favorites</h2>
                <DataGrid rows={dogFavData} columns={columns}
                checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                componentsProps={{
                    pagination: {
                        rowsPerPageOptions: [5]
                    }
                }}
                />
            </div>
        </>
    )
}

export default DataTable