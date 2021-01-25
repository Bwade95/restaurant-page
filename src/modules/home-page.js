const homePage = () => {
    const mainDiv = document.querySelector('#tab-content');
    mainDiv.innerHTML = `
    <div class="home">
        <h1>This is Food</h1>
    </div>`;
}

export { homePage };