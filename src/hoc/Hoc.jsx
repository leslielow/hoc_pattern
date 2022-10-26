import Error from "../components/Error";

const Hoc = (MiComponente) => {

    const wrapper = (props) => {
        
        if(props.characters.length !== 0) {
            return <MiComponente {...props} />;
        } else {
            return <Error />
        }
    }

    return wrapper;
}

export default Hoc;