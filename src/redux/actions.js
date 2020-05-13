export const initialLogin = (userId) => {
  return {type: 'INITIAL_LOGIN', payload: userId}
}

export const initialAddress = (addressId) => {
  return {type: 'INITIAL_ADDRESS', payload: addressId}
}