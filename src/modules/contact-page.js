const contactPage = () => {
    const mainDiv = document.querySelector('#tab-content');
    mainDiv.innerHTML = `
    <div class="main-content contact scroll">
        <div id="contact-style">
            <h1>Contact</h1>
            <p><span>Phone: </span> 0808 157 0234</p>
            <p><span>Email: </span> this.is.food@thisisfood.biz.uk</p>
            <p><span>Address: </span> 24 Fake Road, EN32 65IT</p>
        </div>
    </div>`;
}

export { contactPage };