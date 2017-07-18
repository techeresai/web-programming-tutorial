function getRow(contact) {
    //if(phone == undefined//) {
    //    phone = '';
    //}
    //if(typeof lastName == 'undefined') {
    //    lastName = '';
    //}
    var id = contact.id || '';
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';
    var phone = contact.phone || '';

    var row = '<tr><td>' + lastName + '</td><td>' + (firstName || '') + '</td><td>' + phone + '</td>' + '' +
            '<td class ="actions">'+
                '<span><a href="date/remove.html?id=' + id + '"> &#10008 </a></span>'+
                '<span><a href="#"> &#9998 </a></span>'+
        '</td>' +
        '</tr>';
    return row;
}
//$ ('#contacts-list tbody')[0].innerHTML = row;

/*var getRow1 = function (firstName, lastName, phone) {
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}*/


var person = {
    firstName: "Techeres",
    lastName: "Alexandru",
    age: 29,
    married: true,
    skills: ["html", "css", "js"]
    //voicecall: function (nume) {
        //console.info('te rog sa o suni pe ', nume)
    //}
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

//console.info(person.firstName);
//person.voicecall("Soacra");

var tableContent = '';


/*for(var i = 0; i < contacte.length; i++) {
    createRow(contacte[i]);
}*/

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/contacte.json').done(function(contacte){
    console.info('contacte ', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
});



/*function pentruToateContacteleExecuta () {
    console.info('am executat ');
}*/



// #contacts-list tbody (color: red) pentru CSS


// 1. convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)
