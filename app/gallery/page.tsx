'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Camera,
  BookOpen,
  Trophy,
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  Award,
  Heart,
  Eye,
  Filter
} from 'lucide-react'
import Image from 'next/image'

export default function GalleryPage () {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Generate 200 gallery items with different grid sizes
  const galleryItems = [
    // Large items (span 2 columns)
    {
      id: 1,
      title: 'Annual Day Celebration 2024',
      category: 'events',
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      description:
        'Grand celebration with cultural performances and award ceremonies',
      date: '2024-03-15',
      size: 'large',
      likes: 156,
      views: 890
    },
    {
      id: 2,
      title: 'Modern Classroom Learning',
      category: 'classroom',
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      description:
        'Interactive learning session with digital boards and modern teaching methods',
      date: '2024-03-10',
      size: 'medium',
      likes: 89,
      views: 456
    },
    {
      id: 3,
      title: 'CA Foundation Results Day',
      category: 'achievements',
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop',
      description:
        "Celebrating our students' outstanding performance in CA Foundation exams",
      date: '2024-02-28',
      size: 'tall',
      likes: 234,
      views: 1200
    },
    {
      id: 4,
      title: 'Weekly Test Session',
      category: 'tests',
      src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      description: 'Sunday weekly assessment in progress with focused students',
      date: '2024-03-12',
      size: 'medium',
      likes: 67,
      views: 345
    },
    {
      id: 5,
      title: 'Science Laboratory Practical',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      description:
        'Students conducting experiments in our well-equipped science lab',
      date: '2024-03-08',
      size: 'large',
      likes: 78,
      views: 423
    },
    {
      id: 6,
      title: 'Mathematics Workshop',
      category: 'classroom',
      src: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop',
      description:
        'Advanced mathematics concepts explained through interactive methods',
      date: '2024-03-05',
      size: 'medium',
      likes: 45,
      views: 267
    },
    {
      id: 7,
      title: 'Library Study Hours',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop',
      description: 'Peaceful study environment in our comprehensive library',
      date: '2024-03-07',
      size: 'tall',
      likes: 56,
      views: 289
    },
    {
      id: 8,
      title: 'Parent-Teacher Meeting',
      category: 'events',
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      description: 'Productive discussions between parents and faculty members',
      date: '2024-03-01',
      size: 'medium',
      likes: 92,
      views: 512
    },
    {
      id: 9,
      title: 'Computer Lab Session',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'Students learning accounting software and digital tools',
      date: '2024-02-25',
      size: 'large',
      likes: 73,
      views: 398
    },
    {
      id: 10,
      title: 'Group Discussion Activity',
      category: 'classroom',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      description:
        'Students engaging in collaborative learning and discussions',
      date: '2024-02-22',
      size: 'medium',
      likes: 61,
      views: 334
    },
    // Continue with more items...
    ...Array.from({ length: 50 }, (_, i) => {
      const categories = [
        'classroom',
        'tests',
        'events',
        'achievements',
        'facilities'
      ]
      const sizes = ['medium', 'large', 'tall']
      const categoryIndex = i % categories.length
      const sizeIndex = i % sizes.length

      return {
        id: i + 11,
        title: `${
          categories[categoryIndex].charAt(0).toUpperCase() +
          categories[categoryIndex].slice(1)
        } Event ${i + 1}`,
        category: categories[categoryIndex],
        src: `https://picsum.photos/${
          sizes[sizeIndex] === 'large' ? 800 : 600
        }/${
          sizes[sizeIndex] === 'tall'
            ? 800
            : sizes[sizeIndex] === 'large'
            ? 600
            : 400
        }?random=${i}`,

        // src: `https://picsum.photos/${sizes[sizeIndex] === "large" ? 800 : 600}/${sizes[sizeIndex] === "tall" ? 800 : sizes[sizeIndex] === "large" ? 600 : 400}?random=${i}`,

        description: `Detailed description of ${categories[categoryIndex]} activity showcasing student engagement and learning`,
        date: `2024-0${Math.floor(Math.random() * 3) + 1}-${String(
          Math.floor(Math.random() * 28) + 1
        ).padStart(2, '0')}`,
        size: sizes[sizeIndex],
        likes: Math.floor(Math.random() * 200) + 20,
        views: Math.floor(Math.random() * 1000) + 100
      }
    })
  ]

  const categories = [
    {
      id: 'all',
      label: 'All Photos',
      icon: Camera,
      count: galleryItems.length
    },
    {
      id: 'classroom',
      label: 'Classroom',
      icon: BookOpen,
      count: galleryItems.filter(item => item.category === 'classroom').length
    },
    {
      id: 'tests',
      label: 'Tests & Exams',
      icon: Trophy,
      count: galleryItems.filter(item => item.category === 'tests').length
    },
    {
      id: 'events',
      label: 'Events',
      icon: Calendar,
      count: galleryItems.filter(item => item.category === 'events').length
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: Award,
      count: galleryItems.filter(item => item.category === 'achievements')
        .length
    },
    {
      id: 'facilities',
      label: 'Facilities',
      icon: MapPin,
      count: galleryItems.filter(item => item.category === 'facilities').length
    }
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className='min-h-screen bg-white pt-20'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-6 px-4 py-2'>
              <Camera className='h-4 w-4 mr-2' />
              Photo Gallery
            </Badge>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Our
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent'>
                Memories
              </span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Explore moments of learning, achievement, and celebration at AIE
              through our comprehensive photo gallery
            </p>
            <div className='mt-8 flex items-center justify-center space-x-8 text-sm'>
              <div className='flex items-center'>
                <Camera className='h-5 w-5 mr-2 text-[#f59e0b]' />
                <span>{galleryItems.length}+ Photos</span>
              </div>
              <div className='flex items-center'>
                <Users className='h-5 w-5 mr-2 text-[#3b82f6]' />
                <span>5+ Years of Memories</span>
              </div>
              <div className='flex items-center'>
                <GraduationCap className='h-5 w-5 mr-2 text-[#10b981]' />
                <span>1000+ Students Featured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-12 bg-gradient-to-br from-gray-50 to-blue-50 sticky top-20 z-40 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-center mb-6'>
            <Filter className='h-5 w-5 mr-2 text-gray-600' />
            <span className='text-gray-600 font-medium'>
              Filter by Category
            </span>
          </div>

          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map(category => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                  }`}
                >
                  <Icon className='h-4 w-4 mr-2' />
                  {category.label}
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <p className='text-gray-600'>
              Showing{' '}
              <span className='font-semibold text-[#f59e0b]'>
                {filteredItems.length}
              </span>{' '}
              photos
              {selectedCategory !== 'all' && (
                <span>
                  {' '}
                  in{' '}
                  <span className='font-semibold text-[#3b82f6]'>
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div
                  className={`relative ${
                    item.size === 'large'
                      ? 'aspect-[4/3]'
                      : item.size === 'tall'
                      ? 'aspect-[3/4]'
                      : 'aspect-square'
                  }`}
                >
                  <Image
                    src={item.src || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-700'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                      <Badge className='bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-3 text-xs'>
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </Badge>
                      <h3 className='font-bold text-lg mb-2 line-clamp-2'>
                        {item.title}
                      </h3>
                      <p className='text-sm text-gray-200 mb-3 line-clamp-2'>
                        {item.description}
                      </p>

                      <div className='flex items-center justify-between text-xs'>
                        <span className='text-gray-300'>
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <div className='flex items-center space-x-3'>
                          <div className='flex items-center'>
                            <Heart className='h-3 w-3 mr-1' />
                            {item.likes}
                          </div>
                          <div className='flex items-center'>
                            <Eye className='h-3 w-3 mr-1' />
                            {item.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Badge className='bg-black/50 text-white backdrop-blur-sm'>
                      {new Date(item.date).getFullYear()}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-16'>
            <Button className='bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
              <Camera className='mr-2 h-5 w-5' />
              Load More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Gallery Statistics
            </h2>
            <p className='text-gray-600'>Our visual journey in numbers</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              {
                number: '200+',
                label: 'Total Photos',
                icon: Camera,
                color: 'from-[#f59e0b] to-[#d97706]'
              },
              {
                number: '50+',
                label: 'Events Covered',
                icon: Calendar,
                color: 'from-[#3b82f6] to-[#1e40af]'
              },
              {
                number: '1000+',
                label: 'Students Featured',
                icon: Users,
                color: 'from-[#10b981] to-[#059669]'
              },
              {
                number: '5+',
                label: 'Years of Memories',
                icon: Trophy,
                color: 'from-[#8b5cf6] to-[#7c3aed]'
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className='text-center group'>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className='h-8 w-8 text-white' />
                  </div>
                  <div className='text-3xl font-bold text-gray-800 mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-medium'>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Be Part of Our Story
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Join AIE and create your own success story. Your achievements could
            be featured in our next gallery update!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4'
            >
              <a href='/join-aie'>
                <GraduationCap className='mr-2 h-5 w-5' />
                Join AIE Today
              </a>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-2 border-white text-white hover:bg-white hover:text-[#0f172a] bg-transparent px-8 py-4'
            >
              <a href='/contact'>
                <MapPin className='mr-2 h-5 w-5' />
                Visit Our Campus
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
