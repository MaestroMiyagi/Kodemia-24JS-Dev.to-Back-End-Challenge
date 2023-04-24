

server.post('/login', (request, response) => {
    const user = { id: 123, nombre: 'usuario', correo: 'usuario@ejemplo.com' }
    const token = auth.generateToken(req, res, user)
  })
  
  server.get('/perfil', auth.authUser, (request, response) => {
    res.json({ user: request.user })
  })
