var c;

const resize = () => {
    c.width = window.innerWidth - 3 - getScrollbarWidth();

    let lineHeight = 16;
    let padding = 8;
    var ctx = c.getContext("2d");

    let hasTitle = c.width > 380;
    let yStart = padding + (lineHeight * 2);
    if (!hasTitle) {
        yStart = padding;
    }
    let xStart = padding;
    let contentWidth = 100 + padding;
    let contentMax = c.width - (padding * 3) + getScrollbarWidth(); // extra right padding + 1 for scolling bar
    let columnCount = Math.floor(contentMax / contentWidth);
    let contentHeight = (lineHeight * 2.5) + contentWidth;
    let rowCount = Math.ceil(characterNodeList.length / columnCount);
    
    c.height = yStart + (rowCount * contentHeight);

    if (hasTitle) {
        ctx.textAlign = "center";
        ctx.font = "bold 16px Arial";
        let titleText = "Zocchihedron Characters Index";
        if (extended == 'true') {
            titleText = "Zocchihedron x Detective Company";
        }
        ctx.fillText(titleText, c.width / 2, padding + lineHeight);
    }

    ctx.textAlign = "left";

    if (filterBy != null) {
        ctx.font = "bold 8px Arial";
        ctx.fillStyle = 'blue';
        ctx.fillText("Blue = AI", padding, padding + lineHeight);

        ctx.fillStyle = 'red';
        ctx.fillText("Red = Deprecate", padding + 32 + padding, padding + lineHeight);
        ctx.font = "bold 16px Arial";
    }

    characterNodeList.forEach((node, index) => {
        let row = Math.floor((index) / columnCount);
        let column = index % columnCount;
        let _yStart = yStart + (contentHeight * row);
        let _xStart = xStart + (contentWidth * column);

        // if(column == 0) {
        //     let baseLine = _yStart + (lineHeight * 3) + 100 + 2;
        //     let toX = _xStart + (columnCount * contentWidth);
        //     ctx.beginPath();
        //     ctx.moveTo(_xStart, baseLine);
        //     ctx.lineTo(toX, baseLine);
        //     ctx.stroke();
        // }

        let strDataURI = node.imageUrl;

        var img = new Image;
        img.onload = function () {
            ctx.drawImage(img, _xStart, _yStart); // Or at whatever offset you like
        };
        img.src = strDataURI;

        ctx.fillStyle = 'black';

        if(sortBy == 'power' || show == 'power') {
            ctx.font = "bold 10px Arial";

            ctx.textAlign = "left";
            let powerPrefixString = getPowerPrefixString(node.power);
            ctx.fillText(powerPrefixString, _xStart, _yStart + 100 + lineHeight);
            
            ctx.textAlign = "right";
            ctx.fillStyle = getPowerColor(node.power);
            let powerString = getSemiFullPowerString(node.power);
            let powerXStart = _xStart + (contentWidth - padding);
            ctx.fillText(powerString, powerXStart, _yStart + 100 + lineHeight);

            ctx.textAlign = "left";
        } else {
            ctx.font = "bold 14px Arial";
            let indexString = node.id.toString().padStart(3, '0');
            ctx.fillText(indexString, _xStart, _yStart + 100 + lineHeight);
        }
        
        if (node.deprecated) {
            ctx.fillStyle = 'red';
        } else if (node.ai) {
            ctx.fillStyle = 'blue';
        } else {
            ctx.fillStyle = 'black';
        }
        ctx.font = "11px Arial";
        ctx.fillText(node.name, _xStart, _yStart + 100 + (lineHeight * 2));
    })
}

$(() => {
    c = document.querySelector("canvas");
    resize()
    window.addEventListener('resize', resize);
})