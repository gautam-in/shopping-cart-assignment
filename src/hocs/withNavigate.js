import { useNavigate } from 'react-router-dom';

function withNavigate(WrapperComponent) {
    return (props) => {
        const navigate = useNavigate();

        return (
            <WrapperComponent
                navigate={navigate}
                {...props}
            />
        )
    };
};
export default withNavigate;