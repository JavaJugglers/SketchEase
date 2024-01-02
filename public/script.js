var currTool = '';

const selectedPencilImg = new Image();
selectedPencilImg.src = 'images/stationaries/selected/pencil.png';

const selectedFinelineImg = new Image();
selectedFinelineImg.src = 'images/stationaries/selected/fineline.png';

const selectedMarkerImg = new Image();
selectedMarkerImg.src = 'images/stationaries/selected/marker.png';

const selectedHighlighterImg = new Image();
selectedHighlighterImg.src = 'images/stationaries/selected/highlighter.png';

const selectedBrushImg = new Image();
selectedBrushImg.src = 'images/stationaries/selected/brush.png';

const selectedEraserImg = new Image();
selectedEraserImg.src = 'images/stationaries/selected/eraser.png';

function changeTool(newTool) {
    currTool = newTool;
}

function selectTool(tool) {
    changeTool(tool);

    const pencilTool = document.getElementById('pencil');
    const finelineTool = document.getElementById('fineline');
    const markerTool = document.getElementById('marker');
    const highlighterTool = document.getElementById('highlighter');
    const brushTool = document.getElementById('brush');
    const eraserTool = document.getElementById('eraser');

    pencilTool.innerHTML = '<img src="images/stationaries/pencil.png" alt="Pencil" class="topbar-image">';
    finelineTool.innerHTML = '<img src="images/stationaries/fineline.png" alt="Fineline Marker" class="topbar-image">';
    markerTool.innerHTML = '<img src="images/stationaries/marker.png" alt="Marker" class="topbar-image">';
    highlighterTool.innerHTML = '<img src="images/stationaries/highlighter.png" alt="Highlighter" class="topbar-image">';
    brushTool.innerHTML = '<img src="images/stationaries/brush.png" alt="Brush" class="topbar-image">';
    eraserTool.innerHTML = '<img src="images/stationaries/eraser.png" alt="Eraser" class="topbar-image">';

    if (tool === 'pencil') {
        pencilTool.innerHTML = '<img src="images/stationaries/selected/pencil.png" alt="Pencil" class="topbar-image">';
    } else if (tool === 'fineline') {
        finelineTool.innerHTML = '<img src="images/stationaries/selected/fineline.png" alt="Fineline Marker" class="topbar-image">';
    } else if (tool === 'marker') {
        markerTool.innerHTML = '<img src="images/stationaries/selected/marker.png" alt="Marker" class="topbar-image">';
    } else if (tool === 'highlighter') {
        highlighterTool.innerHTML = '<img src="images/stationaries/selected/highlighter.png" alt="Highlighter" class="topbar-image">';
    } else if (tool === 'brush') {
        brushTool.innerHTML = '<img src="images/stationaries/selected/brush.png" alt="Brush" class="topbar-image">';
    } else if (tool === 'eraser') {
        eraserTool.innerHTML = '<img src="images/stationaries/selected/eraser.png" alt="Eraser" class="topbar-image">';
    }
}

// Color sliders on mobile

const hueSlider = document.getElementById('hue');
const saturationSlider = document.getElementById('saturation');
const brightnessSlider = document.getElementById('brightness');
const currentColor = document.getElementById('current-color');

hueSlider.addEventListener('input', updateColors);
saturationSlider.addEventListener('input', updateColors);
brightnessSlider.addEventListener('input', updateColors);

updateColors();

function updateColors() {
    const hueValue = hueSlider.value * 3.6;
    const saturationValue = saturationSlider.value;
    const brightnessValue = brightnessSlider.value;

    const saturationColor = `hsl(${hueValue}, 100%, 50%)`;
    const brightnessColor = `hsl(${hueValue}, ${saturationValue}%, 50%)`;
    const currentColorValue = `hsl(${hueValue}, ${saturationValue}%, ${brightnessValue}%)`;

    document.documentElement.style.setProperty('--saturation-color', saturationColor);
    document.documentElement.style.setProperty('--brightness-color', brightnessColor);
    document.documentElement.style.setProperty('--current-color', currentColorValue);

    currentColor.style.backgroundColor = currentColorValue;
}

// Show and hide overlay

function show(id) {
    var element = document.getElementById(id);
    
    if (element.style.display === 'none') {
        element.style.display ='block';
    } else {
        element.style.display ='none';
    }
};
