import { useLocation, Link } from 'react-router-dom';

function EachCocktailPage() {
  const location = useLocation();
  let barCocktail = location.state.barCocktail;

  const barCocktailReviews = barCocktail.reviews;

  console.log('barCocktailReviews: ', barCocktailReviews);

  // render each barCocktail
  // render the review of each barCocktail in the reviews section
  //! if barCocktailReviews.length === 0; render <h1>No reviews yet! Feel free to leave one</h1>
  // allow posting a review on any barCocktail
  // do a check if this review matches the user.id --> if so, allow editing and deleting
  return (
    <div>
      <div class='mb-10 md:mb-16'>
        <h1 class='mb-4 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
          {barCocktail.special_name}
        </h1>

        <div className='flex justify-center w-full input-group input-group-lg'>
          <Link to='/reviews' replace={true}>
            <button className='btn btn-secondary btn-outline'>
              Submit a Review!
            </button>
          </Link>
        </div>
      </div>
      <div class='grid justify-center gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
        {barCocktailReviews.map((eachReview) => (
          <div className='justify-center card w-96 bg-primary text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>{eachReview.stars} stars</h2>
              <p>{eachReview.comment}</p>
              <div className='justify-end card-actions'>
                {/* create state for if this is user's post; if so 
                then 
                 <Link
                  to={`/bar_cocktails/${barCocktail.id}`}
                  state={{ barCocktail: barCocktail }}
                  className='justify-center w-full btn btn-primary btn-outline'>
                  Edit this Review
                </Link>

                <btn>Delete this Review</btn>
                */}

                <button className='btn'>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachCocktailPage;
