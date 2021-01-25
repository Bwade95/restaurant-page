const pageLoad = () => {
    const contentDiv = document.getElementById('content');

    const header = document.createElement('header');
    header.innerHTML = `
    <nav>
        <ol id="navbar">
            <li data-tab-home class="nav-list">Home</li>
            <li data-tab-menu class="nav-list">Menu</li>
            <li data-tab-contact class="nav-list">Contact</li>
        </ol>
    </nav>`;

    const main = document.createElement('main');
    main.id = 'tab-content';

    const footer = document.createElement('footer');
    footer.innerHTML = `
    <nav>
        <h1 id="foot-tag">Test</h1>
    </nav>`;

    contentDiv.appendChild(header);
    contentDiv.appendChild(main);
    contentDiv.appendChild(footer);
}

export { pageLoad };