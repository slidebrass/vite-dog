import { TextField } from '@mui/material';
import React, { ChangeEventHandler } from 'react';

interface InputType {
    name: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    sx?: {mx: number}
    value: string
}

const Input: React.FC<InputType> = (({ name, placeholder, onChange, sx, value } ) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            multiline={true}
            type='text'
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            sx={sx}
            value={value}
        >
        </TextField>
    )
})

export default Input