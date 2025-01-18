import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviews?: number;
}

export const StarRating = ({ rating, reviews = 0 }: StarRatingProps) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={16}
        className={`${star <= rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
      />
    ))}
    {reviews > 0 && <span className="text-sm text-gray-500">({reviews} Reviews)</span>}
  </div>
);