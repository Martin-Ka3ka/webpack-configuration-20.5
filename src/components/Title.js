const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Ilość zadań: {props.count}</p>
        </div>
    );
}

export default Title;