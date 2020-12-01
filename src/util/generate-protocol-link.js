const generateProtocolLink = (type, data) => {
  switch (type) {
    case 'email':
      return `mailto:${data}`
    case 'phone':
      return `tel:${data}`
    default:
      return null
  }
}

export default generateProtocolLink
