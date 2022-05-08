import mongoose from 'mongoose'
const Schema = mongoose.Schema; 


const technologie = Schema({ 
       name: { 
            type: String, 
            require: true
        },
        imgTechnology: { 
            type: String, 
            require: true
        },
        certifications:  [{ 
            nameCertifications: String, 
            url: String, 
            iconCompany: String
        }],
})

export const techno = mongoose.model('technologies', technologie);

