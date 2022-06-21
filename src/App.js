import { createContext, useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm'

export const Theme = createContext()
function App() {
  // const Arr = [
  //   {
  //     id: '1',
  //     name: 'a'
  //   }
  // ]
  // const [theme, setTheme] = useState('dark')
  // return (
  //   <Theme.Provider value={Arr}>
  //     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  //       Bay màu
  //     </button>
  //     <Param />
  //   </Theme.Provider>
  // );

  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default App;
