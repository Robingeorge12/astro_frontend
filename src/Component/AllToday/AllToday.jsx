import React from 'react'
import "./AllToday.css"

function AllToday() {
  return (
    <div className='all-container'>
      <h3 className='all-head'>All About Today</h3>
<div className='all-boxDiv'>

<div className='all-div1'>
  <p className='all-title'>Today's Panchang</p>
  <img className="all-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zztrZGsuLhXQz8X3CbPIuFeCSa6vJ-XrzQ&usqp=CAU"} alt="" />
</div>

<div className='all-div1'>
  <p className='all-title'>Timing For Today</p>
  <img className="all-img" src={"https://img.freepik.com/free-vector/boy-girl-holding-clock_1308-26112.jpg?w=826&t=st=1696399088~exp=1696399688~hmac=941c8184a271704f3aa981c28493b15d0984b05ba01ffd92f2ee3844e202b42f"} alt="" />
</div>

<div className='all-div1'>
  <p className='all-title'>Today at glance</p>
  <img className="all-img" src={"https://img.freepik.com/premium-vector/time-concept-drawing-with-flat-objectscute-boy-marks-days-from-calendar_723224-2610.jpg"} alt="" />
</div>

</div>
    </div>
  )
}

export default AllToday