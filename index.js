let elsoSzamjegySzovege = ""        // változót letrehoztuk es beallitottuk az erteket ures szovegre
let masodikSzamjegySzovege = ""     // változót letrehoztuk es beallitottuk az erteket ures szovegre
let muvelet = ""

let szamok = document.getElementsByClassName("szam")        //megfogjuk a szam classnevvel ellatott elemeket - eredemenye lista
let fosok = document.getElementsByClassName("fos")          //lista//
let kiiro = document.getElementById("kiirato")
const egyenlo = document.getElementById("egyenlo")
console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    szamok[index].addEventListener("click", beir)
}

function beir(event){
    /*input mezobe irja be a szamokat amikre kattintunk
    Mi jelenti a szamot?*/
    console.log(event.target)
    console.log(event.target.textContent)

    kiiro.value += event.target.textContent        /*input elembe beleirja annak az erteket amit az event target textcontentbe van*/
    //kiiro elem egy input elem, ezeert valueja van!//
}

/* ha rakattintunk egy muveleti jelre:
1. mentsuk el az inputelem tartalmat az elsoSzamjegySzovege valtozobe
2.A muveleti jeleket mentsuk el muvelet valtozoba
3.Toroljuk ki az inputelem tartalmat*/

for (let index = 0; index < fosok.length; index++) {
    fosok[index].addEventListener("click", muveletElvegzese)
}

function muveletElvegzese(event){
    elsoSzamjegySzovege=kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent)
    muvelet = event.target.textContent
    kiiro.value = ""
}

/*egyenloseg jel mukodese
1. ha rakattintok az egyenlosegre;
2. akkor a masodikSzamjegySzovege mentsuk el az input mezo tartalmat
3. vegezzuk el a muveletet az elsoSzamjegySzovege es a masodikSzamjegySzovege kozott
4.az eredmenyt irjuk ki az input elembe*/

egyenlo.addEventListener("click", szamolas)

function szamolas(){
    masodikSzamjegySzovege=kiiro.value
    let eredmeny = 0
    if (muvelet=="+"){
        eredemeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    if (muvelet=="-"){
        eredmeny = Number(elsoSzamjegySzovege) - Number(masodikSzamjegySzovege)
    }
    if (muvelet=="*"){
        eredmeny = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    if (muvelet=="/" && masodikSzamjegySzovege != "0"){
         eredmeny = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }


    kiiro.value = eredmeny
}


const torles = document.getElementById("torles")

torles.addEventListener("click", kitorles)

function kitorles(){
    kiiro.value == ""
    elsoSzamjegySzovege = ""
    masodikSzamjegySzovege = ""
}