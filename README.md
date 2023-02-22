##### Project4
## Acts of Kindness (AoKs)

_If there's one thing that the world can always use more of, it's kindness._

_Short of being able to directly add kindness to the world, tracking data around kindness is the next best thing._

_Because remember, everything is A-oK!._


### App Description
  The name of my app is 'acts of kindness' and is meant to be a simple web tool by which you can log acts of kindness that you witness and/or are a part of.
  There is a simple description box on the creation page for the user to describe what the act of kindness was and to/from whom.
  The index page displays all of the acts of kindness that have been entered into the app, starting at the top with the most recent.

### Models
  The primary model in the project will be the _Act_ class, which will contain three text fields:
    1. The person or entity that committed the Act of Kindness (AoK)-- the **actor**
    2. The person or entity that received the AoK-- the **recipient**
    3. A quick description of what the AoK was.
  All 3 will be CharFields with a max length of 100 characters, although adding nuance to the types of data are listed below as possible stretch goals.

### List of Routes
  * Backend
    *   Index - GET from '/aok/'
    *   Show - GET from '/aok/:id'
    *   Create - POST to '/aok/'
    *   Delete - DELETE to '/aok/:id'
    *   Update - POST to '/aok/:id'
 
  * Frontend
    *   **Home Route**: Route path="/"
    *   **Index Route**: Route path="/aok"
    *   **Show Route**: Route path="aok/:id"
    *   **Create Route**: Route path="create"
    *   **Update Route**: Route path="update/:id"
    *   **Delete Route**: Route path="delete/:id"
        
### React Component Structure

-> App

 	-> Header
		-> Button - To be able to create a new AoK from any view.
	
	-> Outlet
		-> Index
			-> Post - a single AoK, displayed in descending chronological order.
		-> Show 
			-> Button - to navigate to AoK's Update view.
			-> Button - to run the Delete AoK function.
		-> Create
			-> Form - 3 text fields and a submit button
	
		-> Update
			-> Form - same 3 text fields and a submit button


### Mockups

![Index Mockup](https://i.imgur.com/MJB3LNp.png)
![Show Mockup](https://i.imgur.com/teGcqxp.png)
![Create/Update Mockup](https://i.imgur.com/TIZSBBE.png)

### Reference
[Project 4 Requirements](https://turmeric.seircohort.com/unit-projects/unit-four-project-requirements/)

[Markdown Reference](https://www.seevividly.com/images/Markdown_Reference.png)

[Turmeric Django React Frontend Lecture PDF](https://turmeric.seircohort.com/second-language/week-22/day-2/lecture-materials/react)

[Turmeric Django API Lecture PDF](https://turmeric.seircohort.com/second-language/week-22/day-1/lecture-materials/djangoapi)
