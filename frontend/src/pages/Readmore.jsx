import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaClock, FaTags } from 'react-icons/fa'

const Readmore = () => {
    const article = {
        title: "Exploring the World: A Journey Through Five Continents",
        author: {
          name: "Jane Doe",
          bio: "Travel enthusiast and freelance writer"
        },
        date: "May 15, 2023",
        content: `
          <p>Embarking on a journey across five continents is more than just a trip—it's a life-changing experience that broadens your horizons and challenges your perspectives. From the bustling streets of Tokyo to the serene landscapes of Patagonia, every destination offers unique insights into our diverse world.</p>
          
          <h2>Asia: A Blend of Tradition and Modernity</h2>
          <p>Our journey begins in the heart of Asia, where ancient traditions seamlessly coexist with cutting-edge technology. In Japan, we witnessed the juxtaposition of tranquil Zen gardens against the backdrop of neon-lit skyscrapers. The street food markets of Bangkok offered a sensory overload, with fragrant spices and sizzling woks at every turn.</p>
          
          <h2>Europe: A Walk Through History</h2>
          <p>Crossing into Europe, we were immediately struck by the weight of history present in every cobblestone street and Gothic cathedral. The art museums of Paris, the ancient ruins of Rome, and the fairy-tale castles of Germany each told stories of civilizations that have shaped our modern world.</p>
          
          <h2>Africa: Wild Beauty and Rich Culture</h2>
          <p>Africa challenged our preconceptions and left us in awe of its natural wonders. A safari in the Serengeti brought us face-to-face with majestic wildlife, while the vibrant markets of Marrakech introduced us to the warmth and hospitality of North African culture.</p>
          
          <h2>South America: Diverse Landscapes and Passionate People</h2>
          <p>In South America, we hiked through the mist-shrouded ruins of Machu Picchu and danced the night away in the colorful streets of Rio de Janeiro. The continent's diverse ecosystems, from the Amazon rainforest to the Atacama Desert, showcased the planet's incredible biodiversity.</p>
          
          <h2>Australia: Where the Outback Meets the Reef</h2>
          <p>Our journey concluded in Australia, a land of contrasts where the rugged Outback gives way to pristine coastlines. Snorkeling in the Great Barrier Reef and watching the sunset over Uluru were unforgettable experiences that highlighted the unique beauty of the Australian landscape.</p>
          
          <p>As we reflect on our global adventure, we're reminded that travel is not just about the destinations we visit, but the people we meet and the stories we share. It's about stepping out of our comfort zones and embracing the unknown. So pack your bags, open your mind, and set out to explore the world—you never know what wonders await.</p>
        `,
        tags: ["Travel", "Adventure", "Culture", "Nature"]
      }
    
      const relatedArticles = [
        {
          title: "10 Must-Visit Hidden Gems in Southeast Asia",
          link: "/article/2"
        },
        {
          title: "Sustainable Travel: How to Minimize Your Carbon Footprint",
          link: "/article/3"
        },
        {
          title: "The Art of Solo Travel: Tips for First-Time Adventurers",
          link: "/article/4"
        }
      ]
  return (
<div className="min-h-screen flex flex-col bg-gray-50">
      
<main className="flex-grow pt-16">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          
          <div className="flex items-center mb-6">
            <FaUser className="text-gray-600 mr-2" />
            <span className="text-lg font-semibold text-gray-900 mr-4">{article.author.name}</span>
            <FaClock className="text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">{article.date}</span>
          </div>
          
          <div className="w-full h-64 bg-gray-300 mb-8">
            {/* Placeholder for article image */}
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-8 flex flex-wrap gap-2">
            <FaTags className="text-gray-600 mr-2" />
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <hr className="my-8 border-t border-gray-300" />
          
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4">
              {/* Placeholder for author avatar */}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{article.author.name}</p>
              <p className="text-sm text-gray-600">{article.author.bio}</p>
            </div>
          </div>
        </article>
        
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-300">
                  {/* Placeholder for related article image */}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedArticle.title}</h3>
                  <Link to={relatedArticle.link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
    </div>
  )
}

export default Readmore
