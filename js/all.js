var app = angular.module("toadyTopic", []);
app.controller("firstTask", function ($scope,$location) {
    // $scope.name = "MALLIKARJUNA";
    // $scope.noteBook = 75;

    $scope.data = [
        {
            name:"sachin",
            age:46,
            state:"mumbai"
        },
        {
            name:"dhoni",
            age:38,
            state:"ranchi"
        },
        {
            name:"virat kohli",
            age:30,
            state:"delhi"
        },
        {
            name:"yuvaraj",
            age:37,
            state:"chandigarh"
        },
        {
            name:"rohit sharma",
            age:23,
            state:"nagpur"
        },
        {
            name:"suresh raina",
            age:23,
            state:"uttar pradesh"
        },
        {
            name:"dinesh karthik",
            age:34,
            state:"thiruchendur"
        },
        {
            name:"kl rahul",
            age:27,
            state:"karnataka"
        },
        {
            name:"hardik pandya",
            age:25,
            state:"surat"
        },
        {
            name:"kuldeep yadav",
            age:24,
            state:"kanpur"
        },
        {
            name:"ravichandran aswin",
            age:33,
            state:"tamilnadu"
        }
    ]
    $scope.animals=["cat","rat","dog","monkey"];
    $scope.myUrl=$location.absUrl();
});