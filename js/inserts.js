function insertText(parent, tag, text, ...classname){
    let titem_c = document.createElement(tag);
    parent.appendChild(titem_c);
    titem_c.innerText = text;
    if (arguments.length>3) {titem_c.classList.add(...classname)};
}

function insertDiv(parent,...classname){
    let titem_c = document.createElement('div');
    parent.appendChild(titem_c);
    if (arguments.length>1){titem_c.classList.add(...classname)};
    return titem_c;
}

function insertButton(parent, text, onClickHRef, ...classname){
    let titem_c = document.createElement('button');
    parent.appendChild(titem_c);
    titem_c.innerText = text;
    if (arguments.length>3) {titem_c.classList.add(...classname)};
    titem_c.onclick = function (){
        window.location.href = onClickHRef;
    }
}