import { model, Schema } from 'mongoose'

const ReviewSchema = new Schema(
    {
        rating: {
            type: Number,
            required: [true, 'You must rate the movie'],
            minlength : [0, 'Rating must be atleast 1'],
            maxlength : [10, 'Rating cannot be more than 10']
        },
        review_body : {
            type: String,
            required : [true, 'You must leave a review'],
            min : [1, 'Reviews must be at least 1 character long '],
            max : [255, 'Reviews cannot be more than 255 characters long']
        },
        recommend : {
            type : Boolean
        },
        user : {
            type : String
        },
        movie_id : {
            type : String
        }
    },
    { timestamps: true }
)

const ReviewModel = model('ReviewModel', ReviewSchema)
export default ReviewModel