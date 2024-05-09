fetch("https://65f21a60034bdbecc7645dc8.mockapi.io/facens/aluno/sla")
    .then((response) => response.json())
    .then((data) => {

        let tb = document.getElementById("here");

        for (let i = 0; i < data.length; i++) {

            let tr = document.createElement("tr");
            let obj = data[i];

            for (const atributes in obj) {
                if (Object.hasOwnProperty.call(obj, atributes)) {
                    let td = document.createElement("td");
                    td.innerHTML = obj[atributes];
                    tr.appendChild(td);
                }
            }
            tb.appendChild(tr);
        }

    });

