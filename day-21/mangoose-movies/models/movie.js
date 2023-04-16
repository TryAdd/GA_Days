const mongoose = require('mongoose')

//ds for less typing l mongoose.schena xD  schena mean database
const Schema = mongoose.Schema

//title
// release year
// rating mal 3mr mo chm t8yemh 
// cast
// 7a8enh fe senma or not 


const moviesSchema = new Schema({
    title: {
        type:String,
        require:true
    },
    releaseYear: {
        type:Number,
         default:function(){
            return new Date().getFullYear()
         }
        },
    rating: String,
    cast: [String], //ds y3ne array feh strings 
    nowShowing: Boolean
},
{
    timestamps: true
    //its for anything update ytjdd 3ndna here so y6l3 lena a7na wsh tbdl w che y3ne

})


module.exports = mongoose.model('Movie', moviesSchema)
