import React from 'react';
import blog1 from '../../assets/images/project_5.png'; // You can update the image path to more relevant images
import { Link } from 'react-router-dom';

const BlogAreaRightData = () => {
    const blogPosts = [
        {
          id: 1,
          date: '20 September - 2024',
          category: 'Motorbike Maintenance',
          title: 'Top 5 Maintenance Tips for Your Motorbike',
          description: 'Learn essential maintenance tips to keep your motorbike in top condition and ensure a smooth ride.',
          image: blog1,
        },
        {
          id: 2,
          date: '25 September - 2024',
          category: 'Motorbike Services',
          title: 'Understanding Common Motorbike Repairs',
          description: 'Explore common issues faced by motorbike owners and how to tackle them effectively.',
          image: blog1,
        },
        {
          id: 3,
          date: '30 September - 2024',
          category: 'Safety',
          title: 'Safety Tips for New Motorbike Riders',
          description: 'A guide for new riders on how to stay safe and enjoy riding their motorbikes.',
          image: blog1,
        },
        {
          id: 4,
          date: '5 October - 2024',
          category: 'Industry Insights',
          title: 'The Future of Electric Motorbikes',
          description: 'An insight into the growing trend of electric motorbikes and what it means for the industry.',
          image: blog1,
        },
        {
          id: 5,
          date: '10 October - 2024',
          category: 'Customer Care',
          title: 'How to Choose the Right Motorbike for You',
          description: 'Tips for selecting the perfect motorbike based on your needs and preferences.',
          image: blog1,
        },
        {
          id: 6,
          date: '15 October - 2024',
          category: 'Motorbike Parts',
          title: 'Essential Motorbike Parts for Every Rider',
          description: 'A rundown of the most essential parts every motorbike rider should have.',
          image: blog1,
        },
    ];

    return (
      <>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="lg:w-1/2 w-full px-4 mb-8">
              <div className="single-blog bg-white shadow-lg">
                <div className="post-img mb-4">
                  <Link to="/">
                    <img src={post.image} alt="" className="w-full h-48 object-cover" />
                  </Link>
                </div>
                <div className="blog-content p-6">
                  <div className="blog-date mb-2">
                    <ul className="flex items-center space-x-2 text-gray-500 text-sm">
                      <li>
                        <h6>{post.date}</h6>
                      </li>
                      <li>|</li>
                      <li>
                        <Link to="/" className="text-[#C32735] hover:underline">{post.category}</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-body-title mb-2">
                    <h3 className="text-xl font-semibold">
                      <Link to="/" className="hover:underline">{post.title}</Link>
                    </h3>
                  </div>
                  <div className="blog-body-text mb-4">
                    <p>{post.description}</p>
                  </div>
                  <div className="blog-bottom-text-link">
                    <Link to="/" className="text-[#C32735] hover:underline">+ Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='lg:ml-28'>
            {/* <Linkrrow/> */}
          </div>
        </div>
      </>
    );
}

export default BlogAreaRightData;
