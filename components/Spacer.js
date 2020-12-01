import React from 'react'
import { View } from 'react-native'
import sizes from '../config/sizes'

<<<<<<< HEAD
// const Spacer = (props) => {
const Spacer = ({
  size = 0,
  horizontal,
  ...props
=======
/**
 * Componente utile a creare spaziature
 * senza dovere applicare margini o padding 
 * agli altri componenti
 */
const Spacer = ({
  size = 0, // valore di default
  horizontal,
  ...props // props di View aggiuntive
>>>>>>> 98bad19c713168f54cdb042813f7295cbea335f6
}) => {
  return (
    <View style={{
      width: horizontal ? size * sizes.unitSize : 0,
      height: horizontal ? 0 : size * sizes.unitSize
    }} { ...props } />
  )
}

<<<<<<< HEAD
=======
/**
 * questo si fa sia con i class components che con i function components,
 * anche se per i function component è decisamente meglio che fare come è stato
 * fatto sopra
 */
>>>>>>> 98bad19c713168f54cdb042813f7295cbea335f6
// Spacer.defaultProps = {
//   size: 0
// }

export default Spacer
