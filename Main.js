let graph = document.getElementById('graph').getContext('2d')

new Chart(graph,{
    type: 'line',
    data: {
         labels: ['5nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [700, 450, 300, 257, 100, 860, 210, 300, 543, 920],
                borderColor: '#592795',

            },
            {
                label: 'BTC',
                data: [400, 250, 500, 257, 400, 260, 210, 200, 343, 120],
                borderColor: '#1970D6',
            },
            {
                label: 'BTC',
                data: [500, 250, 200, 657, 300, 260, 410, 500, 243, 20],
                borderColor: '#4D91A5',
            }
        ],
    }
})