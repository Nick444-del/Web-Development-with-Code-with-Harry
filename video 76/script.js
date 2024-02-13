console.log("Hello world!");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Hello world!");
    document.head.append(sc);
}

loadScript("https://code.jquery.com/jquery-3.7.1.slim.js", callback);