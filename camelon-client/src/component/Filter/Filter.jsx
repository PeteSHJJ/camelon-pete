import React from 'react'
import './Filter.scss'

function Filter() {
  return (
    <> 
    <div className='filter-container'>
        <select> 
            <option value="" disabled selected>ภูมิภาค</option>
        </select>
        <select> 
            <option value="" disabled selected>จังหวัด</option>
        </select>
        <select> 
            <option value="" disabled selected>อำเภอ/เขต</option>
        </select>
        <select> 
            <option value="" disabled selected>เเขวง/ตำบล</option>
        </select>
        <select> 
            <option value="" disabled selected>ช่วงเวลา</option>
        </select>
        <select> 
            <option value="" disabled selected>ประเภทของอาชญากรรม</option>
        </select>
        <button>ค้นหา</button>
    </div>
    </>
    
  )
}

export default Filter