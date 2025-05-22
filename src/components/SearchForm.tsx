import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type SearchType = 'flights' | 'hotels' | 'trains' | 'buses'

interface SearchFormProps {
  type: SearchType
  onSubmit: (data: any) => void
}

const SearchForm = ({ type, onSubmit }: SearchFormProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [location, setLocation] = useState('')
  const [destination, setDestination] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      startDate,
      endDate,
      location,
      destination,
    })
  }

  const getPlaceholder = () => {
    switch (type) {
      case 'flights':
        return 'Enter departure city'
      case 'hotels':
        return 'Enter city or hotel name'
      case 'trains':
        return 'Enter departure station'
      case 'buses':
        return 'Enter departure city'
      default:
        return 'Enter location'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {type === 'hotels' ? 'Location' : 'From'}
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={getPlaceholder()}
            className="input-field"
            required
          />
        </div>

        {type !== 'hotels' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className="input-field"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {type === 'hotels' ? 'Check-in' : 'Departure'}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input-field"
            placeholderText="Select date"
            minDate={new Date()}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {type === 'hotels' ? 'Check-out' : 'Return'}
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="input-field"
            placeholderText="Select date"
            minDate={startDate || new Date()}
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full">
          Search {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      </div>
    </form>
  )
}

export default SearchForm 