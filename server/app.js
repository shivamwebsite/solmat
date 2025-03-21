require("dotenv").config();
const express=require("express")
const cors=require("cors")
const cookieParser = require("cookie-parser")
const mongoose=require("mongoose")
const app=express()


app.use(express.json());
app.use(cookieParser(""));
app.use(cors())

const port=7000
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Database is connected")
    // insertdata()
}).catch((error)=>{
    console.log("database is not connected :- "+ error.message)
})




// const user=mongoose.modelNames('users')



// Register Schema

const registerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength:10,
        maxlength : 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const regi = new mongoose.model("Soulmate-Details",registerSchema );


// register the data

app.post("/register", async (req, res) => {
    console.log(req.body);

    const { fname, email, mobile, password } = req.body;

    if (!fname || !email || !mobile || !password) {
        res.status(422).json({ error: "fill the all details" });
        console.log("no data available");
    };

    try {

        const preuser = await regi.findOne({ email: email });
        const preuser1 = await regi.findOne({ mobile: mobile });

        if (preuser) {
            res.status(423).json({ error: "This email is already exist" })
        } else if(preuser1){
            res.status(424).json({ error: "This mobile is already exist" })
        }
        else {

            const finalUser = new regi({
                fname, email, mobile, password
            });

            // yaha pe hasing krenge

            const storedata = await finalUser.save();
            // console.log(storedata);
            res.status(201).json(storedata);
        }

    } catch(error) {
        // console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(425).send(error);
    }

});


// login api

app.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    };

    try {

        const userlogin = await regi.findOne({ email: email });
//         console.log(userlogin);
        if (userlogin) {
            // const isMatch = await bcrypt.compare(password, userlogin.password);
            // console.log(isMatch);
             
            if (!(userlogin.password == password)) {
                res.status(401).json({ error: "invalid details" });
            } else {
                
                // const token = await userlogin.generatAuthtoken();
                // console.log(token);

                res.status(201).json(userlogin);
                // res.status(201).json(userlogin);
            }

         } else {
            res.status(402).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(403).json({ error: "invalid crediential pass" });
        // console.log("error the bhai catch ma for login time" + error.message);
    }
});


const insertdata = async()=>{
    try{
        const savedata=new User({
            fname:"shivam shaw",
            email:"shivam@gmail.com",
            mobile:"9903124575",
            messg:"it is a very good website"
        });
        await savedata.save();
        console.log("data inserted");
    }catch(error){
        console.log("error while inserting data ",error)
    }
}



app.listen(port,()=>{
    console.log("server is running at port "+port)
})