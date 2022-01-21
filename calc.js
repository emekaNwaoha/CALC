window.addEventListener("load", function () {
    let w = document.getElementById("delete")
    w.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value.slice(0, -1)
    });
    let l = document.getElementById("bra-close")
    l.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value +")"
    });
    let v = document.getElementById("bra-open")
    v.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "("
    });
    let z = document.getElementById("evaluate()")
    z.addEventListener("click", function (){
    let display = document.getElementById("display")
        display.value = eval(display.value) 
    });
     let f= document.getElementById("minus")
    f.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "-"   
    });
    let u = document.getElementById("divide")
    u.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "/"
    });
    let r = document.getElementById("times")
    r.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "*"
    });
    let q = document.getElementById("zero")
    q.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "0"
    });
    let p = document.getElementById("nine")
    p.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "9"
    });
    let o = document.getElementById("eight")
    o.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "8"
    });
    let m = document.getElementById("seven")
    m.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "7"
    });

    let n = document.getElementById("six")
    n.addEventListener("click", function () {
        let display = document.getElementById
            ("display")
        display.value = display.value + "6"
    });

    let s = document.getElementById("clr")
    s.addEventListener("click", function () {
        let display = document.getElementById
            (" display")
        display.value = display.value + ""
    });

    let t = document.getElementById("five")
    t.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "5"
    });

    let d = document.getElementById("four")
    d.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "4"
    });

    let c = document.getElementById('three');
    c.addEventListener("click", function () {
        let display = document.getElementById
            ("display")
        display.value = display.value + "3"
    });

    let b = document.getElementById("two");
    b.addEventListener("click", function () {
        let display = document.getElementById
            ("display")
        display.value = display.value + "2"
    });

    let i = document.getElementById("decimal");
    i.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "."
    });

    let a = document.getElementById("plus");
    a.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "+"
    });

    let y = document.getElementById("one");
    y.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value = display.value + "1"
    });
});

const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const evaluate = document.getElementById("evaluate")


