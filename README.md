# About
This project was designed as a way for me to gain hands-on practice with web development fundamentals (HTML, CSS, Javascript, and APIs) and basic machine learning algorithms (Python) in the context of something with which I have prior experience: the college application process.
# The *Search for Schools* Page
This page enables users to type the name of a school located in a U.S. State or territory and see facts about said school such as acceptance rate, percentage of students enrolled in any of thirteen unique majors, and average SAT score of the student body. This page takes the user's input from the input box upon the click of the submit button and passes it as an argument into the API associated with the College Scorecard data; then, the screen is updated with the information associated with that particular school.
# The *Match with Schools* Page
This page prompts users to answer a series of questions (i.e. preferred school size, preferred school state, and SAT score) in order to generate schools which they may have an interest in applying to. Upon the click of the submit button, the EEL framework is used in order to call a python function from Javascript which takes the user inputs as arguments and runs them through a decision tree algorithm to predict which school(s) may be preferred by the user.
# The *Resources* Page
This page attempts to provide users with a compendium of all things college admissions-related, as finding a one-stop place for all of the relevant resources was a particularly difficult task for me during my college application journey. This page includes a brief description of each resource and then uses HTML anchor tags in order to redirect users to any of the resources that they select upon a click on said resource.
# The *Important Deadlines* Page 
This page provides users with a timeline comprised of several of the most important dates during the college application process (i.e. when the FAFSA opens, when most schools require a commitment by the student, etc.) in addition to some additional information in regards to each of the provided dates within the timeline.

Note - This project is still in the early development stages, and there are still many features/functionalities that I hope to add. Currently, I am working on improving the functionality of the Find My Fit page in order to ensure that results that are appropriate for the user are displayed accurately and reliably onto the webpage.
## Acknowledgments 
Code for the grid layout in the "schools.html" was found in Kevin Powell's YouTube video [Flexbox design patterns you can use in your projects](https://www.youtube.com/watch?v=vQAvjof1oe4&t=493s). 

The API/Database that is used to gather the information about colleges is the [College Scorecard API](https://collegescorecard.ed.gov/data/).

This application uses the [EEL python library](https://github.com/ChrisKnott/Eel) by Chris Knott in order to facilitate communication between the Python componet and the Javascript component.  
