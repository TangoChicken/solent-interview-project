import React from 'react';

import { Header, HeaderTitle, HeaderSubTitle, SearchBar } from './Search.styled';

class Search extends React.Component {
    render() {
        return (
            <Header>
                <HeaderTitle>Find a member of staff</HeaderTitle>
                <HeaderSubTitle>Use the search box to get started</HeaderSubTitle>
                <SearchBar placeholder='Start typing...'></SearchBar>
            </Header>
        );
    };
}

export default Search;