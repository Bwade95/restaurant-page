const pageLoad = () => {
    const contentDiv = document.getElementById('content');

    const header = document.createElement('header');
    header.innerHTML = `
    <nav>
        <ol id="navbar">
            <li class="nav-list home">Home</li>
            <li class="nav-list menu">Menu</li>
            <li class="nav-list contact">Contact</li>
        </ol>
    </nav>`;

    const footer = document.createElement('footer');
    footer.innerHTML = `
    <nav>
        <h1 id="foot-tag">Test</h1>
    </nav>`;

    contentDiv.appendChild(header);
    contentDiv.appendChild(footer);
}

export default pageLoad;