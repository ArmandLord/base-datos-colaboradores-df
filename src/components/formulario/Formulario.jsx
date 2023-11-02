import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export const Formulario = () => {

    const [formulario, setFormulario] = useState({email: '', nombre:'', edad:'', cargo:'', telefono:''})

    const onchange = (valor) => {
        setFormulario({...formulario, [valor.target.name] : valor.target.value })
    }

    console.log(formulario)

  return (
    <Form>
        <Form.Group className="mb-3"  >
        <Form.Control name="nombre" type="text" placeholder="Nombre" onChange={onchange}  />
        <Form.Control name="email" type="email" placeholder="Email" onChange={onchange}  />
        <Form.Control name="edad" type="number" placeholder="Edad" onChange={onchange}  />
        <Form.Control name="cargo" type="text" placeholder="Cargo" onChange={onchange}  />
        <Form.Control name="telefono" type="number" placeholder="Teléfono" onChange={onchange}  />
        <Button variant="primary" type="submit" className='w-100'>
            Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  )
}
