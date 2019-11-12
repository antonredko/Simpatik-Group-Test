const diplomLink = document.getElementsByClassName('diplomView')[0].
                            getElementsByTagName('a')[0];

diplomLink.addEventListener('click', showDiplom);

function showDiplom(e) {
    e.preventDefault();
    for(i = 0; i < document.body.children.length; i += 1) {
        document.body.children[i].style.display = 'none';
    }
    let image = document.createElement('img');
        image.setAttribute('src', 'img/diplom.jpg');
        image.style.margin = '0 auto';
        image.style.width = '100%';
        image.style.height = '100%';
    let close = document.createElement('a');
        close.innerText = 'Закрити (X)';
        close.href = 'index.html';
        close.style.textDecoration = 'none';
        close.style.color = '#000000';
    document.body.style.textAlign = 'center';
    document.body.style.paddingTop = '20px';
    document.body.appendChild(close);
    document.body.appendChild(image);
    
}