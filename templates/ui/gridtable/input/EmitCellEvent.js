var EmitCellEvent = function (eventEmitter, eventName, table, x, y, pointer) {
    var cellIndex;
    if (y === undefined) {
        cellIndex = x;
    } else {
        cellIndex = table.pointToCellIndex(x, y);
    }
    if ((cellIndex === null) || (cellIndex === undefined)) {
        return;
    }
    var cellContainer = table.getCellContainer(cellIndex);
    eventEmitter.emit(eventName, cellContainer, cellIndex, pointer);
}

export default EmitCellEvent;