import React from 'react';

import { StyledSearch } from '../Search/Search.styled';
import { StyledProfile } from '../Profile/Profile.styled';

class StaffProfile extends React.Component {
    render() {
        return (
            <>
                <StyledSearch className='StyledSearch' />
                <StyledProfile className='StyledProfile' />
            </>
        );
    };
}

export default StaffProfile;