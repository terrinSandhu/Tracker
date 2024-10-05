document.getElementById('addItemButton').addEventListener('click', () => {
    const name = prompt("Enter name:");
    const dateUpdated = new Date().toLocaleDateString();
    const step = prompt("Enter step:");
    const origin = prompt("Enter origin:");
    const project = prompt("Enter project:");

    if (name && step && origin && project) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${dateUpdated}</td><td>${step}</td><td>${origin}</td><td>${project}</td>`;
        document.querySelector('#partTable tbody').appendChild(row);

        updateCSV(name, dateUpdated, step, origin, project);
    }
});

function updateCSV(name, dateUpdated, step, origin, project) {
    // This function will make use of GitHub API to update the CSV file on the repository
    // Pseudo code below represents this:
    
    // fetch('https://api.github.com/repos/username/repository/contents/data.csv', {
    //     method: 'PUT',
    //     headers: {
    //         'Authorization': 'token YOUR_GITHUB_TOKEN',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         message: 'Update data.csv',
    //         content: btoa(newCSVContent),
    //         sha: existingFileSHA
    //     })
    // })
