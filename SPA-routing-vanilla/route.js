var routes = {
  '/': home,
  '/about': about,
  '/contact': contact
};

var root = document.getElementById('root');

root.innerHTML = routes[window.location.pathname];


let onNavItemClick = (pathName) => {
  window.history.pushState(
    {}, 
    pathName,
    window.location.origin + pathName
  );
  root.innerHTML = routes[pathName];
}

window.onpopstate = () => {
  root.innerHTML = routes[winodw.location.pathname];
}