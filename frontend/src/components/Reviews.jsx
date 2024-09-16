
import{ Carousel }from"antd";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



const contentStyle = {
    border:'3px solid black',
    margin: 0,
    height: '80vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'darkgray',

  };
  

  const reviewItems = [
    {
      key: '1',
      location: 'Santorini, Greece',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6OEKjC7ucsAdn2VYZMpEqcXOZoAzWvzDPd8GVxBVpn2K44DS_2f5-WxhIPUrWo1Kqs&usqp=CAU',
      review: 'Santorini is an absolute paradise! The stunning sunsets and white-washed buildings overlooking the Aegean Sea are breathtaking. The food, especially the seafood, was amazing. A perfect destination for a romantic getaway.',
      username: 'travelLover92',
      rating: 2,
    },
    {
      key: '2',
      location: 'Kyoto, Japan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx670wXZOahivoZMMoP6FGBnYcqhM2sodgrQ&s',
      review: 'Kyoto’s mix of traditional temples and beautiful gardens is incredible. Walking through the bamboo forest in Arashiyama felt like stepping into another world. I would highly recommend visiting during the cherry blossom season.',
      username: 'japanExplorer',
      rating: 3.5,
    },
    {
      key: '3',
      location: 'Maui, Hawaii',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcW3znbiTe61bWSH1w4lORM-W6CMpt0JC3fDOI7B4VNp2TDsK-JKm0LeRpznyfZo7p-I&usqp=CAU',
      review: 'Maui has everything you could ask for in a tropical vacation. The beaches are pristine, and snorkeling with sea turtles was a highlight. The road to Hana is a must-do, but be prepared for a long drive!',
      username: 'islandHopper',
      rating: 5,
    },

    {
      key: '5',
      location: 'Cape Town, South Africa',
      image: 'https://www.freepassphoto.com/static/images/goodone_final.jpg',
      review: 'Cape Town’s natural beauty is unmatched. Table Mountain offers stunning views, and the beaches are wonderful for relaxing. The cultural history is fascinating too. I loved visiting the local markets for unique crafts.',
      username: 'adventureAddict',
      rating: 1,
    },
  ];
  
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    return (
      <div className="flex space-x-1 ">
        {Array(fullStars).fill(<AiFillStar className="text-yellow-400" />)}
        {halfStar && <AiFillStar className="text-yellow-400 " />}
        {Array(totalStars - fullStars - (halfStar ? 1 : 0)).fill(
          <AiOutlineStar className="text-yellow-400" />
        )}
      </div>
    );
  };
  
function Reviews() {
 
  
    return (
      <div className=" m-9 py-9 text-center ">

        <Carousel arrows infinite={false} className="flex ">
         {reviewItems.map((data, index) => (
                  
             <div style={contentStyle} key={index} className=" px-20 " >
              <div className=" md:flex justify-between bg-white items-center py-9 rounded-md h-96  ">
                  <div className=" flex justify-center" >
                      <img src={data.image} alt="" className=" min-h-20 min-w-60" />
                  </div>
                  <div className="flex flex-col gap-5 ">
                      <div>Location: {data.location}</div>
                      <div>{data.review}</div>
                      <div className="lg:flex items-center justify-between px-6  ">
                          <div>Username: @{data.username}</div>
                          <div className="flex items-center justify-center">Rating: {renderStars(data.rating)}</div>
                      </div>
                  </div>

              </div>
              </div>
        ))}
        </Carousel>

      </div>
    );
  }
  
  export default Reviews;


