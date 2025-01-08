import { Container } from './styles';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import { Form } from '../Form/Form';
import EmailSvg from '../../assets/svgs/EmailSvg';
import PhoneSvg from '../../assets/svgs/PhoneSvg';
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

export function Contact() {
	return (
		<Container id='contact'>
			<header>
				<h2>Contact</h2>
				<p>Ready to get started on your project? </p>
				<p>Contact me now for a Free consultation.</p>
			</header>
			<div className='contacts'>
				<div>
					<a href='mailto:sachinshoff@gmail.com' style={{"height":'24px'}}>
          <IoIosMail size={25}/>
						{/* <EmailSvg /> */}
					</a>
					<a href='sachin.sharma.97659@gmail.com'>sachinshoff@gmail.com</a>
				</div>
				<div>
					<a href='tel:+917017284451' style={{"height":'20px'}}>
          <IoCallOutline size={25}/>
					</a>
					<a href='tel:+919630576848'>(+91) 7017284451</a>
				</div>
			</div>
			<Form></Form>
		</Container>
	);
}
