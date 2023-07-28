import { Router } from 'express'
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getLibros,
  createLibro,
  updateLibro,
  deleteLibro,
  getPrestamos,
  createPrestamo,
  updatePrestamo,
  deletePrestamo,
} from '../controllers/controladores'

const router = Router()

router.get('/usuarios', getUsers)
router.post('/usuarionuevo', createUser)
router.put('/usuario/:id', updateUser)
router.delete('/usuario/:id', deleteUser)

router.get('/libros', getLibros)
router.post('/libronuevo', createLibro)
router.put('/libro/:ejemplarID', updateLibro)
router.delete(
  '/libro/:ejemplarID',
  deleteLibro
)

router.get('/prestamos', getPrestamos)
router.post('/prestamonuevo', createPrestamo)
router.put(
  '/prestamo/:IDprestamo',
  updatePrestamo
)
router.delete(
  '/prestamo/:IDprestamo',
  deletePrestamo
)

export default router
