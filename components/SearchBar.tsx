'use client'
import React from 'react'
import { SearchManufacturer } from '@/components/SearchManufacturer'

export function SearchBar() {

    const [ manufacturer, setManufacturer ] = React.useState('' as string)
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}
