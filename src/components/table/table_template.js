const CODES = {
    A: 65,
    Z: 90,
};

function createCell() {
    return `
        <div class="cell" contenteditable="">B2</div>
    `;
}

function createCol() {
    return `
        <div class="column">
            A
        </div>
    `;
}

function createRow(content) {
    return `
        <div class="row">
            <div class="row-info"></div>
            <div class="row-data">${content}</div>
        </div>
`;
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A;
    const rows = [];

    const cols = new Array(colsCount).fill('')

    rows.push(createRow());

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow());
    }
    return rows.join('');
}
