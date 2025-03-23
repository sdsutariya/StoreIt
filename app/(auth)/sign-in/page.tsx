import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => <AuthForm type='sign-in' />

export default SignIn


// import { cookies } from 'next/headers';
// import AuthForm from '@/components/AuthForm'
// import React from 'react'
// import { redirect } from 'next/navigation';

// export default async function SignIn() {
//     const cookieStore = await cookies();
//     const user = cookieStore.get('appwrite-session');

//     // If user is already logged in, redirect or handle logic
//     if (user) {
//         redirect('/')
//     }

//     return <AuthForm type="sign-in" />;
// }
