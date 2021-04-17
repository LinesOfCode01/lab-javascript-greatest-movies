// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    return movies.map(function(find){
        return find.director
    })
}

console.log(getAllDirectors())

// another option for getAllDirectors
// const getAllDirectors = arr => [... new Set(arr.map(a => a.director))];

// another option for getAllDirectors
// function getAllDirectors(arr){
//     let result = arr.map(a => {
//         return a.director
//     });
//     return result;
// }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    return array.filter((element) => {
            return element.director == "Steven Spielberg" && element.genre.includes("Drama")
    }).length
}

console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
    
function ratesAverage(array){        
    if(array.length === 0) return 0;
        
    console.log(array);
    
    let sum = array.reduce((acc, value) => { return acc + value.rate;}, 0);
        return Number((sum/array.length).toFixed(2));
    }

console.log(howManyMovies(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(array){
    const dramaMovies = array.filter((element) => { return element.genre.includes("Drama");})
     return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let copyArray = [...array]
    copyArray.sort((a,b) => {
        if(a.year === b.year){
            if(a.title < b.title){
                return -1
            } else {
                return 1
            }
        }
        return a.year - b.year
    })
    return copyArray
}

// another orderByYear option
// function orderByYear(array){
//     let copyArray = [...array]    
//     copyArray.sort((a,b) => {    
//         return (a.year - b.year) || (a.title.localeCompare(b.title)    
//     )});    
//     return copyArray
// }

console.log(oderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){      
    let newArray = [...arr];    
    newArray.sort(function(a,b){    
        return (a.tile.localeCompare(b.title))    
    })
    
    console.log(newArray)

    let firstTwenty = newArray.slice(0,20).map((a) => { return a.title   
    })
    return firstTwenty
}

console.log(firstTwenty)



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
