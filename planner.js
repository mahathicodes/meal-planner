function generateBreakfast(){
    var dict ={
        1: 'Cereal',
        2: 'Noodles',
        3: 'Toast',
        4: 'Bread + Egg',
        5: 'Granola'
    };
    var sundayb = document.getElementById('sunb');
    var mondayb = document.getElementById('monb');
    var tuesdayb = document.getElementById('tueb');
    var wednesdayb = document.getElementById('wedb');
    var thursdayb = document.getElementById('thub');
    var fridayb = document.getElementById('frib');
    var saturdayb = document.getElementById('satb');

    sundayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    mondayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    tuesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    wednesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    thursdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    fridayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    saturdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
}

function generateLunch(){
    var dict ={
        1: 'Grilled Cheese',
        2: 'Mac & Cheese',
        3: 'Pasta',
        4: 'Paneer Butter Masala',
        5: 'Order Out',
        6: 'Fried Rice',
        7: 'Chicken Wrap',
        8: 'Sandwich'
    };
    var sundayb = document.getElementById('sunl');
    var mondayb = document.getElementById('monl');
    var tuesdayb = document.getElementById('tuel');
    var wednesdayb = document.getElementById('wedl');
    var thursdayb = document.getElementById('thul');
    var fridayb = document.getElementById('fril');
    var saturdayb = document.getElementById('satl');

    sundayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    mondayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    tuesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    wednesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    thursdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    fridayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    saturdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
}

function generateDinner(){
    var dict ={
        1: 'Salmon',
        2: 'Bread',
        3: 'Pasta',
        4: 'Paneer Butter Masala',
        5: 'Order Out',
        6: 'Fried Rice',
        7: 'Chicken Wrap',
        8: 'Sandwich'
    };
    var sundayb = document.getElementById('sund');
    var mondayb = document.getElementById('mond');
    var tuesdayb = document.getElementById('tued');
    var wednesdayb = document.getElementById('wedd');
    var thursdayb = document.getElementById('thud');
    var fridayb = document.getElementById('frid');
    var saturdayb = document.getElementById('satd');

    sundayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    mondayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    tuesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    wednesdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    thursdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    fridayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
    saturdayb.innerHTML = dict[Math.floor((Math.random() * Object.keys(dict).length) + 1)];
}