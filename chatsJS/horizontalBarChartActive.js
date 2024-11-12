import { sector } from "../databaseFictitious/sector.js";

const horizontalBarChartActive = document
    .querySelector("#horizontalBarChartActive")
    .getContext("2d");

export const objhorizontalBarChartActive = new Chart(horizontalBarChartActive, {
    type: "bar",
    data: {
        labels: sector,
        datasets: [
            {
                label: "Funcionarios Ativos",
                data: [20, 18, 15, 25, 16, 10],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: "y",
    },
});
