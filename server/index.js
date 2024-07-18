const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const db = require('./database');
const bcrypt=require("bcrypt")
const path=require("path")
//excel
const ExcelJS = require('exceljs');
const fs = require('fs');


// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.static(path.join(__dirname, 'views')));

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
// Configure session
app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new GoogleStrategy({
  clientID: '284234719461-047ui8ih0r003o8pq4heuaf19et8e917.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


// Routes
let gmail
let gname
let profileImage

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get("/verifyMail",(req,res)=>{
  res.render("verifymail")
})

app.get("/newpassword",(req,res)=>{
  res.render("newpassword")
})

app.get('/signupwithgoogle', (req, res) => {
  res.render('signupwithgoogle');
});
app.get('/inventory', (req, res) => {
  res.render('inventory');
});


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/home' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  });

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/home');
  }
  gname=req.user.displayName
  profileImage=req.user.photos[0].value
  console.log(profileImage)
  console.log(gname)
  gmail=req.user.emails[0].value
  console.log(gmail)
  const selectUserQuery = `SELECT * FROM details WHERE email = '${gmail}'`;
  db.get(selectUserQuery,(e,r)=>{
    console.log(r)
  if (r === undefined) {
     const createUserQuery = `insert into details (email) values("${gmail}")`;
      const dbResponse = db.run(createUserQuery,(e,r=>{
      console.log(` ${gmail} entered in DB`);
      res.redirect('/signupwithgoogle')
  } ))}
  if(r!==undefined){
    let data={
      message:`${gname}`,
    }
    res.render("inventory",data)
  }
})
  
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});










app.get('/', (req, res) => {
    res.render("home");
});



app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get("/newpassword",(req,res)=>{
  res.render("newpassword")
})

let name
app.post("/signup", async (request, response) => {
    const {name,email,password} = request.body;
    console.log(name,email,password)
    const hashedPassword =await bcrypt.hash(request.body.password, 10);
    console.log(hashedPassword)
    const selectUserQuery = `SELECT * FROM details WHERE email = '${email}'`;
    const dbUser = db.get(selectUserQuery,(e,r)=>{
      if(r===undefined){
        const createUserQuery = `insert into details (name,email,password) values('${name}',"${email}","${hashedPassword}")`;
        const dbResponse = db.run(createUserQuery,(e,r=>{
          response.send(`Created account for ${name}`);
        }));
        
      }
      else{
        response.status = 400;
        response.send("User already exists");
      }
    });
    
   
  });






app.post("/signin", async (request, response) => {
    const {email , password } = request.body;
    console.log(email,password)
    const selectUserQuery = `SELECT * FROM details WHERE email = '${email}'`;
    const dbUser = db.get(selectUserQuery,async (e,r)=>{
      if (r === undefined) {
        response.send('invalid user');
        response.status(400);
      } else {
        if (await bcrypt.compare(request.body.password,r.password)) {
          let data={
            message:` ${r.name}`
          }
          response.render("inventory",data)
        } else {
          response.send('Incorrect password');
          response.status(400);
        }
      }
      
    });
    
  });


  app.post("/signupwithgoogle", async (req,res)=>{
    const{password}=req.body
    const hashedPassword =await bcrypt.hash(req.body.password, 10);
    console.log(req.body)
    const selectUserQuery = `SELECT * FROM details WHERE email = '${gmail}'`;
    const dbUser = db.get(selectUserQuery,(e,r)=>{
      if(r!==undefined){
        db.run(`update details set name="${gname}",password="${hashedPassword}" where email="${gmail}"`,(re,rs)=>{ 
          console.log(`name,pas inserted in db with email ${gmail}`) 
          let data={
            message:`hi ${gname}`,
          }
          res.render("inventory",data)
      })
      
      }
   
   })
  })




  app.post("/newpassword", async (req,res)=>{
    const{password}=req.body
    const hashedPassword =await bcrypt.hash(req.body.password, 10);
    console.log(req.body)
    const selectUserQuery = `SELECT * FROM details WHERE email = '${index}'`;
    const dbUser = db.get(selectUserQuery,(e,r)=>{
      if(r!==undefined){
        db.run(`update details set password="${hashedPassword}" where email="${index}"`,(re,rs)=>{ 
          console.log(`pas inserted in db with email ${index}`) 
          let data={
            message:`${gname}`,
          }
          res.render("inventory",data)
      })
      
      }
      else{
        res.send("user dosent exist")
      }
   
   })
  })




