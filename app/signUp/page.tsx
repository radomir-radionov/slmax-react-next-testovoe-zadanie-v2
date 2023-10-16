'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {ChangeEvent, useState} from 'react'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const handleRegistration = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]') as {username: string; password: string}[]

    const user = storedUsers.find((user) => user.username === username)

    if (user) {
      alert('User already exists. Please try again.')
    } else {
      const newUser = {username, password}
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]))
      router.push('/')
    }
  }

  return (
    <div className='flex justify-center items-center '>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            value={username}
            onChange={handleUsernameChange}
            placeholder='Username'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='******************'
          />
          <p className='text-blue-500 text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' onClick={handleRegistration}>
            Sign Up
          </button>
          <Link href='/signIn' className='underline decoration-sky-500'>
            Sign In?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
