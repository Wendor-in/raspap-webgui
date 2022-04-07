var options = {
    column: 12,
    maxRow: 12,
    minRow: 1, // prevent grid from collapsing when empty
    animate: true,
    alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    resizable: {
        handles: 'e, se, s, sw, w, n'
    }
};

var grid = GridStack.init(options);

// Save to LocalStorage
grid.on('change', function (event, items) {
    var serializedData = grid.save();
    localStorage.setItem("grid-layout", JSON.stringify(serializedData, null, ' '));
});

// Load from LocalStorage
loadGrid = function() {
    if (serializedData = localStorage.getItem("grid-layout")) {
        grid.removeAll();
        grid.load(JSON.parse(serializedData), true);
    }
}

loadGrid();
