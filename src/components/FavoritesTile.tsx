// Need a reusable tile to display dog image, dog breed, and various attributes of the dog.
// Will also include sections for the user to make notes and do CRUD operations somehow.

import * as React from 'react';
import { Select, SelectProps } from "@mui/material";
import { Option } from "@mui/base/Option";
import { UnfoldMoreRoundedIcon } from "@mui/icons-material"

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
    props:SelectProps<TValue>,
    ref: React.ForwardedRef<HTMLUListElement>,
) {
    const slots: SelectProps<TValue>['slots'] = {
        root: CustomButton,
        listbox: Listbox,
        popup: Popup,
        ...props.slots,
    };

    return <Select {...props} ref={ref} />;
}) as <TValue>(
    props: SelectProps<TValue> & React.RefAttributes<HTMLUListElement>,
) => JSX.Element;

export function UnstyledSelectBasic() {
    return (
        <Select defaultValue={10}>
            <Option value={10}>Ten</Option>
            <Option value={15}>Fifteen</Option>
            <Option value={20}>Twenty</Option>
            <Option value={25}>Twenty-Five</Option>
            <Option value={30}>Thirty</Option>
        </Select>
    );
}