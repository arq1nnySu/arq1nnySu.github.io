var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "206",
        "ok": "206",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26859",
        "ok": "26859",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "866",
        "ok": "866",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3929",
        "ok": "3929",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles3": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26012",
        "ok": "26012",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 198,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.551",
        "ok": "5.551",
        "ko": "-"
    }
},
contents: {
"index-6a992": {
        type: "REQUEST",
        name: "index",
path: "index",
pathFormatted: "index-6a992",
stats: {
    "name": "index",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24446",
        "ok": "24446",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26859",
        "ok": "26859",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "25730",
        "ok": "25730",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26053",
        "ok": "26053",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26057",
        "ok": "26057",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26698",
        "ok": "26698",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26826",
        "ok": "26826",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.135",
        "ok": "0.135",
        "ko": "-"
    }
}
    },"json-466de": {
        type: "REQUEST",
        name: "json",
path: "json",
pathFormatted: "json-466de",
stats: {
    "name": "json",
    "numberOfRequests": {
        "total": "201",
        "ok": "201",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2346",
        "ok": "2346",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "percentiles3": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1245",
        "ok": "1245",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 198,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.416",
        "ok": "5.416",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
