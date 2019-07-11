$(function() {
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'มค',
            a: 100
        }, {
            y: 'กพ',
            a: 75
        }, {
            y: 'มีค',
            a: 50
        }, {
            y: 'เมษ',
            a: 75
        }, {
            y: 'พค',
            a: 50
        }, {
            y: 'มิย',
            a: 25
        },  {
            y: 'กค',
            a: 15
        },  {
            y: 'สค',
            a: 35
        },  {
            y: 'กย',
            a: 85
        },  {
            y: 'ตค',
            a: 35
        },   {
            y: 'พย',
            a: 65
        }, {
            y: 'ธค',
            a: 100
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        hideHover: 'auto',
        resize: true
    });
    
});
