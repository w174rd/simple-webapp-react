import { useSelector } from "react-redux";


const CustomButton = ({type="submit", className="btn btn-primary", text, isDisable = false, onClick}) => {
    const utility = useSelector((state) => state.utility);

    return(
        <>
        {
            utility.loading.button ? 
                <button type={type} className={className} disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                    &nbsp; Loading...
                </button>
            :
            <button type={type} className={className} disabled={isDisable} onClick={onClick} >
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