const jwt = require('jsonwebtoken')
const AsyncStorage = require('@react-native-community/async-storage')
const secret = '2ah73h^5zk2qd^)kyb8$0&md*x0j#59hv3bwt$63e5pu99f&wa'




// function setToken(token) {
//   localStorage.setItem('token', token)
// }

const setToken = async (token) => {
  try {
    const token =  await AsyncStorage.setItem('token', token)
    if (token !== null) {
      console.log('token saved')
    }
  } catch (e) {
    console.log('Cannot save to storage')
  }
}


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

const isLoggedIn = async () => {
  const token = await AsyncStorage.getItem('token')

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      AsyncStorage.removeItem('token')
    }
  })

  return token
}



// function getToken() {
//   return localStorage.getItem('token')
// }

const getToken = async () => {
  const token = await AsyncStorage.getItem('token')
  return token
}


// function logOut() {
//   localStorage.removeItem('token')
// }

const logOut = async (token) => {
  await AsyncStorage.removeItem(token)
}

function getUserId() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  return JSON.parse(atob(parts[1])).sub
}

export default {
  setToken,
  getToken,
  isLoggedIn,
  logOut,
  getUserId
}