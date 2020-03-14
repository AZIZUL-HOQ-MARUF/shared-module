
(function(window){
    var apiUrl = 'http://'+window.location.hostname+':8585';
    window.apiUrl= window.apiUrl || null;
    window.apiUrl = apiUrl;
    console.log(window);

}(this));