//email
let nodemailer=require("nodemailer");
const { error } = require('console');
const { file } = require('googleapis/build/src/apis/file');
require('dotenv').config();
const otpStorage = {};
let index // This is a simple in-memory storage for OTPs. Use a database for production.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user:process.env.GMAIL_USER,
    pass:process.env.GMAIL_PASS,
  }
});


function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
let otp=generateOTP()

app.post('/sendOtp', (req, res) => {
  console.log(req.body)
  const otp = generateOTP();
  console.log(otp)
  let identifier=req.body.emailId
  // Store the OTP temporarily (this should be replaced with a database in production)
  otpStorage[identifier] = otp;
  index=identifier
  console.log(otpStorage)
  
  if (identifier.includes('@')) {
    // Send OTP via email
    const mailOptions = {
      from:process.env.GMAIL_USER,
      to: identifier,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
       console.log(`${error.message},${info}`);
      }
      console.log('OTP sent to email');
    });




  }})




  app.post("/verifymail",(req,res)=>{
    console.log(req.body)
    
    console.log(otpStorage[index]==req.body.password)
    db.run(`select ${index} from details`)
    if(otpStorage[index]===req.body.password){
      console.log("Verified")
      res.render("newpassword")
    }
    else{
      res.send("OTP Error")
    }
  })



  //posting new task data
  app.post("/addNote",(req,res)=>{
    console.log(req.body)
    let  {noteTitle,note,tags,background}=req.body
    //adding to db
        const createUserQuery = `insert into noteDetails (NoteTitle,Note,Tags,BackgroundColor) values('${noteTitle}','${note}','${tags}','${background}')`;
        const dbResponse = db.run(createUserQuery,(error,output)=>{
          if(error){
            console.log(error.message)
            }
            else{
              console.log("note added successfully to DB")
              
            }
        });
      })

    //sending pending data
    app.get("/getData",(req,res)=>{
      db.all(`select * from noteDetails`,(e,r)=>{
      res.send(r)
      console.log("Notes Data sent to client")
    })
    })

   

    

    //searching from table
    app.post("/pendingTaskSearch",(req,res)=>{
      let{pendingTaskSearch}=req.body
      db.get(`SELECT * FROM task WHERE vendor LIKE '%${pendingTaskSearch}%';`,(e,r)=>{
      res.send(r)
      console.log("Searched data sent to client")
    })
    })





    //downloading data
    app.get("/download",(req,res)=>{
      try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');
    
        // Get data from SQLite database
        db.all('SELECT * FROM popupForm2Table', async (err, rows) => {
            if (err) {
                console.error('Error fetching data from database', err);
                return res.status(500).send('Error fetching data from database');
            }
    
            // Add column headers
            if (rows.length > 0) {
                worksheet.columns = Object.keys(rows[0]).map(key => ({ header: key, key: key }));
            }
    
            // Add rows to the worksheet
            rows.forEach (row => {
                 worksheet.addRow(row);
            });
    
            // Save the workbook to a file
            const filePath = path.join(__dirname, 'popupForm.xls');
            try {
              await workbook.xlsx.writeFile(filePath);
              res.download(filePath)
            } 
            catch (writeErr) {
                console.error('Error writing Excel file', writeErr);
                res.status(500).send('Error generating Excel file');
            }
        });
    } catch (error) {
        console.error('Error generating Excel file', error);
        res.status(500).send('Error generating Excel file');
    }
        
    })
    



    












  app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000/");
  });


