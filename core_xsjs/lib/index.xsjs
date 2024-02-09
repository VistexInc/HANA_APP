// $.import("ECM.AppConfig","AppConfig");
// $.import("ECM.ConnectorSL","ConnectorSL");
 
 
 var query = 'SELECT * FROM /VUI/TBNUPHDF WHERE MANDT = 500';
 
 function showData(){
   var conn = $.hdb.getConnection();
   var rs = conn.executeQuery(query);
  
 	$.response.contentType = "application/json;charset=UTF-8";
 	$.response.setBody( JSON.stringify(rs,null,2) );
 	$.response.status = $.net.http.OK; 
 	conn.close();	
 }
 
 try{
 	showData();
 }catch(e){    
 	$.response.contentType = "text/plain";
 	$.response.setBody(e.message);
 }