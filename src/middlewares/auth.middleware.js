import jwt from '../lib/jwt'

function authUser(request, response, next) {
  const token = request.headers.authorization?.split(' ')[1]

  if (!token) {
    return response.status(401).json({ mensaje: 'Validation token required' })
  }

  try {
    const payload = jwt.verify(token)
    request.user = payload
    siguiente()
  } catch (error) {
    return response.status(401).json({ mensaje: 'Validation token invalid' })
  }
}

function generateToken(request, res) {
  const payload = { id: request.user.id, name: request.user.name, email: request.user.email }
  const token = jwt.sign(payload)
  response.json({ token })
}

export default {
  authUser,
  generateToken
}
