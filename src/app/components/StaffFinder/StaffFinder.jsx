import React from 'react';

import { StyledSearch } from '../Search/Search.styled';
import { StyledListing } from '../Listing/Listing.styled';

class StaffFinder extends React.Component {
    render() {
        return (
            <>
                <StyledSearch />
                <StyledListing />
            </>
        );
    };
}

export default StaffFinder;