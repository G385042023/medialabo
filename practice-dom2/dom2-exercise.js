//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
    // 住所の表示
    let l = document.querySelector('h2#addr');
    let u = document.createElement('p');
    u.textContent = campus.address;
    l.insertAdjacentElement('afterend', u);

    // 学科一覧の表示
    let a = document.querySelector('h2#dept');
    let ul = document.createElement('ul');

    for (let dept of gakka) {
        let li = document.createElement('li');
        li.textContent = dept.name;
        ul.insertAdjacentElement('beforeend', li);
    }

    a.insertAdjacentElement('afterend', ul);
}

let fu = document.querySelector('button#show'); 
fu.addEventListener('click', show); 