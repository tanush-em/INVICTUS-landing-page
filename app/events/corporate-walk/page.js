import Image from 'next/image';

export default function CorporateWalk() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Corporate Walk</h1>
        
        <p className="mt-4 text-gray-300 text-lg">
          "Be fierce, be bold, be unforgettable."
          It's time to channel your inner corporate leader and own the stage with elegance and confidence! From power dressing to commanding presence, this is your moment to redefine corporate fashion and professionalism. Walk with attitude, grace, and a touch of charisma because success begins with the way you carry yourself!
        </p>

        <div className='mt-4 flex justify-center'>
          <Image src='/corporate-walk.jpeg' alt='Corporate Walk' width={500} height={300} className='rounded-lg shadow-md' />
        </div>
  
        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Participation Details</h2>
          <p className="mt-2"><strong>Team Size:</strong> 6-8 members</p>
          <p><strong>Entry Fee:</strong> ₹100 per person</p>
          <p><strong>Location:</strong> TRP Auditorium</p>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Participants must exhibit professional attire, grooming, and presentation that reflect a corporate attitude.</li>
            <li>Each team should have 6-8 members.</li>
            <li>Each team will have a total of 6 minutes (5 minutes for the performance + a 1-minute buffer).</li>
            <li>Only formal wear is allowed. No costumes will be provided by the organizers—teams must arrange their own.</li>
            <li>Each group should bring its own background music to complement the performance.</li>
            <li>The use of fire-related items such as lighters, matches, and cigarettes is strictly prohibited.</li>
          </ul>
        </div>
  
        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2"><strong>Name:</strong> Saieed</p>
          <p><strong>Email:</strong> saieedattar64@gmail.com</p>
          <p><strong>Phone:</strong> 77589 63668</p>
          <p className="mt-2"><strong>Name:</strong> Sujeth</p>
          <p><strong>Phone:</strong> 91 2351 8942</p>
          <p className="mt-2"><strong>Name:</strong> Mohseen</p>
          <p><strong>Email:</strong> massian977@gmail.com</p>
          <p><strong>Phone:</strong> 80721 18150</p>
        </div>
      </div>
    );
}
