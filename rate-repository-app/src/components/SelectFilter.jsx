import { SelectList } from 'react-native-dropdown-select-list'
import * as React from 'react';
import { useState } from 'react';

const SelectFilter = () => {

    const [selected, setSelected] = useState("");

    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
    ]

    return(
        <SelectList
            placeholder={'Filter repositories'}
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
        />
    )
};

export default SelectFilter;