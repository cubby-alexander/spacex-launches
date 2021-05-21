// Pseudocode
//
// 1) Page Loads -- fetch data from API
// 2) Store resulting data in an array
// 3) Begin rendering HTML objects with content

/*----- constants -----*/
/*----- app's state (variables) -----*/
let launchData;

/*----- cached element references -----*/
const $main = $('main');

/*----- event listeners -----*/

/*----- functions -----*/

function getAppData() {
    $.ajax("https://api.spacexdata.com/v3/launches?limit=9&order=desc").then(function(data) {
        launchData = data
        render();
    });
}
getAppData();

function render() {
    const html = launchData.map((launch) => {
        return `
            <article>
                <p style="margin: 0 10px">${launch.launch_year}</p>
                <h2 style="display:inline-block">${launch.mission_name}</h2>
            </article>
    `
    });
    $main.append(html);
    console.log(launchData);
}