import React,{useState} from 'react'
import './Upcoming.css'
import emailjs from 'emailjs-com';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
export default function UpCommingVax() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_apwc1hn', e.target, 'user_9awH6ZJ5KZ1F2cz9pSBGY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <div>
            <h1> Upcomming vaccine</h1>
           <form onSubmit={sendEmail}>
           <input
            type="text"
            className="inputClass"
            placeholder="Email Address"
            name="email"
          />


<input
            type="text"
            className="inputClass"
            placeholder="Title"
            name="title"
          />

          <div className="date"> 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="districtDateInput"
                />
            
              </MuiPickersUtilsProvider>
          </div>
           

          <button type="submit">Submit</button>
      
           </form>
    

        </div>
    )
}
