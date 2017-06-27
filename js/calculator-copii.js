/**
 * Created by techeresalexandru on 20/06/2017.
 */
function catFacAdunareaNumerelor (a, b) {

    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    }
    console.info("numarul cel mai mare este " + max);
    console.info("vom numara " + min + " degetele");

    //forme de a scrie aceeasi sintaxa
    //min = min - 1;
    //min -= 1;
    //min += -1;
    //min--;

    for(min-- ; min >= 0 ; min--) {
        //aici vrem sa numaram
        max++;
        console.info("Au ramas " + min + " degetele, au ramas de numarat " + max + " degetele");
    }

    return max;
}

var rezultat;

console.info(rezultat);

rezultat = catFacAdunareaNumerelor(3, 5);
console.info(rezultat);

rezultat = catFacAdunareaNumerelor(7, 2);
console.info(rezultat);

//wrong var names (check online)
