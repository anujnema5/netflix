import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/")
            }
        })

        return () => unsubscribe
    }, [])


    return (
        <div className=" w-screen px-8 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className='w-48' src={LOGO} alt="logo" />

            {user && <div className="flex gap-3 items-center">
                <img className='w-12 h-12 rounded-md' src={user?.photoURL} alt="usericon" />
                <button className='bg-red-700 px-2 py-1 font-semibold rounded-md text-white' onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    )
}

export default Header