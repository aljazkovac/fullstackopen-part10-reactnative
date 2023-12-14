import { SelectList } from 'react-native-dropdown-select-list'
import {Searchbar} from 'react-native-paper';
import * as React from 'react';
import { useState } from 'react';
import {View} from "react-native";
import {useDebounce} from "use-debounce";

const SelectFilter = ({ setSelectedFilter }) => {

    const [selected, setSelected] = useState("");
    const [searchQuery, setSearchQuery] = React.useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

    const onChangeSearch = query => setSearchQuery(query);

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
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={debouncedSearchQuery}
            />
            <SelectList
                placeholder={'Filter repositories'}
                setSelected={handleSelect}
                data={data}
                save="value"
                boxStyles={{borderRadius:0}}
            />
        </View>
    )
};

export default SelectFilter;