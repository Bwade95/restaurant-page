const homePage = () => {
    const mainDiv = document.querySelector('.tab-content');

    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = `<h1>This Is Food</h1>`

    mainDiv.appendChild(title);
}

export { homePage };