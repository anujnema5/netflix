import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/")
            }
        })
    }, [])


    return (
        <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            {user && <div className="flex items-center">
                <img className='w-12 h-12' src={user?.photoURL} alt="usericon" />
                <button className='bg-red-500 px-2 py-1 font-bold rounded-md text-white' onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    )
}

export default Header