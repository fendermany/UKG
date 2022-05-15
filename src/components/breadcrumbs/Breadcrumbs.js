import { Link } from 'react-router-dom';

import './breadcrumbs.scss';

const Breadcrumbs = props => {
	return (
		<div className='breadcrumbs'>
			<div className='breadcrumbs__container'>
				<ol
					className='breadcrumbs__list'
					itemScope
					itemType='https://schema.org/BreadcrumbList'
				>
					<li
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/ListItem'
					>
						<Link itemProp='item' to='/'>
							<span className='gold' itemProp='name'>
								Главная
							</span>
						</Link>
						<meta itemProp='position' content='1' />
					</li>
					<li
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/ListItem'
					>
						<span itemProp='item'>
							<span itemProp='name'>{props.page}</span>
						</span>
						<meta itemProp='position' content='2' />
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Breadcrumbs;
