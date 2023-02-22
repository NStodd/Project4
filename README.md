##### Project4
## Acts of Kindness (AoKs)

_If there's one thing that the world can always use more of, it's kindness._
_Short of being able to directly add kindness to the world, tracking data around kindness is the next best thing._
_Because remember, everything is A-oK!.


### App Description
  The name of my app is 'acts of kindness' and is meant to be a simple web tool by which you can log acts of kindness that you witness and/or are a part of.
  There is a simple description box on the landing page for the user to describe what the act of kindness was and towards whom.
  The index page displays all of the acts of kindness that you have entered into the app.

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
    *   **Home Route**: _<Route path="/" element={<App/>}>_
    *   **Index Route**: _4<Route path="" element={<Index/>} loader={indexLoader}/>_
    *   **Show Route**: _<Route path="post/:id" element={<Show/>} loader={showLoader}/>_
    *   **Create Route**: _<Route path="create" action={createAction}/>_
    *   **Update Route**: _<Route path="update/:id" action={updateAction}/>_
    *   **Delete Route**: _<Route path="delete/:id" action={deleteAction}/>_
        
### React Component Structure

-> App
 	-> Header
	-> Outlet
	-> Index
				-> Post - a single AoK, displayed in descending chronological order.
	-> Show 
	-> Create Page
	-> Delete 


### Mockups

![Index Mockup](https://i.imgur.com/MJB3LNp.png)
![Show Mockup](https://i.imgur.com/teGcqxp.png)
![Create/Update Mockup](https://i.imgur.com/TIZSBBE.png)

### Reference
[Project 4 Requirements](https://turmeric.seircohort.com/unit-projects/unit-four-project-requirements/)

[Markdown Reference](https://www.seevividly.com/images/Markdown_Reference.png)

[Turmeric Django React Frontend Lecture](https://turmeric.seircohort.com/second-language/week-22/day-2/lecture-materials/react)

[Turmeric Django API Lecture](https://turmeric.seircohort.com/second-language/week-22/day-1/lecture-materials/djangoapi)
