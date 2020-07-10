const jwt = require('jsonwebtoken')
const secret = '2ah73h^5zk2qd^)kyb8$0&md*x0j#59hv3bwt$63e5pu99f&wa'
import { AsyncStorage } from 'react-native'

import React, { useState } from 'react'

export default [loggedIn, setLoggedIn] = useState(false) 

// function isLoggedIn() {

//   if (!localStorage.token) return false
//   const token = localStorage.token
//   jwt.verify( token, secret, function(err, decoded) {
//     if ( err ) {
//       localStorage.removeItem( 'token' )
//     }
//   })
//   return (localStorage.token)
// }

// const isLoggedIn = async () => {
//   const token = await AsyncStorage.getItem('token')

//   if (!token) console.log('false nigga')

//   jwt.verify(token, secret, function (err, decoded) {
//     if (err) {
//       AsyncStorage.removeItem('token')
//     }
//   })

//   console.log('true nigaa')
// }


function getUserId() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  return JSON.parse(atob(parts[1])).sub
}



// export default {
//   isLoggedIn,
//   getUserId
// }