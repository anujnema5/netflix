import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const {showGptSearch} = useSelector((store)=>store.gpt)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
        });
    }

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
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
        <div className="w-screen px-8 py-2 bg-gradient-to-b from-black to-black z-10 flex justify-between">
            <img className='w-48' src={LOGO} alt="logo" />

            { user && <div className="flex gap-3 items-center">
                
               {showGptSearch && <select name="" id="" className='outline-none bg-gray-400 rounded-lg px-4 py-1.5 appearance-none' onChange={handleLanguageChange}>

                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                    ))}
                </select>}

                <button className='px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-400' onClick={handleGptSearch}>{showGptSearch ? "Home" : "GPT Search"}</button>

                <img className='w-12 h-12 rounded-md' src={user?.photoURL} alt="usericon" />
                <button className='bg-red-700 px-2 py-2 font-semibold rounded-md text-white' onClick={handleSignOut}>Sign out</button>
            </div>}

            { }
        </div>
    )
}

export default Header