// npm i puppeteer
let puppeteer = require("puppeteer");

// creates headless browser
let browserStartPromise = puppeteer.launch({
    
    // visible
    headless: false,

    // type 1sec
    // slowMo: 1000,

    //----------------------------------
    defaultViewport: null,

    //setting
    args: ["--start-maximized", "--disable-notification"]

});

// // // // // // // // // // // // 1st Method 
// browserStartPromise.then(function (browserObj){

//     console.log("Browser opened");
//     let browserTabOpenPromise = browserObj.newPage();
//     browserTabOpenPromise.then(function (page){
//         console.log("new Tab Opened");

//         let gPageOpenPromise = page.goto("https://www.google.com/");
//         gPageOpenPromise.then(function(){
//             console.log("Google Home Page Opened");
//         });

//     })
    
// });

// // // // // // // // // // // // // // 2nd Method
let page, browser;
browserStartPromise.then(function (browserObj){
    console.log("Browser Opened");
    // new Tab
    browser = browserObj;
    let browserTabOpenPromise = browserObj.newPage();
    return browserTabOpenPromise;
}).then(function (newTab){
    page = newTab;
    console.log("new Tab Opened");
    let ThePageOpenPromise = newTab.goto("https://www.google.com/");
    return ThePageOpenPromise;
}).then(function (){
    console.log("google page opened");
    // keyboard -> From Typing what to search
    let TheWritePromise = page.type("input[title='Search']", "PepCoding");
    return TheWritePromise;
}).then(function (){
    console.log("Press Enetr")
    // keyboard -> To press any tab on the Keyboard
    let ToPressEnterPromise = page.keyboard.press('Enter');
    return ToPressEnterPromise;
}).then(function (){
    // wait for the element to be visible on the page -> whenever we are going to new page
    console.log("Wait for the element");
    let  WaitForElementsPromise = page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
    return WaitForElementsPromise;
}).then( function(){
    // Mouse Function
    console.log("Entering the Element");
    let ElementClickPromise = page.click(".LC20lb.DKV0Md");
    return ElementClickPromise;
}).then(function (){
    console.log("Wating for Advertisement Element -> Add");
    let WaitForAddElementPromise = page.waitForSelector("a[class='close']", {visible: true})
    return WaitForAddElementPromise;
}).then(function (){
    console.log("closing Advertisement");
    let CloseAddPromise = page.click("a[class='close']");
    return CloseAddPromise;
}).then(function (){
    console.log("Going to Resources");
    let ClickResourcesPromise = page.click("a[href='/resources']"); 
    
    // let allElementsPromise = page.$$(".site-nav-li") 
    //return allElementsPromise 
    // .then(function (allElem){ 
        // let promise = allElem[6]click();
    // })
    return ClickResourcesPromise;
// after going to new tabe we need to wait so, we will add 2000 sec
}).then( function (){
    let WaitPromise = page.waitFor(2000);
    return WaitPromise;
})

// ---------------------------From here on we are going to resources page----------------------

.then(function (){
    // New -> Page
    console.log("Opening Resources Page");
    let ResourceTabOpenPromise = browser.pages();
    return ResourceTabOpenPromise;
}).then(function (array){
    let RTab = array[array.length - 1];
    console.log("Waiting for Data Structures and Algorithms in Java Element ")
    let  WatingForCoursePromise = RTab.waitForSelector("h2[title='Data Structures and Algorithms in Java [Level 1 - Foundation]']", {visible: true})
    return WatingForCoursePromise;
}).then( function (RTab){
    console.log("Data Structures and Algorithms in Java Opened")
    let ClickTheCoursePromise = RTab.click("h2[title='Data Structures and Algorithms in Java [Level 1 - Foundation]']");
    return ClickTheCoursePromise;
})


