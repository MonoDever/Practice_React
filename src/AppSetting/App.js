import { Route,Routes } from 'react-router-dom';
import Home from '../Views/Home/HomePage';
import UseStateDemo from '../Views/Hook/UseStateDemo';
import UseEffectDemo from '../Views/Hook/UseEffectDemo';
import UseContextDemo from "../Views/Hook/UseContextDemo";
import UseRefDemo from "../Views/Hook/UseRefDemo";
import UseReducerDemo from "../Views/Hook/UseReducerDemo";
import UseMemoDemo from "../Views/Hook/UseMemoDemo";
import UseCallbackDemo from "../Views/Hook/UseCallbackDemo";
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/UseStateDemo' element={<UseStateDemo />}/>
        <Route path='/UseEffectDemo' element={<UseEffectDemo />}/>
        <Route path='/UseContextDemo' element={<UseContextDemo />}/>
        <Route path='/UseRefDemo' element={<UseRefDemo />}/>
        <Route path='/UseReducerDemo' element={<UseReducerDemo />}/>
        <Route path='/UseMemoDemo' element={<UseMemoDemo />}/>
        <Route path='/UseCallbackDemo' element={<UseCallbackDemo />}/>
      </Routes>
    </div>
  )
}

