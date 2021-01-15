const pageLoad = () => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.innerText = 'This Is Food';

    const mainChunk = document.createElement('div');
    mainChunk.setAttribute('id', 'main-chunk');

    const quote = document.createElement('div');
    quote.setAttribute('id', 'quote');
    quote.innerText = 'How food is supposed to be made';

    const test = document.createElement('div');
    test.setAttribute('id', 'test');
    test.innerText = 'test';

    mainChunk.appendChild(test);
    mainChunk.appendChild(quote);
    content.appendChild(mainChunk);
    content.appendChild(header);
}

export default pageLoad;