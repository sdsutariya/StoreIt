import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUp = () => <AuthForm type='sign-up' />

export default SignUp



// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import AuthForm from '@/components/AuthForm';
// import React from 'react';

// export default async function SignUp() {
//     const cookieStore = await cookies();
//     const user = cookieStore.get('appwrite-session');


//     if (user) {

//         redirect('/');
//     }

//     return <AuthForm type="sign-up" />;
// }
