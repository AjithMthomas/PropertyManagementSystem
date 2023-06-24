import React from 'react'
import AdiminSidebar from '../../components/AdminSide/AdminSidebar'
import Properties from '../../components/AdminSide/PropertiesLis'

function AdminHome() {
  return (
    <div className="flex">
    <div className='w-3/12'>
        <AdiminSidebar/>
    </div>
    <div className="w-9/12">
    <Properties/>
    </div>
    </div>
  )
}

export default AdminHome

