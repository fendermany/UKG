import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '400px',
	padding: '20px',
	borderRadius: '12px',
	backgroundColor: '#fff',
	boxShadow: 24,
	color: '#000'
};

const Modals = ({ active, setActive, children }) => {
	return (
		<Modal
			open={active}
			onClose={() => setActive(false)}
			aria-labelledby='parent-modal-title'
			aria-describedby='parent-modal-description'
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={active}>
				<Box sx={style} onClick={e => e.stopPropagation()}>
					{children}
				</Box>
			</Fade>
		</Modal>
	);
};

export default Modals;
