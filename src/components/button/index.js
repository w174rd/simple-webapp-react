import { useSelector } from "react-redux";


const CustomButton = ({type="submit", className="btn btn-primary", text, isDisable = false}) => {
    const utility = useSelector((state) => state.utility);

    return(
        <>
        {
            utility.loading.button ? 
                <button type={type} className={className} disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                     Loading...
                </button>
            :
            <button type={type} className={className} disabled={isDisable}>
                {text}
            </button>
        }
        </>
    );
};

// CustomPrimaryButton.defaultProps = {
//     variant: 'text',
//     onClick: () => {},
//     sx: {},
//     type: 'button'
// };

export default CustomButton;