import React from 'react';

import { Wrapper, HelloBox, Image } from './Search.styled';

class Search extends React.Component {
    render() {
        return (
            <>
                <HeaderTitle></HeaderTitle>
                <HeaderSubTitle></HeaderSubTitle>
                <SearchBar></SearchBar>
            </>
        );
    };
}

export default Search;