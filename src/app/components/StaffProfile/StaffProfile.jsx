import React from 'react';

import { StaffProfileContainer } from './StaffProfile.styled';
import { Search } from '../Search/Search';
import { Profile } from '../Profile/Profile';

class StaffProfile extends React.Component {
    render() {
        return (
            <StaffProfileContainer>
                <Search className='StyledSearch' />
                <Profile className='StyledProfile' />
            </StaffProfileContainer>
        );
    };
}

export default StaffProfile;
export { StaffProfile };