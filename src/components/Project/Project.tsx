import { Container } from './styles';
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export function Project() {
	return (
		<Container id='project'>
			<h2>Featured Projects</h2>
			<div className='projects'>
				<ScrollAnimation animateIn='flipInX'>
					<div className='project'>
						<header>
							<svg
								width='50'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#E2875A'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								{' '}
								<title>Folder</title>{' '}
								<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>{' '}
							</svg>
							<div className='project-links'>
								<a
									href='https://console.kalp.studio'
									target='_blank'
									rel='noreferrer'
								>
									<img src={externalLink} alt='Visit site' />
								</a>{' '}
							</div>
						</header>
						<div className='body'>
							<h3>Kalp Studio: Empowering Web3 Development</h3>
							<p>
								{' '}
								Kalp Studio is a cutting-edge web3 platform designed to
								streamline blockchain development by enabling users to interact
								seamlessly with crypto wallets. The platform allows developers
								to deploy smart contracts, access APIs for smart contract
								methods, and create custom tokens, all within an intuitive
								interface. Built on a scalable microfrontend architecture, Kalp
								Studio ensures modularity and flexibility, making it a robust
								solution for blockchain-based development needs.
							</p>
						</div>
						<footer>
							{' '}
							<ul className='tech-list'>
								{' '}
								<li>React JS</li> <li>Micro-frontend</li> <li>Blockchain</li>{' '}
							</ul>{' '}
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='flipInX'>
					<div className='project'>
						<header>
							<svg
								width='50'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#E2875A '
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<title>Folder</title>{' '}
								<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>{' '}
							</svg>
							<div className='project-links'>
								<a
									href='https://app.myipr.io/login'
									target='_blank'
									rel='noreferrer'
								>
									<img src={externalLink} alt='Visit site' />
								</a>
							</div>
						</header>
						<div className='body'>
							<h3>MyIPR: Protecting Intellectual Investments</h3>
							<p>
								MyIPR is the world’s first Intellectual Property Rights
								Management Cloud, designed to simplify the management of
								intellectual property rights and streamline the copyright
								infringement process. By leveraging a robust and secure
								distributed ledger system, MyIPR ensures seamless registration
								and protection of intellectual property, safeguarding it from
								unauthorized usage and misuse.{' '}
							</p>
						</div>
						<footer>
							<ul className='tech-list'>
								<li>React JS</li>
								<li>Bootstrap</li>
								<li>Blockchain</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='flipInX'>
					<div className='project'>
						<header>
							<svg
								width='50'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#E2875A'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<title>Folder</title>
								<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
							</svg>
							<div className='project-links'>
								<a
									href='https://niftiq.io/'
									target='\_blank'
									rel='noreferrer'
								>
									<img src={externalLink} alt='Visit site' />
								</a>
							</div>
						</header>
						<div className='body'>
							<h3>NiftiQ: The Digital Art Marketplace</h3>
							<p>
								NiftiQ is the ultimate destination for digital art and artists,
								fostering access to and ownership of rare, unique, and quirky
								digital assets. Powered by KALP, an industry-leading blockchain
								technology, NiftiQ offers a trusted marketplace supported by a
								vibrant global community of creators and enthusiasts. With
								programmable fiat currency integration, NiftiQ ensures seamless
								transactions, making digital art ownership more accessible than
								ever.
							</p>
						</div>
						<footer>
							<ul className='tech-list'>
								<li>Next JS</li>
								<li>ethers.js</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
