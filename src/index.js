import _ from 'lodash';
import './style.css';

const component = () => {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hellosss', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());