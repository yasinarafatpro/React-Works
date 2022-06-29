import React from 'react'

const CanBoil = ({celsius}) => {
    if(celsius>=100){
        return <p>the water would boil</p>
    }else
  return <p>Water can not Boil</p>
}

export default CanBoil