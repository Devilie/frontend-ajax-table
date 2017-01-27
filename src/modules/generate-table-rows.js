'use strict';

function tableHeaders() {
    return `<tr>
                <th>Фото</th>
                <th>Полное имя</th>
                <th>Активный</th>
                <th>Описание</th>
                <th>Баланс</th>
                <th>Возраст</th>
                <th>Дата регистрации</th>
                <th>Компания</th>
                <th>Емейл</th>
                <th>Номер телефона</th>
                <th>Адрес</th>
            </tr>`;
}

function tableRow(user) {
    return `<tr>
                <td><img src="${user.picture}" alt=""></td>
                <td>${user.name.first} ${user.name.last}</td>
                <td>${user.isActive}</td>
                <td>${user.about}</td>
                <td>${user.balance}</td>
                <td>${user.age}</td>
                <td>${user.registered}</td>
                <td>${user.company}</td>
                <td><a href="mailto:${user.email}">${user.email}</a></td>
                <td><a href="tel:${user.phone}"> ${user.phone}</a></td>
                <td>${user.address}</td>
            </tr>`;
}

function tableRowsGenerator(usersData) {
    var tableRows = tableHeaders();
    tableRows += usersData.map(tableRow);
    return tableRows;
}

module.exports = tableRowsGenerator;