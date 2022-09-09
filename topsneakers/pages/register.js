import Link from 'next/link'
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'
import { getError } from '../utils/error'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function registerScreen() {

    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/');
        }
    },[router, session, redirect]);

    const{
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm();

    const submitHandler = async ({ name, email, password }) => {
        try {
            await axios.post('/api/auth/signup', {
                name,
                email,
                password,
            });

            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if (result.error) {
                toast.error(result.error);
            }

        } catch(err) {
            toast.error(getError(err));
        }
    }
  return (
    <Layout title="Create Account">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
            <h1 className="mb-4 text-xl">Create Account</h1>
            <div className="mb-4">
                <label htmlFor="email">Name</label>
                <input 
                    type="name"
                    className="w-full"
                    id="name"
                    autoFocus
                    {...register('name', {
                        required: 'Please enter name',
                    })}
                />
                {errors.name && ( 
                    <div className="text-red-500">{errors.name.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    {...register('email', {required: 'Please enter email',
                        pattern: { 
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                            message: 'Please enter valid email',
                    }})}
                    id="email" 
                    className="w-full"/>
                {errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
            </div>
            <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input type="password"
                {...register('password', {
                    required: 'Please enter password',
                    minLength: { value: 6, message: '{assword must be more than 5 charachters' },
                })} 
                id="password" className="w-full" autoFocus></input>
                {errors.password && (
                    <div className="text-red-500">{errors.password.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="w-full"
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) => value === getValues('password'),
                        minLength: {
                            value: 6,
                            message: 'Password must be more than 5 charachters'
                        }
                    })}
                />
                {errors.confirmPassword && (
                    <div className="text-red-500">
                        {errors.confirmPassword.message}
                    </div>
                )}
                {errors.confirmPassword && 
                errors.confirmPassword.type === 'validate' && (
                    <div className="text-red-500">Passwords do not match</div>
                )}
            </div>
            <div className="mb-4">
                <button className="primary-button">Register</button>
            </div>
            <div className="mb-4">
                Don&apos;t have an account? &nbsp;
                <Link href={`/register?redirect=${redirect || '/'}`}><a className="text-blue-400">Register</a></Link>
            </div>
        </form>
    </Layout>
  )
}
