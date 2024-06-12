
function changeContent(page) {
    var contentDiv = document.getElementById('content');
 
    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <img src="https://www.openwindow.co.za/">
                <h2>Welcome</h2>
                <p>Main</p>
                <p>Explore</p>
            `;
            break;
        case 'about':
            contentDiv.innerHTML = `
                <h2>About Us</h2>
                <p>Team Purpose</p>
                <p>Passionate</p>
            `;
            break;
 
        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}

