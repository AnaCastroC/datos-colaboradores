
import { useState } from "react";
import  BaseColaboradores from "../data/Data";

const Insert = () =>{

    const [nombre, setName] = useState("");
    const [correo, setEmail] = useState("");
    const [id, setId] = useState(4);
    const [list, setList] = useState(BaseColaboradores);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setList([...list, {id, nombre, correo }]);
      setName("");
      setEmail("");
    setId(id + 1);

    }

    const handleInput = (e) => {
        if (e.target.id === "name") {
            setName(e.target.value);
          } else{
            setEmail(e.target.value);
          
          }
    }

return(
<div>
    <form onSubmit={handleSubmit} className="m-2 row justify-content-start align-items-center">
        <div className="m-3 col-5">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input onChange={handleInput} type="name" className="form-control" id="name" value={nombre}/>
        </div>
        <div className="m-3 col-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleInput} type="email" className="form-control" id="email" value={correo}/>
        </div>
       <div className="col">
        <br/>
            <button type="submit" className="btn btn-warning btn-lg">Submit</button>
        </div>
    </form>
    <table className="table table-dark table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {list.map((colaborador) => {
                    return (
                        <tr key={colaborador.id}>
                            <td>{colaborador.id}</td>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                        </tr>
                    )
                })
                }
        </tbody>
    </table>

</div>
    
)
}

export default Insert;