var mysql = require("mysql");


var connexionMySQL = mysql.createConnection({ 
   host     : "localhost", 
   user     : "root", 
   password : "", 
   database : "sizar"
}); 
var requeteSQL = "SELECT Id,Name,Description,Src,Prix from plates";

var save=function(plate){
	
	var sql = `INSERT INTO plates(Name,Description,Src,Prix) VALUES (?, ?,?,?)`;
  connexionMySQL.query(sql, [plate.Name,plate.Description,plate.Src,plate.Prix],function(err, result) {
    if (err) throw err;
    console.log('record inserted');
  });

}
var update=function(plate){
	
	var sql = `UPDATE plates set Name=?,Description=?,Src=?,Prix=? WHERE id=?`;
  connexionMySQL.query(sql, [plate.Name,plate.Description,plate.Src,plate.Prix,plate.Id],function(err, result) {
    if (err) throw err;
    console.log('record inserted');
  });

}
var DeleteId=function(req,res){
	
	connexionMySQL.query("DELETE FROM Plates WHERE Id = " + req.params.id,
    function (err, result) {
      if (err) {
        res.redirect('/')
      } else {
        res.redirect('/')
      }
    }
  ) 	
}

var getALL=function(resolve, reject){
        
          connexionMySQL.query(requeteSQL, function (err, result, fields) {
            if (err) throw err;
              resolve(result);
          });
        
    };
	
var to_export={
	Delete:DeleteId,
	GetAll:getALL,
	save:save,
	update:update
};

module.exports = to_export

