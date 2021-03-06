import React from 'react';

import { Wrapper, HelloBox, Image } from './ProfileList.styled';

class ProfileList extends React.Component {
    render() {
        return (
            <Wrapper>
                <StyledSearch />
                <StyledListing />
            </Wrapper>
        );
    };
}

export default ProfileList;