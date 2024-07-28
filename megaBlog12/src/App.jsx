import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import authservice from './appWrite/auth';
import './App.css'
import { logIn, logOut } from './store/authSlice';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL);
  // vite specific env variables access
const {loading, setLoading} = useState(true)
const dispatch = useDispatch()
useEffect(()=>{
  authservice.checkUserState()
  .then(
    (userData)=>{
      if (userData)
        {
          dispatch(logIn({userData}))// here i am calling the logIn action creator returned by the createSlice function it will return a action with the type which will trigger the logIn case reducer 
          // console.log(logIn("userData"));
        }else{
          dispatch(logOut())
        }
    }
  )
  .finally(
    ()=>{setLoading(false)}
  ) 

})
  return !loading ? (
    <div className='min-h-full flex flex-wrap content-between bg-slate-400'>
      <div className='w-full text-white block'>
        <Header/>
        <main>
          {/* <outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div>
      Loading
    </div>
  )
}

export default App
