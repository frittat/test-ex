import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";
import { RootState } from "../redux/rootState.interface";
import { setError } from "../redux/actions";

import "../assets/scss/components/Modal.scss";

export default function ErrorModal() {
    const { errorHeader, errorText } = useSelector((state: RootState) => state.error);
    const dispatch = useDispatch();

    const onModalClose = () => {
        dispatch(setError("", ""));
    };

    return (
        <Modal open={!!errorHeader && !!errorText} onClose={onModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className="modal">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="modal-header">
                    {errorHeader}
                </Typography>
                <Typography id="modal-modal-description" className="modal-text">
                    {errorText}
                </Typography>
            </Box>
        </Modal>
    );
}
