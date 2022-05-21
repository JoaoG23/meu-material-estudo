import React from 'react';
import aulas from '../Data';

function Aulas() {
    return(<div>
        <h1>Aulas</h1>
        <ul className='aulas'>
            {aulas.map((aula) =>  <li key={aula.id}> {aula.title}</li> )}
        </ul>
    </div>
    )
}

export default Aulas;