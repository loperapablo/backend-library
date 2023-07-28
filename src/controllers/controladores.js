import { connect } from '../database'

const formatYmd = (date) =>
  date.toISOString().slice(0, 10)

//USUARIOS

export const getUsers = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.execute(
    'SELECT * FROM usuarios'
  )
  res.json(rows)
}

export const createUser = async (req, res) => {
  try {
    const connection = await connect()
    const [rows] = await connection.execute(
      'INSERT INTO usuarios (ID, nombre, direccion, telefono, tipoUsuario, habilitado) VALUES (?,?,?,?,?,?)',
      [
        req.body.ID,
        req.body.nombre,
        req.body.direccion,
        req.body.telefono,
        req.body.tipoUsuario,
        req.body.habilitado,
      ]
    )
    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const connection = await connect()
    await connection.query(
      'UPDATE usuarios SET nombre = ?, direccion = ?, telefono = ?, tipoUsuario = ?, habilitado = ? WHERE id = ?',
      [
        req.body.nombre,
        req.body.direccion,
        req.body.telefono,
        req.body.tipoUsuario,
        req.body.habilitado,
        parseInt(req.params.id),
      ]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const connection = await connect()
    await connection.query(
      'DELETE FROM usuarios  WHERE id_usuarios = ?',
      [parseInt(req.params.id)]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

//Libros
export const getLibros = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.execute(
    'SELECT * FROM libros'
  )
  res.json(rows)
}

export const createLibro = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    const [rows] = await connection.execute(
      'INSERT INTO libros (ejemplarID, titulo, codigoISBN, numPag, editorial, formato, categoria, ejemplarNumEdicion, disponibilidad) VALUES (?,?,?,?,?,?,?,?,?)',
      [
        req.body.ejemplarID,
        req.body.titulo,
        req.body.codigoISBN,
        req.body.numPag,
        req.body.editorial,
        req.body.formato,
        req.body.categoria,
        req.body.ejemplarNumEdicion,
        req.body.disponibilidad,
      ]
    )
    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}

export const updateLibro = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    await connection.query(
      'UPDATE libros SET titulo = ?, codigoISBN = ?, numPag = ?, editorial = ?, formato = ?, categoria = ?, ejemplarNumEdicion = ?, disponibilidad = ? WHERE ejemplarID = ?',
      [
        req.body.titulo,
        req.body.codigoISBN,
        req.body.numPag,
        req.body.editorial,
        req.body.formato,
        req.body.categoria,
        req.body.ejemplarNumEdicion,
        req.body.disponibilidad,
        parseInt(req.params.ejemplarID),
      ]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const deleteLibro = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    await connection.query(
      'DELETE FROM libros  WHERE ejemplarID = ?',
      [parseInt(req.params.ejemplarID)]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

//prestamos

export const getPrestamos = async (
  req,
  res
) => {
  const connection = await connect()
  const [rows] = await connection.execute(
    'SELECT * FROM prestamos'
  )
  res.json(rows)
}

export const createPrestamo = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    var theDate = new Date(
      req.body.fechaPrestamo
    )
    theDate.setDate(theDate.getDate() + 8)

    var theDateString =
      theDate.getMonth() +
      1 +
      '/' +
      theDate.getDate() +
      '/' +
      theDate.getUTCFullYear()

    const [rows] = await connection.execute(
      'INSERT INTO prestamos (IDprestamo, fechaPrestamo, fechaDevolucion, estadoFisico, ejemplarID, personalID) VALUES (?,?,?,?,?,?)',
      [
        req.body.IDprestamo,
        req.body.fechaPrestamo,
        theDateString,
        req.body.estadoFisico,
        req.body.ejemplarID,
        req.body.personalID,
      ]
    )
    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}

export const updatePrestamo = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    await connection.query(
      'UPDATE prestamos SET fechaPrestamo = ?, fechaDevolucion = ?, estadoFisico = ?, ejemplarID = ?, personalID = ? WHERE IDprestamo = ?',
      [
        req.body.fechaPrestamo,
        theDateString,
        req.body.estadoFisico,
        req.body.ejemplarID,
        req.body.personalID,
        parseInt(req.params.IDprestamo),
      ]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const deletePrestamo = async (
  req,
  res
) => {
  try {
    const connection = await connect()
    await connection.query(
      'DELETE FROM prestamos  WHERE IDprestamo = ?',
      [parseInt(req.params.IDprestamo)]
    )
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

/*
IDprestamo int(11) PK 
fechaPrestamo date 
fechaDevolucion date 
estadoFisico varchar(45) 
ejemplarID int(11) 
personalID int(11)
*/
