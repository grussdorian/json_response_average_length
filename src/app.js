const path = '/home/hardik/Desktop/systemO2-mock-server-node/mock-json/'
const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000
const size = 100
var stream = {}
var iter = 0
app.post('',(req,res)=>{
    if(!req.query.authentication_token){
        res.send({

            error: "no data passed"
        })
        return
    }
    console.log(path + 'mock_'+ iter +'.json')
    fs.readFile( path + 'mock_'+ iter +'.json', 'utf-8', (error,data)=>{
        if(error){
           console.log('error in reading file')
           console.log('iter = ' + iter)
           res.status(400).send()
           return 
        }
        else{
            console.log('iter = ' + iter)
            stream = JSON.parse(data)
            iter = (iter+1)%size
            res.send(stream)
        }
    } )
    
})

app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})

// app.get('',(req,res)=>{
//     if(!req.query.college){
//         res.send({
//             error: "no college passed"
//         })
//         return
//     }
//     res.send({
//         passed: req.query,
//         title: 'Weather App',
//         name: 'Hardik Ghoshal'
//     })
// })


// {app.get('/about',(req,res)=>{
//     res.render('about',{
//         title: 'About page',
//         name: 'Hardik Ghoshal'
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         title: 'Help page',
//         name: 'Hardik Ghoshal',
//         message: 'NodeJS appication'
//     })
// })

// app.get('/weather',(req,res)=>{
//     if(!req.query.address){
//         return res.send({error: 'You have to provide address'})
//     }

//     geocode(req.query.address,(error,{lat,lon,location}={})=>{
//         if(error){
//           return res.send({error: error})
//         }
//         forecast(lat,lon,(error,forecastData)=>{
//           if(error){
//             return res.send({error:error})
//           }
//           res.send({
//               location: req.query.address,
//               address: location,
//               forecast: forecastData
//           })
//         })
//       })

// })


// app.get('/help/*',(req,res)=>{
//     //res.send('Help article not found!')
//     res.render('error',{
//         name: 'Hardik Ghoshal',
//         title: '404',
//         error: 'Error Help article not found!'
//     })
// })

// app.get('*',(req,res)=>{
//     //res.send('My 404 page')
//     res.render('error',{
//         name: 'Hardik Ghoshal',
//         title: '404',
//         error: 'Sorry page not found'
//     })
// })}

