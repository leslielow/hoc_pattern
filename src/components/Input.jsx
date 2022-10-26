const Input = (props) => {

    const {onChangeInput, value} = props;

    return (
        <input value={value} type="text" onChange={(e) => onChangeInput(e)}/>
    )
}

export default Input;