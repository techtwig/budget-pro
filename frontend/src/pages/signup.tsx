import SignUp from 'components/SignUp';

const registration = () => {
	return <SignUp />
};

export default registration;

registration.getLayout = function PageLayout(page){
return (
		<>
			{page}
		</>
	)
};