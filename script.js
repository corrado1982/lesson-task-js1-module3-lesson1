//Question 1



const menuIsOpen = " ";

if (menuIsOpen) {
    console.log("truly");
} else {
    console.log("falsy")};

    //qustion 2

    // platforms=4
    // &genres=action
    // &publishers=354


//Question 3

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

async function getCatFacts(){

    const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

    const response = await fetch(url);

    const results = await response.json();

    //const toLog = results.length;

    console.log(results.length);

}

getCatFacts();
