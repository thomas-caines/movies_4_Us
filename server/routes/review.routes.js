import { Router } from 'express'
import {
        createReview,
        getAllReviews,
        getOneReview,
        updateOneReview,
        deleteOneReview,
} from '../controllers/review.controller.js'

const reviewRouter = Router()

    reviewRouter.route('/')
        .post( createReview )
        .get( getAllReviews )

    reviewRouter.route('/:id')
        .get( getOneReview )
        .put( updateOneReview )
        .delete( deleteOneReview )
    
export default reviewRouter