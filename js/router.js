// Router
const routes = [
    { path: '/', component: HomeComponent},
    { path: '/about', component: AboutComponent} ,
    { path: '/contact', component: ContactComponent }
];

const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/';

const findComponentByPath = (path, routes) => routes.find( r => r.path.match(new RegExp(`^\\${path}$`, 'gm')) ) || undefined;


const router = () => {
    const path = parseLocation(); // Obtener el path de la pagina

    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

    $('#app').html(component.render());
};