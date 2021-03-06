import React from 'react';

import { StyledSearch } from '../Search/Search.styled';
import { StyledProfile } from '../Profile/Profile.styled';

class StaffProfile extends React.Component {
    render() {
        return (
            <>
                <StyledSearch />
                <StyledProfile />
            </>
        );
    };
}

export default StaffProfile;