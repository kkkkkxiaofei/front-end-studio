import _ from 'lodash';
import './style.css';

const component = () => {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello1111', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());