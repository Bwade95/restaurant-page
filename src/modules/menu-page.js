const menuPage = () => {
    const mainDiv = document.querySelector('.tab-content');

    const menu = document.createElement('div');
    menu.className = 'menu';
    menu.innerHTML = `<p>TEST</p>`;

    mainDiv.appendChild(menu);
}

export { menuPage }
