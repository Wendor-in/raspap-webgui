var options = {
  // number of columns
  column: 12,
  // max/min number of rows
  maxRow: 12,
  animate: true,
  alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  resizable: {
    handles: 'e, se, s, sw, w, n'
  }
};
var grid = GridStack.init(options);

