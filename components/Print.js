<<<<<<< HEAD
import React from 'react';

const Print = () => {
    return
}

export default Print;
=======
import React from 'react'

const arr = (new Array(5)).fill(null)

const Print = () => {
  return (
    arr.map((value, index) => (
      <View key={index}>
        <Text>{index + 1}</Text>
      </View>
    ))
  )
}

export default Print
>>>>>>> 98bad19c713168f54cdb042813f7295cbea335f6
