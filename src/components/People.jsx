import PropTypes from "prop-types";
import { Person } from "./Person";
import { useState } from "react";

export const People = ({ people, setPeople }) => {
  const [editingId, setEditingId] = useState(null);

  const [editedPerson, setEditedPerson] = useState({
    name: "",
    role: "",
    img: "",
  });

  //Método para gestionar el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Método para crear una nueva persona en el Team
  const handleCreate = (e) => {
    e.preventDefault();

    //Agregar una persona al array
    setPeople([...people, { id: people.length +1, ...editedPerson}]);

    //Reiniciar el estado del formulario
    setEditedPerson({name:'', role:'', img:''});
  };

  return (
    <div>
      <h2 className="text-center my-4">IT Team</h2>
      <div className="container">
        <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
          {people.map((people) => {
            return (
              <div key={people.id}>
                <Person
                  id={people.id}
                  name={people.name}
                  img={people.img}
                  role={people.role}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/*formulario*/}
      <div className="container mt-4 ">
          <h2 className="text-center">Crear Nuevo Empleado</h2>
          <form action="">
            <div>
              <label htmlFor="name"> Nombres</label>
              <input type="text" name="name" value={editedPerson.name} required className="form-control"/>
            </div>
          </form>
      </div>
    </div>
  );
};

People.propTypes = {
  people: PropTypes.array,
  setPeople: PropTypes.func,
};
