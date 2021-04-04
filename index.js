import Router from "./Router.js";
import routes from "./routes.js";

const router = new Router(routes);

const home = document.getElementById("home");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");

home.addEventListener("click", () => router.loadRoute(""));
contact.addEventListener("click", () => router.loadRoute("contacto"));
projects.addEventListener("click", () => router.loadRoute("proyectos"));
