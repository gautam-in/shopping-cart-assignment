const Spacer = ({customClass, children}) => {
	return (
		<div className={customClass}>
			{children}
		</div>
	);
};

export default Spacer;