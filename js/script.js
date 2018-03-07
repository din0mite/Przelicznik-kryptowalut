window.onload = function () {


    var btn = $('#result');




    btn.click(function () {

        var value1 = $('#val1');


        var result = calculate(value1);
        $('#endresult').text(result);




    })


    function calculate(vale) {

        var ans1 = $('#first').val();
        var ans2 = $('#second').val();
        var course = {
            usd: 3.3819,
            btc: 20,
            pln: 0.29424
        }

        switch (ans1) {

            case 'pln':
                return vale.val() / course[ans2];

                break;


            case 'usd':
                return vale.val() / course[ans2];
                break;

            case 'btc':

                break;


        }



    }


}
