const URL = 'https://covid19.mathdro.id/api';

let app = angular.module("MyApp", []);

app.controller("Myctrl", ($scope,$http) => {
  //this is controller
  $scope.title = "Stay Home Stay Safe";

  //calling API
  $http.get(URL).then(
    (response)=>{
    //success
      //console.log(response);
      $scope.all_data = response.data;
    },
    (error)=>{
    //error
    console.log(error);
    }
  );

  //get countries data
  $scope.get_c_data = () => {
     let country = $scope.c;
     if (country == ''){
       $scope.c_data = undefined;
       return;
     }

     //$scope.v = response.data;

     $http.get(`${URL}/countries/${country}`)
     .then(
        (response) => {
          console.log(response.data);
          $scope.c_data = response.data;
        },(error) => {
          console.log(error);
        }
      );
  };
  //countries data

  //timestamp
  

});