import React from 'react';

import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

import './user-auth-page.styles.scss';

const UserAuthPage = () => (
    <div className='user-auth-page'>
        <SignUp />
        <SignIn />
    </div>
);

export default UserAuthPage;