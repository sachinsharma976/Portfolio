import { Container } from './styles';
import Sachin from '../../assets/sachin.png';
import nextjs from '../../assets/nextjs.svg';
import mongodb from '../../assets/mongodb.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import tailwind from '../../assets/tailwind.svg';
import boostrapIcon from '../../assets/bootstrap-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export function About() {
	return (
		<Container id='about'>
			<div className='about-text'>
				<ScrollAnimation animateIn='fadeInLeft'>
					<h2>About me</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInLeft' delay={0.1 * 1000}>
					<p>
						Hi, I’m Sachin Sharma, a passionate and skilled Full Stack Developer
						with over 3 years of experience in crafting scalable, user-centric
						web applications. Based in Dehradun, Uttarakhand, I specialize in
						cutting-edge technologies like React.js, Next.js, TypeScript, and
						blockchain integration, bringing dynamic and robust solutions to
						life.{' '}
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeInLeft'
					delay={0.2 * 1000}
					style={{ marginTop: '2rem', marginBottom: '2rem' }}
				>
					<p>
						I thrive on building impactful digital experiences, whether it’s
						leading the implementation of micro-frontend architectures,
						developing reusable widgets, or creating seamless payment systems.
						My work reflects a balance between technical expertise, creativity,
						and collaboration.
					</p>{' '}
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeInLeft'
					delay={0.3 * 1000}
					style={{ marginTop: '2rem', marginBottom: '2rem' }}
				>
					<p>
						Some of my notable achievements include spearheading the Kalp Studio
						project, designing a Wallet Widget for versatile integration, and
						contributing to the HUMBL NFT Marketplace. These experiences have
						honed my skills in performance optimization, team collaboration, and
						delivering exceptional results under tight deadlines.
					</p>{' '}
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInLeft' delay={0.4 * 1000}>
					<p>
						When I’m not coding, you’ll find me exploring emerging technologies
						or brainstorming ways to simplify complex systems. I’m always
						excited to tackle new challenges, collaborate with dynamic teams,
						and create the next big thing in tech. Let’s connect and build
						something amazing!
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInLeft' delay={0.5 * 1000}>
					<h3>Here are my main skills:</h3> 
				</ScrollAnimation>
				<div className='hard-skills'>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
							<img src={nextjs} alt='Wordpress' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.12 * 1000}>
							<img src={mongodb} alt='shopify' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.13 * 1000}>
							<img src={reactIcon} alt='React' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.14 * 1000}>
							<img src={typescriptIcon} alt='Typescript' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.15 * 1000}>
							<img src={tailwind} alt='Vue' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.16 * 1000}>
							<img src={nodeIcon} alt='Node' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.17 * 1000}>
							<img src={htmlIcon} alt='Html' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.18 * 1000}>
							<img src={cssIcon} alt='Css' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.19 * 1000}>
							<img src={boostrapIcon} alt='bootstrap' />
						</ScrollAnimation>
					</div>
					<div className='hability'>
						<ScrollAnimation animateIn='fadeInUp' delay={0.19 * 1000}>
							<img src={jsIcon} alt='JavaScript' />
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className='about-image'>
				<ScrollAnimation animateIn='fadeInRight' delay={0.2 * 1000}>
					<img src={Sachin} alt='Sachin Sharma' />
				</ScrollAnimation>
			</div>
		</Container>
	);
}
