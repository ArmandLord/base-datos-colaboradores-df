import { Row, Col } from "react-bootstrap";
import { Listado } from "./components/listado/Listado";
// obtener data de archivo baseColaboradores
import { baseColaboradores } from "./db/BaseColaboradores";
import { useState } from "react";

const App = () => {
  // almacenar data en un hook
  const [colaboradores, setColaboradores] = useState(baseColaboradores); // []

  return (
    <>
      <div className="mx-4">
        <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={4}>
            {/* Crear componente Buscador */}
            <h1>Buscador</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            {/* Crear componente Listado */}
            <Listado colaboradores={colaboradores} />
          </Col>
          <Col md={3} className="">
            <h2>Agregar colaborador</h2>
            {/* Crear componente Formulario */}
            <h1>Formulario</h1>
            {/* Crear componente Alerta */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
