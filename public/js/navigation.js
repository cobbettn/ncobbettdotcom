window.onload = () => {
    const pages = [
        {
            name: "home",
            path: "/",
        },
        {
            name: "work",
            path: "/work.html",
        },
        {
            name: "photos",
            path: "/photos.html",
        },
        {
            name: "contact",
            path: "/contact.html",
        }
    ];
    const { pathname } =  window.location;
    const linkIndex = pages.findIndex((page) => page.path === pathname);
    const navLinks = document.querySelectorAll('nav a');
    navLinks[linkIndex].style.textDecoration = 'underline';
}