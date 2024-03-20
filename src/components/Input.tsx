import { SelectChangeEvent, TextField } from '@mui/material';
import { forwardRef } from 'react';

interface InputType {
    name: string,
    placeholder: string,
    onChange: (event: SelectChangeEvent<string>) => void
}

const Input = forwardRef(( props: InputType, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            multiline={true}
            type='text'
            {...props}
        >
        </TextField>
    )
})

export default Input