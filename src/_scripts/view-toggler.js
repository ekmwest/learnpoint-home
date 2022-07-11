var data = {
	isList: false,
	groups: [],
	searchQuery: ""
};

const getGroups = async () => {
	const response = await fetch('/groups.json');
	const data = await response.json();
	console.log(data); 
	return data.groups; 
};
  

const pageInit = async () => {
	data.isList = getStateFromLocalStorage();
	data.groups = await getGroups();
	render();
}

function template(props) {
	return `
		<button onclick="toggleListView()" class="home__view-toggler">
			${props.isList ? "View as a grid" : "View as a list"}   
		</button>
		${props.searchQuery !== "" ?
			`<div class="home__groups ${props.isList ? "LIST-VIEW" : ""}">
			${props.groups.filter(group =>
				group.name.toLowerCase().includes(props.searchQuery.toLowerCase())
			).map(group => (
				`<div class="home__groups-item">
					<a href="/_pages/group-home.html">${group.name}</a>
					<p>${group.code}</p>
				</div>`
			)).join('')}
		</div>` :
			`<div class="home__groups ${props.isList ? "LIST-VIEW" : ""}">
			${props.groups.map(group => (
				`<div class="home__groups-item">
					<a href="/_pages/group-home.html">${group.name}</a>
					<p>${group.code}</p>
				</div>`
			)).join('')}
		</div>`
		}`
}

function render() {
	document.querySelector('#app').innerHTML = template(data);
}

function toggleListView() {
	data.isList = !data.isList;
	setStateInLocalStorage();
	render();
}

function setStateInLocalStorage() {
	window.localStorage.setItem('listView', data.isList);
}

function getStateFromLocalStorage() {
	if (localStorage.getItem("listView") !== null) {
		return JSON.parse(localStorage.getItem("listView"));
	}
	return false;
}

const search_input = document.getElementById('search');
document.addEventListener('input', e => {
	searchQuery = e.target.value;
	data.searchQuery = searchQuery;
	render();
});

document.addEventListener('DOMContentLoaded', pageInit)
