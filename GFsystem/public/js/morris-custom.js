// First Donut chart on Dashboard
function initDonut(){
    console.log(Morris)
    Morris.Donut({
        element: "donut",
        //resize:true,
        data: [ {
            value: 30,
            label: "综合效率"
        }, {
            value: 15,
            label: ""
        }],
        formatter: function(e) {
            return e + "%";
        }
    }).on("click", function(e, t) {
        console.log(e, t);
    });

    Morris.Donut({
        element: "coloredDonut",
        //resize:true,
        data: [ {
            value: 60,
            label: "计划完成率"
        }, {
            value: 60,
            label: ""
        }],
        labelColor: "#54728c",
        colors: [ "#90c657", "#54728c", "#54b5df", "#f9a94a", "#e45857" ],
        formatter: function(e) {
            return e + "%";
        }
    });


}






