import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home/Home'
import TransitRemedy from "../Component/TransitRemedy/TransitRemedy"

function AllRoute() {
  return (
    <div>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/transitremedy" element={<TransitRemedy />} /> 
<Route path="" element={""} />
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}
{/* <Route path="" element={""} /> */}

</Routes>

    </div>
  )
}

export default AllRoute