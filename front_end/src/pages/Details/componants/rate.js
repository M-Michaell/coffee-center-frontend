import './rate.css'

export default function Rate(){
    return(
    <div class="d-flex justify-content-between align-items-center flex-column">
            <div class="ratings">
                <i class="fa fa-star rating-color rating-star"></i>
                <i class="fa fa-star rating-color rating-star"></i>
                <i class="fa fa-star rating-color rating-star"></i>
                <i class="fa fa-star rating-color rating-star"></i>
                <i class="fa fa-star rating-star"></i>
            </div>
            <h5 class="review-count">12 Reviews</h5>
        </div>
    )
}