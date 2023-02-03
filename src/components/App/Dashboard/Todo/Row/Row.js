const Row = (props) => {
    return (
        <tr>
            <td>{props.todoID}</td>
            <td>{props.todoDesc}</td>
            <td>{props.todoCompleted ? "SÍ" : "NO"}</td>
        </tr>
    )
}

export default Row;