
let express =require('express')
var app = express();
var mysql = require("mysql");
var DAO = require('getMenu.js');

app.set('view engine', 'ejs')
bodyParser = require('body-parser')
var session = require('express-session')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


app.get('/',(request,response)=>{
	var getFonction=new Promise(DAO.GetAll);
	getFonction.then(function(data){
		console.log(data);
    response.render('page/menu', {result:data})
	
})}
)
app.get('/addPage',(request,response)=>{
	
    response.render('page/AddMenu', {})
	})
app.get('/delete/:id',(request,response)=>{
	
	DAO.Delete(request,response);
	
	console.log(request.params.id);
	
    //response.redirect('/');
	})
    app.get('/updatePage/:id',(request,response)=>{
	
	console.log(request.params.id);
	
    response.render('page/update',{Id:request.params.id})
	})

    app.post('/add',(request,response)=>{
		console.log(request.body.Src);
    plate= {Name:request.body.Name,Description:request.body.Discription,Src:request.body.Src,Prix:parseInt(request.body.Prix)};
	DAO.save(plate);
    response.redirect('/');
    /*console.log(request.body)*/
})
app.post('/update',(request,response)=>{
		console.log(request.body.Src);
     plate= {Id:request.body.Id,Name:request.body.Name,Description:request.body.Discription,Src:request.body.Src,Prix:parseInt(request.body.Prix)};
	DAO.update(plate);
    response.redirect('/');
    /*console.log(request.body)*/
})

app.listen(8081); 