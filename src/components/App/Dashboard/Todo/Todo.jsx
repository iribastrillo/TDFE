import Row from './Row/Row';

const todos = [
    {id:1, desc:'Realizar hito 1', completed:true},
    {id:2, desc:'Realizar hito 2', completed:false},
    {id:3, desc:'Realizar hito 3', completed:false}
]

const Todo = () => {
    return (
        <>
            <table>
                <thead>
                    <th>
                        <td>id</td>
                        <td>Descripción</td>
                        <td>Completo</td>
                    </th>
                </thead>
                <tbody>
                    {todos.map (todo => <Row todoID={todo.id} todoDesc={todo.desc} todoCompleted={todo.completed} />)}
                </tbody>
            </table>
        </>
    )
}

export default Todo;