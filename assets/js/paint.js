function configureListeners() {
    // Make an array of image IDs
    const images = ['pn1', 'pn2', 'pn3', 'pn4', 'pn5', 'pn6', 'pn7', 'pn8', 'pn9'];

    // Iterate over images and add mouseover and mouseout event listeners
    for (let i = 0; i < images.length; i++) {
        let image = document.getElementById(images[i]);
        image.addEventListener('mouseover', addOpacity);
        image.addEventListener('mouseout', removeOpacity);
    }
}

function addOpacity(event) {
    // Add the 'dim' CSS class to the hovered image
    event.target.classList.add('dim');
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    // Remove the 'dim' CSS class from the image when the mouse moves out
    event.target.classList.remove('dim');

    // Clear the color name and price info
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = '';

    let colorName = document.getElementById('color-name');
    colorName.textContent = '';
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            price = "$14.99";
            colorName = "Lime Green";
            break;
        case 'pn2':
            price = "$11.14";
            colorName = "Medium Brown";
            break;
        case 'pn3':
            price = "$22.99";
            colorName = "Royal Blue";
            break;
        case 'pn4':
            price = "$4.99";
            colorName = "Solid Red";
            break;
        case 'pn5':
            price = "$8.22";
            colorName = "Solid White";
            break;
        case 'pn6':
            price = "$11.99";
            colorName = "Solid Black";
            break;
        case 'pn7':
            price = "$13.42";
            colorName = "Solid Cyan";
            break;
        case 'pn8':
            price = "$21.98";
            colorName = "Solid Purple";
            break;
        case 'pn9':
            price = "$14.99";
            colorName = "Solid Yellow";
            break;
        default:
            price = "";
            colorName = "";
    }

    // Call the updatePrice function to display the price and color name
    updatePrice(colorName, price);
}

function updatePrice(colorName, price) {
    // Select elements with corresponding IDs
    const colorPrice = document.getElementById('color-price');
    const color = document.getElementById('color-name');

    // Display the price and color name
    colorPrice.textContent = `Price: ${price}`;
    color.textContent = `Color: ${colorName}`;
}
