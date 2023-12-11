import { SelectList } from 'react-native-dropdown-select-list'
import * as React from 'react';
import { useState } from 'react';

const SelectFilter = ({ setSelectedFilter }) => {

    const [selected, setSelected] = useState("");

    const data = [
        {key:'1', value:'Latest repositories'},
        {key:'2', value:'Highest rated repositories'},
        {key:'3', value:'Lowest rated repositories'},
    ]

    const handleSelect = (val) => {
        setSelected(val);
        setSelectedFilter(val);
    }

    return(
        <SelectList
            placeholder={'Filter repositories'}
            setSelected={handleSelect}
            data={data}
            save="value"
            boxStyles={{borderRadius:0}}
        />
    )
};

export default SelectFilter;