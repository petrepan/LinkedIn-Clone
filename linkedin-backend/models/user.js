var mongoose =require('mongoose');

var userschema = mongoose.Schema({
    applicant_id : {
      type: String
    },
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    status : {
        type:String
    },
    email : {
        type : String,
        required : true
    },
    recruiter_flag : {
        type : Number
    },
    student_flag : {
        type : Number
    },
    address : {
        type : String,
    },
    state : {
        type : String,

    },
    city : {
        type : String
    },
    country : {
      type : String
    },
    zip_code : {
        type : Number
    },
    company : {
      type : String
    },
    experience : {
        type : String
    },
    education : {
        type : String
    },
    school : {
      type : String
    },
    skills : {
        type : String
    },
    profile_summary : {
        type : String
    },
    headline : {
      type : String
    },
    job_title : {
      type : String
    },
    profile_img : {
        type : String
    },
    // connections:[
    //     {
    //         connection_name: String,
    //         connection_email: String,
    //         experience: String,
    //         connected: Boolean,
    //         mutual_connections:[{
    //             mutual_connection_name: String,
    //             mutual_connection_email: String,
    //             mutual_connection_experience: String
    //         }]
    //     }
    // ],
    
    connections:[
        {
            email:String,
            first_name:String,
            last_name:String,
            job_title:String,
            experience:Number,
          
        }
    ],

    pending:[{
        email:String,
        first_name:String,
        last_name:String,
        job_title:String,
       
    }
    ],
    waiting:[
    ],
    resume_path: {type : Array, required : false},
    saved_job : {type : Array, required : false},
    applied_job:{type : Array, required : false}

});

const User = mongoose.model('User',userschema);

module.exports.User = User;
