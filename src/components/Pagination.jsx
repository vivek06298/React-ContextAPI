import React from 'react'
import { Appcontext } from "../context/Appcontext"
import { useContext } from 'react'

export const Pagination = () => {

  const {page} = useContext(Appcontext);

  return (
    <div>
      <div>
        { page > 1 &&
          <button>Previous</button>
        }      
      </div>
    </div>
  )
}
