var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9906",
        "ok": "9906",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1338",
        "ok": "1338",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2741",
        "ok": "2741",
        "ko": "-"
    },
    "percentiles1": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles2": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7224",
        "ok": "7224",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9902",
        "ok": "9902",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 66,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.289",
        "ok": "0.289",
        "ko": "-"
    }
},
contents: {
"shoprandom-267c5": {
        type: "REQUEST",
        name: "shopRandom",
path: "shopRandom",
pathFormatted: "shoprandom-267c5",
stats: {
    "name": "shopRandom",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9906",
        "ok": "9906",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4858",
        "ok": "4858",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3668",
        "ok": "3668",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7100",
        "ok": "7100",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7179",
        "ok": "7179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9901",
        "ok": "9901",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9905",
        "ok": "9905",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.072",
        "ok": "0.072",
        "ko": "-"
    }
}
    },"found-prices-7f93e": {
        type: "REQUEST",
        name: "found-prices",
path: "found-prices",
pathFormatted: "found-prices-7f93e",
stats: {
    "name": "found-prices",
    "numberOfRequests": {
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "726",
        "ok": "726",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "165",
        "ok": "165",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "percentiles3": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles4": {
        "total": "595",
        "ok": "595",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 60,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.217",
        "ok": "0.217",
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
