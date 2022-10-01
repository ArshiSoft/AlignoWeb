const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const jwt_decode = require('jwt-decode');

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/rxform')

app.get('/hello', (req,res)=>{
  res.send('Hello World')
})

app.post('/api/rxform', async (req, res) => {
  
  console.log(req.body)
  try {
    // const newPassword = await bcrypt.hash(req.body.password , 10)
    // await User.create({
      // const user = 
      await User.create({
            
            clinicname: req.body.clinicname,
            doctorname: req.body.doctorname,
            doctornumber: req.body.doctornumber,
            doctoremail: req.body.doctoremail,
            patienid: req.body.patienid,
            patientname: req.body.patientname,
            patientnumber: req.body.patientnumber,
            patientemail: req.body.patientemail,
            gender: req.body.gender,
            email: req.body.email,
            archesvalue: req.body.archesvalue,
            lowermidlinemaintain: req.body.lowermidlinemaintain,
            lowermidlineimprove: req.body.lowermidlineimprove,
            lowermidlineideal: req.body.lowermidlineideal,
            pcop: req.body.pcop,
            lowermidline: req.body.lowermidline,
            bridgesimplant: req.body.bridgesimplant,
            uppermidline: req.body.uppermidline,
            mrcir: req.body.mrcir,
            mrcil: req.body.mrcil,
            mrciir: req.body.mrciir,
            mrciil: req.body.mrciil,
            mrciiir: req.body.mrciiir,
            mrciiil: req.body.mrciiil,
            crcir: req.body.crcir,
            crcil: req.body.crcil,
            crciir: req.body.crciir,
            crciil: req.body.crciil,
            crciiir: req.body.crciiir,
            crciiil: req.body.crciiil,
            uppermidlinemaintain: req.body.uppermidlinemaintain,
            uppermidlineimprove: req.body.uppermidlineimprove,
            uppermidlineidela: req.body.uppermidlineidela,
            upperoverbitemaintain: req.body.upperoverbitemaintain,
            overbiteimprove: req.body.overbiteimprove,
            overbiteideal: req.body.overbiteideal,
            overjetmaintain: req.body.overjetmaintain,
            overjetimprove: req.body.overjetimprove,
            overjetideal: req.body.overjetideal,
            molarrelationmaintain: req.body.molarrelationmaintain,
            molarrelationimrpove: req.body.molarrelationimrpove,
            molarrelationideal: req.body.molarrelationideal,
            caninerelationmaintain: req.body.caninerelationmaintain,
            caninerelationimprove: req.body.caninerelationimprove,
            caninerelationideal: req.body.caninerelationideal,
            archformmaintain: req.body.archformmaintain,
            archformimprove: req.body.archformimprove,
            archformideal: req.body.archformideal,
            posteriorcrossbitemaintain: req.body.posteriorcrossbitemaintain,
            posteriorcrossbiteimprove: req.body.posteriorcrossbiteimprove,
            posteriorcrossbiteideal: req.body.posteriorcrossbiteideal,
            procline: req.body.procline,
            ipr: req.body.ipr,
            expand: req.body.expand,
            distalize: req.body.distalize,
            aeot: req.body.aeot,
            etbt: req.body.etbt,
            engagers: req.body.engagers,
    })
    res.json({ status: 'ok' })
  } catch (err) {
    // console.log(err)
    res.json({ status: 'error', error: 'Duplicate email'}) 
  }
})



// app.post('/api/login', async (req, res) => {

//   const user = await User.findOne({
//     email: req.body.email,
    
//   })
//   if(!user){
//     return (
//       { status : 'error', error: 'invalid login'}
//     )
//   }
//   const isPasswordValid = await bcrypt.compare(req.body.password ,user.password)

//   if (isPasswordValid) {
//     const token = jwt.sign({
//       name: user.name,
//       email: user.email,
//     },
//       'secret123'
//     )
//     return res.json({ status: 'ok', user: token })
//   }
//   else {
//     return res.json({ status: 'error', user: false })
//   }
// }
// )

// app.get('/api/quote', async (req, res) => {
//   const token = req.headers['x-access-token']

//   try {
//     const decoded = jwt.verify(token, 'secret123')
//     const email = decoded.email
//     const user = await User.findOne({ email: email })

//     return res.json( { status: 'ok', quote: user.quote })

//   }
//   catch (error) {
//     console.log(error)
//     res.json({ status: 'error', error: 'invalid token' })
//   }


// })
// app.post('/api/quote', async (req, res) => {
//   const token = req.headers['x-access-token']

//   try {
//     const decoded = jwt.verify(token, 'secret123')
//     const email = decoded.email
//     await User.updateOne(
//       { email: email },
//       { $set: { quote: req.body.quote }})

//     return { status: 'ok' }

//   }
//   catch (error) {
//     console.log(error)
//     res.json({ status: 'error', error: 'invalid token' })
//   }



// })
app.listen(1337, () => {
  console.log('server started on 1337')
})