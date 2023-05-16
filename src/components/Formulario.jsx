import React from 'react'

const Formulario = () => {
    //estados - hooks
    const [nombre, setNombre]=React.useState('')
    const [apellido, setApellido]=React.useState('')
    const [lista, setLista]=React.useState([])
    const [modoedicion, setModoEdicion]=React.useState(false)
    const [editIndex, setEditIndex] = React.useState(-1)
    // guardar 
    const guardarDatos=(e)=>{
        e.preventDefault();
        //validaciones
        if (!nombre) {
            alert('falta el nombre')
            return
        }

        if (!apellido) {
            alert('falta el apellido')
            return
        }
        
        //guardar en la lista
        if (editIndex === -1) {
        setLista([
            ...lista,
            {nombre:nombre, apellido:apellido}
        ])} else {
            // Editar 
            const updatedList = [...lista];
            updatedList[editIndex] = { nombre, apellido };
            setLista(updatedList);
            setEditIndex(-1);
          }

        
        //limpiar inputs y estados
        e.target.reset()
        //limpiar estados
        setNombre('')
        setApellido('')
    }
    
    const editarUsuario = (index) => {
        const user = lista[index]
        setNombre(user.nombre)
        setApellido(user.apellido)
        setEditIndex(index)
      }

    // Borrar Usuario
    const BorrarUsuario=(nombre)=>{
        const filtro=lista.filter(item => item.nombre !==nombre)
        setLista(filtro)

        
      

          /*
        // Primera Edificion
        const PrimeraEdificion =(objeto)=>{
            setNombre(objeto.nombre)
            setApellido(objeto.apellido)
            setModoEdicion(true)
        }
        //Edificon Final
        const EdicionFinal=(e)=>{
            e.preventDefault()
            const editado = lista.map (item => item.nombre === nombre ? {nombre, edad} : item)
            setLista(editado)
            setModoEdicion(false)
            setNombre("")
            setApellido("")
        }
        */
    }
  return (
    <div className='container'>

<h2 className='text-secondary text-center'>Formulario Registro De Usuario</h2>
      <form onSubmit={guardarDatos}>
        <input
          type='text'
          placeholder='Ingrese su nombre'
          className='form-control mb-3'
          value={nombre}
          onChange={(e) => setNombre(e.target.value.trim())}
        />
        <input
          type='text'
          placeholder='Ingrese su apellido'
          className='form-control mb-3'
          value={apellido}
          onChange={(e) => setApellido(e.target.value.trim())}
        />
        <div className='d-grid gap-2'>
          <button type='submit' className='btn btn-outline-primary'>
            {editIndex === -1 ? 'Registrar' : 'Cambiar'}
          </button>
        </div>
      </form>
        <hr />
        <ol className='list-group'>
            {
                lista.map((item, index)=>(<li className='list-group-item bg-info' key={index}>{item.nombre} {item.apellido}
               <button className='btn btn-sm btn-primary float-end' onClick={() => editarUsuario(index)}>Editar</button>
                <button onClick={()=>{BorrarUsuario(item.nombre)}} className='btn btn-sm btn-primary  float-end'>Eliminar</button>

                </li>))
            }
        </ol>
    </div>

  )
}

export default Formulario