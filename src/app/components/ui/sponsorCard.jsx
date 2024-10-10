
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'


const reviews = [
  { id: 1, name: 'Alice', comment: 'Great product! Highly recommended.', rating: 5 },
  { id: 2, name: 'Bob', comment: 'Excellent customer service.', rating: 4 },
  { id: 3, name: 'Charlie', comment: 'Good value for money.', rating: 4 },
  { id: 4, name: 'Diana', comment: 'Impressive features and easy to use.', rating: 5 },
  { id: 5, name: 'Eva', comment: 'Solid performance, but could be better.', rating: 3 },
  { id: 6, name: 'Frank', comment: 'Exceeded my expectations!', rating: 5 },
  { id: 7, name: 'Grace', comment: 'User-friendly interface.', rating: 4 },
  { id: 8, name: 'Henry', comment: 'Reliable and efficient.', rating: 4 },
  { id: 9, name: 'Ivy', comment: 'Great value proposition.', rating: 5 },
  // Add more reviews as needed
]

const ReviewCard = ({ review,setIsHovered }) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md ${
      review.id % 2 === 0 ? 'bg-white ' : 'bg-[#6CB73A] text-white'
    } w-80 flex flex-col justify-evenly items-center`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
   
  >
    <div >
      <div className="flex mb-2 justify-center"
       
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className=" mb-4">{review.comment}</p>
    </div>
    <p className="text-right font-semibold">{review.name}</p>
  </motion.div>
)

const MovingRow = ({ reviews, speed }) => {
  const [position, setPosition] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
    const animation = () => {
      setPosition((prevPosition) => (prevPosition + speed) % 100)
    }
    const intervalId = setInterval(animation, 50)
    return () => clearInterval(intervalId)}

  }, [speed,isHovered])

  return (
    <div className="overflow-hidden whitespace-nowrap" 
  
   
>
      <motion.div
        className="inline-flex gap-6"
        animate={{ x: `-${position}%` }}
        transition={{ ease: 'linear', duration: 0 ,repeat:Infinity}}
      >
        {reviews.concat(reviews).map((review, index) => {
            // if(index===reviews.length-1){
            //     reviews.push(reviews[0])
            // }
         return <ReviewCard key={`${review.id}-${index}`} review={review} setIsHovered={setIsHovered} />
       
})}
      </motion.div>
    </div>
  )
}

export default function ClientReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="">
      
       
        <div className="space-y-12">
          <MovingRow reviews={reviews.slice(0, 3)} speed={0.2} />
          <MovingRow reviews={reviews.slice(3, 6)} speed={0.2} />
          <MovingRow reviews={reviews.slice(6, 9)} speed={0.3} />
        </div>
      </div>
    </section>
  )
}