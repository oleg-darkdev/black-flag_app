function scrollToAnchor(hash) {
	const id = hash.replace('/#', '');
	const el = document.getElementById(id) || document.querySelector(hash);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
		history.replaceState(null, '', hash);
	}
}

export default scrollToAnchor;
