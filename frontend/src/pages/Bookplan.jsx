import React, { useState } from 'react'
import { Tabs, Card, List, Button, Modal, DatePicker, InputNumber, message } from 'antd'
import { CalendarOutlined, HomeOutlined, CompassOutlined, UserOutlined, DollarOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Footer from '../components/Footer'

const { TabPane } = Tabs
const { RangePicker } = DatePicker

export default function Bookplan() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedAccommodation, setSelectedAccommodation] = useState(null)
  const [travelDates, setTravelDates] = useState(null)
  const [travelers, setTravelers] = useState(1)

  const showModal = (activity) => {
    setSelectedActivity(activity)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleBookAccommodation = (accommodation) => {
    setSelectedAccommodation(accommodation)
    message.success(`${accommodation.title} booked successfully!`)
  }

  const handleConfirmBooking = () => {
    if (!travelDates || !selectedAccommodation) {
      message.error('Please select travel dates and accommodation before confirming.')
      return
    }
    message.success('Your trip has been booked successfully!')
  }

  const itineraryItems = [
    { title: 'Day 1', description: 'Arrival and city tour', details: 'Arrive at [Destination] Airport. Transfer to hotel. Afternoon city tour including visits to main landmarks.' },
    { title: 'Day 2', description: 'Museum visits and local cuisine exploration', details: 'Morning visit to National Museum. Afternoon food tour in the old town.' },
    { title: 'Day 3', description: 'Nature hike and relaxation', details: 'Full-day excursion to nearby national park. Evening spa treatment at the hotel.' },
    { title: 'Day 4', description: 'Free day for personal exploration', details: 'Enjoy a day at your leisure. Optional activities available.' },
    { title: 'Day 5', description: 'Departure', details: 'Check-out from hotel. Transfer to airport for departure.' },
  ]

  const accommodationOptions = [
    { title: 'Luxury Hotel', description: '5-star accommodation in the city center', price: 300 },
    { title: 'Cozy B&B', description: 'Charming bed and breakfast in a quiet neighborhood', price: 150 },
    { title: 'Beachfront Resort', description: 'Relaxing resort with ocean views', price: 250 },
  ]

  const activitySuggestions = [
    { title: 'Historical Walking Tour', description: 'Explore the city\'s rich history', duration: '3 hours', price: 50 },
    { title: 'Cooking Class', description: 'Learn to cook local specialties', duration: '4 hours', price: 80 },
    { title: 'Sunset Cruise', description: 'Enjoy a relaxing evening on the water', duration: '2 hours', price: 60 },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        <Header/>
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Your Trip to [Destination]</h1>
          
          <Card className="mb-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold mb-2">Travel Dates</h2>
                <RangePicker onChange={(dates) => setTravelDates(dates)} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Number of Travelers</h2>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onChange={(value) => setTravelers(value)}
                  prefix={<UserOutlined />}
                />
              </div>
            </div>
          </Card>
          
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <CalendarOutlined />
                  Itinerary
                </span>
              }
              key="1"
            >
              <List
                itemLayout="horizontal"
                dataSource={itineraryItems}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<span className="text-lg font-semibold">{item.title}</span>}
                      description={
                        <div>
                          <p className="font-medium">{item.description}</p>
                          <p className="text-gray-600">{item.details}</p>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <HomeOutlined />
                  Accommodations
                </span>
              }
              key="2"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accommodationOptions.map((option, index) => (
                  <Card 
                    key={index} 
                    title={option.title} 
                    extra={
                      <Button 
                        type="primary" 
                        onClick={() => handleBookAccommodation(option)}
                        disabled={selectedAccommodation === option}
                      >
                        {selectedAccommodation === option ? 'Booked' : 'Book'}
                      </Button>
                    }
                  >
                    <p>{option.description}</p>
                    <p className="mt-2">
                      <DollarOutlined /> ${option.price} per night
                    </p>
                  </Card>
                ))}
              </div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <CompassOutlined />
                  Activities
                </span>
              }
              key="3"
            >
              <List
                itemLayout="horizontal"
                dataSource={activitySuggestions}
                renderItem={item => (
                  <List.Item
                    actions={[
                      <Button key="list-loadmore-more" onClick={() => showModal(item)}>
                        Learn More
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      title={<span className="text-lg font-semibold">{item.title}</span>}
                      description={
                        <div>
                          <p>{item.description}</p>
                          <p>Duration: {item.duration}</p>
                          <p>Price: ${item.price} per person</p>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

          <div className="mt-8 text-center">
            <Button type="primary" size="large" onClick={handleConfirmBooking}>
              Confirm Booking
            </Button>
          </div>
        </div>
      </main>

      <Modal
        title={selectedActivity?.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{selectedActivity?.description}</p>
        <p>Duration: {selectedActivity?.duration}</p>
        <p>Price: ${selectedActivity?.price} per person</p>
        <p>Additional details about the activity would go here...</p>
      </Modal>

      <Footer/>

    </div>
  )
}