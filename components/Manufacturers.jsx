// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Manufacturer from './Manufacturer'
import Search from './Search'
import { filterManufacturers, retrieveManufacturers } from '../utils/manufacturers'


export default () => {
  const [manufacturerList, setManufacturerList] = useState([])
  const [filterManufacturerList, setFilterManufacturerList] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  useEffect(() => {
    async function pullData() {
      const manufacturers = await retrieveManufacturers()

      setManufacturerList(manufacturers)
      setFilterManufacturerList(manufacturers)
    }
    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterManufacturers(manufacturerList, searchTerm)


    setFilterManufacturerList(filtered)
  }, [searchTerm])

  return (
    <div className="form">
      <h1>Candy Makers</h1>
      <Search term={searchTerm} setter={setSearchTerm} />
      <ul>
        {
          filterManufacturerList.map(manufacturer => (<Manufacturer key={manufacturer.id} name={manufacturer.name} />))
        }
      </ul>
    </div>
  )
}
