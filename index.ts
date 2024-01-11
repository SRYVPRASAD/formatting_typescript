// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/* Any format ex: helloWorld or hello_world  */
function ToTitleCase(input: string): string {
  const capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
  const underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
  return underscoresToSpaces
    .split(' ')
    .map((p) => p.charAt(0).toUpperCase() + p.substring(1).toLowerCase())
    .join(' ');
}

// Example usage and display output
// Example 1
const example1 = 'all lower case with spaces';
const output1 = ToTitleCase(example1);

// Example 2
const example2 = 'snake_case_example';
const output2 = ToTitleCase(example2);

// Example 3
const example3 = 'ALL UPPERCASE WITH SPACES ';
//change the example 3 to lower
const output3 = ToTitleCase(example3.toLowerCase());

// Example 4
const example4 = 'ALL_UPPERCASE_WITH_SNAKE_CASE ';
//change the example 3 to lower
const output4 = ToTitleCase(example3.toLowerCase());

// Example 5
const example5 = 'camelCaseExample';
const output5 = ToTitleCase(example5);

// Display the output in the HTML document
appDiv.innerHTML += `<h3>Formatting function "To Title Case" </p>`;

appDiv.innerHTML += `<p><b>Input: </b>${example1} </br> <b>Output:</b> ${output1}</p> </br>`;
appDiv.innerHTML += `<p><b>Input: </b>${example2} </br> <b>Output:</b> ${output2}</p> </br>`;
appDiv.innerHTML += `<p><b>Input: </b>${example3} </br> <b>Output:</b> ${output3}</p> </br>`;
appDiv.innerHTML += `<p><b>Input: </b>${example4} </br> <b>Output:</b> ${output4}</p> </br>`;
appDiv.innerHTML += `<p><b>Input: </b>${example5} </br> <b>Output:</b> ${output5}</p> </br>`;

function convertSnakeCase(str: string) {
  return str
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());
}

function convertKebabCase(string: string) {
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.join('-')
    .toLowerCase();
}
