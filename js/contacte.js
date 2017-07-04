function getRow(firstName, lastName, phone) {
    if(phone == undefined) {
        phone = '';
    }
    if(typeof lastName == 'undefined') {
        lastName = '';
    }
    //firstName = firstName || '';

    var row = '<tr><td>' + lastName + '</td><td>' + (firstName || '') + '</td><td>' + phone + '</td></tr>';
    return row;
}
//$ ('#contacts-list tbody')[0].innerHTML = row;

/*var getRow1 = function (firstName, lastName, phone) {
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}*/

var contacte = [
    {firstName: 'Alexandru',lastName: 'Techeres',phone: '0755604181'},
    {firstName: 'Andrei',lastName: 'Popa',phone:'0755604182'},
    {firstName:'Serban',lastName: 'Lupea',phone: '0755604183'},
    {firstName: 'Mihai',lastName: 'Berar',phone: '0755604184'},
    {firstName: 'Andrei'},
    {lastName: 'Basescu'}
];

var person = {
    firstName: "Techeres",
    lastName: "Alexandru",
    age: 29,
    married: true,
    skills: ["html", "css", "js"],
    voicecall: function (nume) {
        console.info('te rog sa suni pe ', nume)
    }
};

    /*kids: [
        {
            firstName:"Techeres",
            lastName: "Alexandra",
            age: 7,
            married: false,
            skills: ["rubiks", "lego"]
        },

        {
            firstName:"Techeres",
            lastName: "Andrea",
            age: 10,
            married: false,
            skills: ["rubiks", "lego"]
        }
    ]*/

console.info(person.firstName);
person.voicecall("Soacra");

var tableContent = '';

for(var i = 0; i < contacte.length; i++) {
    var contact = contacte [i];
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

$("#contacts-list tbody").html(tableContent);

// #contacts-list tbody (color: red) pentru CSS


// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)
