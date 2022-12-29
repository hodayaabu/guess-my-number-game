let language = prompt('enter your language');

switch (language) {
    case ('chinese' || 'mandarin'):
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place in number of native speakers');
        break;
    case 'hindi':
        console.log('Number 4 in number of native speakers');
        break;
    case 'arabic':
        console.log('5th most spoken language');
    default:
        console.log('Great language too :D');
}


function checkPopulation(population) {
    return (population > 33000000) ? "Portugal's population is above average." : "Portugal's population is below average."
}

console.log(checkPopulation(3400000000));

function percentageOfWorld1(population, country) {
    let x = population * 100 / 7900;
    console.log(`in ${country}, ther is a ${population} milion popules, witch is ${x}% of the world percentage`);
}

percentageOfWorld1(90, 'usa');

function percentageOfWorld2(population) {
    let x = population * 100 / 7900;
    return x;
}

const population = [30, 567, 999, 90];

if (population.length == 4) {
    console.log(population);
}

const percentages = [
    percentageOfWorld2(population[0]),
    percentageOfWorld2(population[1]),
    percentageOfWorld2(population[2]),
    percentageOfWorld2(population[3])
];

console.log(percentages);

const neighbours = ['Cyprus', 'Egypt', 'Jordan', 'Gaza'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.indexOf('Germany') === -1) {
    console.log('Probably not a central European country :D');
}


if (neighbours.findIndex('Germany') === true) {

}
