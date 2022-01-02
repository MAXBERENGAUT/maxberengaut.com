// via https://stackoverflow.com/questions/19440589/parsing-json-data-from-a-url
function getJSON(url) {
    let resp  = '' ;
    let xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return JSON.parse(resp);
}