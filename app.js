var dateformat = require('dateformat');
var express = require('express');
app = express();

app.use(express.static('public'));

app.get('/:time', function(req,res){
  if(req.params.time == parseInt(req.params.time)){
    var date = new Date(parseInt(req.params.time)*1000);
    var naturalDate = dateformat(date, 'mmmm dd, yyyy');
    res.send({unix:req.params.time, natural:naturalDate});
    } else {
      var date = new Date(req.params.time).getTime();
      if(!isNaN(date)){
        res.send({unix:date/1000, time:dateformat(req.params.time, 'mmmm dd, yyyy')});
      } else {
        res.send({unix:null, time:null});
      }
    }

})


app.listen(process.env.PORT||3000, function(){
  console.log('server running...')
})
