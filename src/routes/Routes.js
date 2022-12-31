

import {Routes, Route, Navigate} from 'react-router-dom'




import Home from '../screens/Home'
import AddCurse from '../screens/AddCurse'
import AddTeacher from '../screens/AddTeacher'
import AddStudent from '../screens/AddStudent'
import AllData from '../screens/AllData'

import Students from '../screens/Students'
import Teachers from '../screens/Teachers'

import Login from '../screens/Login'
import Signup from '../screens/Signup'





const RoutesScreen = ()=>{
    return(
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add-curse' element={<AddCurse/>}/>
        <Route path='add-teacher' element={<AddTeacher/>}/>
        <Route path='add-student' element={<AddStudent/>}/>
        <Route path='all-data' element={<AllData/>}/>
        <Route path='student' element={<Students/>}/>
        <Route path='teacher' element={<Teachers/>}/>
     
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
       </Routes>

    )
}


export default RoutesScreen