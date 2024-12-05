import { Button } from 'react-bootstrap';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const ViewAllButton = ({ initialText, variant = 'primary', onClick }) => {
    const handleToggle = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='d-flex'>
            <Button variant={variant} onClick={handleToggle}>              
                {initialText}
            </Button>
        </div>
    );
};

export const BackButton = ({ initialText, variant = 'primary', onClick }) => {
    const handleToggle = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='d-flex'>
            <Button variant={variant} onClick={handleToggle}>
            <MdKeyboardDoubleArrowLeft size={24}/>
                {initialText}
            </Button>
        </div>
    );
};

export const MyButton = ({ initialText, variant = 'primary', onClick }) => {
    const handleToggle = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='d-flex'>
            <Button variant={variant} onClick={handleToggle}>
                {initialText}
            </Button>
        </div>
    );
};
